import type { Config } from '@netlify/functions';
import { assertHolidayAccess } from './_shared/holiday-access.mts';
import { assertSameOrigin, readJsonObject, jsonResponse, PublicFormError } from './_shared/form-security.mts';
export default async (request: Request) => {
  try {
    if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed.' }, 405);
    assertSameOrigin(request);
    const input = await readJsonObject(request);
    assertHolidayAccess(input.invitation);
    return jsonResponse({ success: true });
  } catch (error) {
    if (error instanceof PublicFormError) return jsonResponse({ error: error.publicMessage }, error.status);
    return jsonResponse({ error: 'Unable to verify this invitation. Please try again.' }, 503);
  }
};
export const config: Config = { path: '/api/holiday-access' };
