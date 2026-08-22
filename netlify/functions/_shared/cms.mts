import { getStore, type Store } from '@netlify/blobs';
import { getUser, type User } from '@netlify/identity';
import type { Context } from '@netlify/functions';
import { seedEntries } from '../../../data/contentSeeds.ts';
import type { ContentDraft, ContentEntry, ContentSection } from '../../../types/content';

declare const Netlify: { env: { get: (key: string) => string | undefined } };

const CONTENT_STORE = 'zenith-cms-content';
const ASSET_STORE = 'zenith-cms-assets';
const PREVIEW_CONTENT_STORE = 'zenith-cms-preview-content';
const PREVIEW_ASSET_STORE = 'zenith-cms-preview-assets';
const CONTENT_KEY = 'content.json';
const strongStore = (name: string): Store => getStore(name, { consistency: 'strong' });

const cloneSeeds = () => JSON.parse(JSON.stringify(seedEntries)) as ContentEntry[];

export const isProduction = (context: Context) => context.deploy?.context === 'production';

export const getContentStore = (context: Context): Store => (
  strongStore(isProduction(context) ? CONTENT_STORE : PREVIEW_CONTENT_STORE)
);

export const getWritableAssetStore = (context: Context, forceProduction = false): Store => (
  strongStore(forceProduction || isProduction(context) ? ASSET_STORE : PREVIEW_ASSET_STORE)
);

export const getReadableAssetStores = (context: Context): Store[] => (
  [strongStore(isProduction(context) ? ASSET_STORE : PREVIEW_ASSET_STORE)]
);

export const loadEntries = async (context: Context): Promise<ContentEntry[]> => {
  const stored = await getContentStore(context).get(CONTENT_KEY, { type: 'json' });
  return Array.isArray(stored) ? stored as ContentEntry[] : cloneSeeds();
};

export const saveEntries = async (context: Context, entries: ContentEntry[]) => {
  await getContentStore(context).setJSON(CONTENT_KEY, entries);
};

const allowedSections = new Set<ContentSection>(['media', 'event', 'resource', 'testimonial']);
const clean = (value: unknown, max = 10_000) => typeof value === 'string' ? value.trim().slice(0, max) : '';

export const slugify = (value: string) => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')
  .slice(0, 100);

export const normalizeDraft = (input: Partial<ContentDraft>): ContentDraft => {
  const section = allowedSections.has(input.section as ContentSection) ? input.section as ContentSection : 'media';
  const title = clean(input.title, 180);
  const slug = slugify(clean(input.slug, 120) || title);
  const status = input.status === 'published' ? 'published' : 'draft';

  if (!title || !slug) throw new Error('A title is required.');

  return {
    slug,
    section,
    contentType: clean(input.contentType, 80) || section,
    title,
    subtitle: clean(input.subtitle, 240) || undefined,
    description: clean(input.description, 2_000),
    body: clean(input.body, 25_000) || undefined,
    date: clean(input.date, 32) || new Date().toISOString().slice(0, 10),
    eventDate: clean(input.eventDate, 32) || undefined,
    eventEndDate: clean(input.eventEndDate, 32) || undefined,
    location: clean(input.location, 240) || undefined,
    category: clean(input.category, 100) || 'General',
    author: clean(input.author, 160) || undefined,
    source: clean(input.source, 240) || undefined,
    featuredImage: input.featuredImage,
    gallery: Array.isArray(input.gallery) ? input.gallery.slice(0, 100) : [],
    video: input.video,
    videoPoster: input.videoPoster,
    externalUrl: clean(input.externalUrl, 2_000) || undefined,
    document: input.document,
    ctaLabel: clean(input.ctaLabel, 80) || undefined,
    displayOrder: Number.isFinite(Number(input.displayOrder)) ? Number(input.displayOrder) : 0,
    featured: Boolean(input.featured),
    status,
  };
};

export const assertSameOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) throw new Error('Invalid request origin.');
};

export const assertEditor = (user: User | null) => {
  const email = user?.email?.toLowerCase();
  if (!user || !email) throw new Error('Unauthorized');

  const configured = (Netlify.env.get('ZENITH_ADMIN_EMAILS') || '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  const roles = [
    ...(Array.isArray(user.roles) ? user.roles.map(String) : []),
    ...(Array.isArray(user.appMetadata?.roles) ? user.appMetadata.roles.map(String) : []),
  ];
  const allowed = configured.includes(email)
    || email.endsWith('@zenithriskstrategies.com')
    || roles.includes('admin')
    || roles.includes('content-editor');

  if (!allowed) throw new Error('Forbidden');
  return user;
};

export const requireEditor = async () => assertEditor(await getUser());

export const json = (value: unknown, status = 200, headers: Record<string, string> = {}) => new Response(
  JSON.stringify(value),
  { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers } },
);

export const authErrorResponse = (error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unauthorized';
  if (message === 'Forbidden') return json({ error: 'This account is not authorized to manage Zenith content.' }, 403);
  if (message === 'Unauthorized') return json({ error: 'Please sign in to continue.' }, 401);
  return json({ error: message || 'Request failed.' }, 400);
};

export const getImportToken = () => Netlify.env.get('CMS_IMPORT_TOKEN') || '';
