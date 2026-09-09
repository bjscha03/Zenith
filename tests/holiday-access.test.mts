import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { holidayRsvpDefinition } from '../netlify/functions/holiday-rsvp.mts';
import { createFormHandler } from '../netlify/functions/_shared/form-runtime.mts';
import access from '../netlify/functions/holiday-access.mts';
const valid = process.env.TEST_HOLIDAY_INVITATION;
const shortKey = process.env.TEST_SHORT_INVITATION;
const origin = 'https://www.zenithriskstrategies.com';
const req = (invitation: unknown) => new Request(origin + '/api/holiday-access', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: origin }, body: JSON.stringify({ invitation }) });
test('invitation endpoint rejects absent and forged keys', async () => {
  for (const token of [undefined, '', 'a'.repeat(43), {}, ['a']]) assert.equal((await access(req(token))).status, 403);
});
test('direct RSVP without invitation never persists or emails', async () => {
  let saved = false;
  const handler = createFormHandler(holidayRsvpDefinition, { saveSubmission: async () => { saved = true; return { status: 'created' }; } });
  const response = await handler(req('a'.repeat(43)), { requestId: 'access-test' } as any);
  assert.equal(response.status, 403); assert.equal(saved, false);
});
test('public events page contains no invitation or RSVP component', () => {
  assert.doesNotMatch(readFileSync(new URL('../pages/Events.tsx', import.meta.url), 'utf8'), /HolidayRsvp|holiday-invitation|holiday-rsvp/);
});
test('issued invitation permits each response and preserves guest validation', { skip: !valid }, async () => {
  assert.equal((await access(req(valid))).status, 200);
  for (const response of ['attend', 'attend-with-guest', 'decline']) {
    const result = holidayRsvpDefinition.normalize({ invitation: valid, name: 'Test', email: 'test@example.com', response, guestName: 'Guest' });
    assert.equal(result.response, response);
    assert.equal(result.guestName, response === 'attend-with-guest' ? 'Guest' : '');
  }
  assert.throws(() => holidayRsvpDefinition.normalize({ invitation: valid, response: 'attend-with-guest' }), /guest/);
});

test('short invitation verifies and authorizes RSVP; forged short key is rejected', { skip: !shortKey }, async () => {
  assert.equal((await access(req(shortKey))).status, 200);
  assert.equal((await access(req('a'.repeat(12)))).status, 403);
  assert.equal(holidayRsvpDefinition.normalize({ invitation: shortKey, name: 'Test', email: 'test@example.com', response: 'attend' }).response, 'attend');
});
