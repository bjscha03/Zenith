import { login, logout, verifyRequestOrigin } from '@netlify/identity';
import type { Config } from '@netlify/functions';
import { assertEditor, authErrorResponse, json, requireEditor } from './_shared/cms.mts';

export default async (request: Request) => {
  try {
    if (request.method === 'GET') {
      return json({ user: await requireEditor() }, 200, { 'Cache-Control': 'private, no-store' });
    }

    if (!['POST', 'DELETE'].includes(request.method)) return json({ error: 'Method not allowed.' }, 405);
    verifyRequestOrigin(request);

    if (request.method === 'DELETE') {
      await logout();
      return json({ success: true }, 200, { 'Cache-Control': 'private, no-store' });
    }

    const input = await request.json().catch(() => ({}));
    const email = typeof input.email === 'string' ? input.email.trim() : '';
    const password = typeof input.password === 'string' ? input.password : '';
    if (!email || !password) return json({ error: 'Enter your email and password.' }, 400);

    const signedInUser = await login(email, password);
    try {
      const user = assertEditor(signedInUser);
      return json({ user }, 200, { 'Cache-Control': 'private, no-store' });
    } catch (error) {
      await logout().catch(() => undefined);
      throw error;
    }
  } catch (error) {
    console.error('Admin session error', error);
    return authErrorResponse(error);
  }
};

export const config: Config = {
  path: '/api/auth/session',
};
