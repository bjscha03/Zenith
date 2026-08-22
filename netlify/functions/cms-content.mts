import { randomUUID } from 'node:crypto';
import type { Config, Context } from '@netlify/functions';
import type { ContentEntry, ContentSection } from '../../types/content';
import {
  assertSameOrigin,
  authErrorResponse,
  json,
  loadEntries,
  normalizeDraft,
  requireEditor,
  saveEntries,
} from './_shared/cms.mts';

const sortEntries = (entries: ContentEntry[]) => entries.sort((a, b) => {
  if (a.displayOrder !== b.displayOrder) return a.displayOrder - b.displayOrder;
  return (b.eventDate || b.date || '').localeCompare(a.eventDate || a.date || '');
});

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const wantsAdmin = url.searchParams.get('admin') === '1';

  try {
    if (request.method === 'GET') {
      if (wantsAdmin) await requireEditor();
      const section = url.searchParams.get('section') as ContentSection | null;
      const slug = url.searchParams.get('slug');
      const id = url.searchParams.get('id');
      let entries = await loadEntries(context);
      if (!wantsAdmin) entries = entries.filter((entry) => entry.status === 'published');
      if (section) entries = entries.filter((entry) => entry.section === section || (section === 'media' && entry.section === 'testimonial'));
      if (slug) entries = entries.filter((entry) => entry.slug === slug);
      if (id) entries = entries.filter((entry) => entry.id === id);

      return json(
        { entries: sortEntries(entries), preview: !context.deploy?.published },
        200,
        wantsAdmin
          ? { 'Cache-Control': 'private, no-store' }
          : { 'Cache-Control': 'public, max-age=0, must-revalidate' },
      );
    }

    if (!['POST', 'PUT', 'DELETE'].includes(request.method)) return json({ error: 'Method not allowed.' }, 405);
    assertSameOrigin(request);
    const user = await requireEditor();
    const entries = await loadEntries(context);

    if (request.method === 'DELETE') {
      const id = url.searchParams.get('id');
      if (!id) return json({ error: 'Missing content id.' }, 400);
      const next = entries.filter((entry) => entry.id !== id);
      if (next.length === entries.length) return json({ error: 'Content not found.' }, 404);
      await saveEntries(context, next);
      return json({ success: true });
    }

    const input = await request.json();
    const draft = normalizeDraft(input);
    const now = new Date().toISOString();
    const duplicate = entries.find((entry) => entry.slug === draft.slug && entry.id !== input.id);
    if (duplicate) return json({ error: 'That URL slug is already in use.' }, 409);

    if (request.method === 'POST') {
      const entry: ContentEntry = {
        ...draft,
        id: randomUUID(),
        createdAt: now,
        updatedAt: now,
      };
      await saveEntries(context, [...entries, entry]);
      return json({ entry, savedBy: user.email }, 201);
    }

    const id = cleanId(input.id || url.searchParams.get('id'));
    const index = entries.findIndex((entry) => entry.id === id);
    if (index < 0) return json({ error: 'Content not found.' }, 404);
    const entry: ContentEntry = {
      ...draft,
      id,
      createdAt: entries[index].createdAt,
      updatedAt: now,
    };
    const next = [...entries];
    next[index] = entry;
    await saveEntries(context, next);
    return json({ entry, savedBy: user.email });
  } catch (error) {
    console.error('CMS content error', error);
    return authErrorResponse(error);
  }
};

const cleanId = (value: unknown) => typeof value === 'string' ? value.slice(0, 160) : '';

export const config: Config = {
  path: '/api/cms/content',
};
