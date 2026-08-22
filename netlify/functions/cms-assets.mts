import { randomUUID, timingSafeEqual } from 'node:crypto';
import type { Config, Context } from '@netlify/functions';
import {
  assertSameOrigin,
  authErrorResponse,
  getImportToken,
  getReadableAssetStores,
  getWritableAssetStore,
  json,
  requireEditor,
} from './_shared/cms.mts';

// Keep multipart uploads below Netlify's encoded synchronous request ceiling.
const MAX_BYTES = 4_000_000;
const allowedTypes = new Set([
  'image/jpeg', 'image/png', 'image/webp', 'image/avif',
  'video/mp4',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const safeId = (value: unknown) => typeof value === 'string' && /^[a-z0-9][a-z0-9-]{2,159}$/i.test(value) ? value : '';
const safeName = (value: string) => value.replace(/[^a-z0-9._-]+/gi, '-').slice(0, 180) || 'upload';
const assetKind = (mimeType: string) => mimeType.startsWith('image/') ? 'image' : mimeType.startsWith('video/') ? 'video' : 'document';

const tokenMatches = (request: Request) => {
  const expected = getImportToken();
  const received = request.headers.get('x-cms-import-token') || '';
  if (!expected || expected.length !== received.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
};

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const id = safeId(context.params.id || url.searchParams.get('id'));

  try {
    if (request.method === 'GET' || request.method === 'HEAD') {
      if (!id) return json({ error: 'Asset not found.' }, 404);
      for (const store of getReadableAssetStores(context)) {
        const result = await store.getWithMetadata(`assets/${id}`, { type: 'arrayBuffer' });
        if (!result?.data) continue;
        const data = Buffer.from(result.data);
        const metadata = result.metadata || {};
        const mimeType = String(metadata.contentType || 'application/octet-stream');
        const filename = safeName(String(metadata.filename || id));
        const baseHeaders: Record<string, string> = {
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Type': mimeType,
          'Content-Disposition': `${url.searchParams.get('download') === '1' ? 'attachment' : 'inline'}; filename="${filename}"`,
        };
        if (request.method === 'HEAD') return new Response(null, { status: 200, headers: { ...baseHeaders, 'Content-Length': String(data.length) } });

        const range = request.headers.get('range');
        if (range) {
          const match = /^bytes=(\d+)-(\d*)$/.exec(range);
          if (match) {
            const start = Number(match[1]);
            const end = match[2] ? Math.min(Number(match[2]), data.length - 1) : data.length - 1;
            if (start <= end && start < data.length) {
              const chunk = data.subarray(start, end + 1);
              return new Response(chunk, {
                status: 206,
                headers: {
                  ...baseHeaders,
                  'Content-Length': String(chunk.length),
                  'Content-Range': `bytes ${start}-${end}/${data.length}`,
                },
              });
            }
          }
        }
        return new Response(data, { status: 200, headers: { ...baseHeaders, 'Content-Length': String(data.length) } });
      }
      return json({ error: 'Asset not found.' }, 404);
    }

    if (!['POST', 'DELETE'].includes(request.method)) return json({ error: 'Method not allowed.' }, 405);
    assertSameOrigin(request);
    const isImport = tokenMatches(request);
    if (!isImport) await requireEditor();

    if (request.method === 'DELETE') {
      if (!id) return json({ error: 'Missing asset id.' }, 400);
      await getWritableAssetStore(context).delete(`assets/${id}`);
      return json({ success: true });
    }

    const form = await request.formData();
    const file = form.get('file');
    if (!(file instanceof File)) return json({ error: 'Choose a file to upload.' }, 400);
    if (!allowedTypes.has(file.type)) return json({ error: 'This file type is not supported.' }, 415);
    if (file.size > MAX_BYTES) return json({ error: 'Files must be 4 MB or smaller. Images are optimized in the browser before upload; use an external host for larger videos.' }, 413);

    const preferredId = isImport ? safeId(form.get('id')) : '';
    const assetId = preferredId || randomUUID();
    const filename = safeName(file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    const forceProduction = isImport && form.get('destination') === 'production';
    await getWritableAssetStore(context, forceProduction).set(`assets/${assetId}`, buffer, {
      metadata: {
        contentType: file.type,
        filename,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      },
    });

    return json({
      asset: {
        id: assetId,
        kind: assetKind(file.type),
        url: `/api/cms/assets/${assetId}`,
        filename,
        mimeType: file.type,
        size: file.size,
      },
    }, 201);
  } catch (error) {
    console.error('CMS asset error', error);
    return authErrorResponse(error);
  }
};

export const config: Config = {
  path: ['/api/cms/assets', '/api/cms/assets/:id'],
};
