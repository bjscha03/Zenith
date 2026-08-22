import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const admin = readFileSync(new URL('../pages/Admin.tsx', import.meta.url), 'utf8');

test('admin uses an accessible branded delete confirmation instead of the browser prompt', () => {
  assert.doesNotMatch(admin, /window\.confirm/);
  assert.match(admin, /role="dialog"/);
  assert.match(admin, /aria-modal="true"/);
  assert.match(admin, /Delete permanently/);
  assert.match(admin, /change its status to Draft instead/);
});
