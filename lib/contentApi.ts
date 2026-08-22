import { seedEntries } from '../data/contentSeeds';
import type { ContentDraft, ContentEntry, ContentSection } from '../types/content';
import type { User } from '@netlify/identity';

const apiUrl = '/api/cms/content';

const parseResponse = async (response: Response) => {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && typeof window !== 'undefined') window.dispatchEvent(new Event('zenith-auth-expired'));
    throw new Error(payload.error || 'The content service is unavailable.');
  }
  return payload;
};

export const getContentEntries = async (section?: ContentSection, admin = false): Promise<ContentEntry[]> => {
  const params = new URLSearchParams();
  if (section) params.set('section', section);
  if (admin) params.set('admin', '1');
  try {
    const response = await fetch(`${apiUrl}?${params.toString()}`, { credentials: 'same-origin', cache: admin ? 'no-store' : 'default' });
    return (await parseResponse(response)).entries || [];
  } catch (error) {
    if (admin) throw error;
    return seedEntries.filter((entry) => entry.status === 'published' && (!section || entry.section === section || (section === 'media' && entry.section === 'testimonial')));
  }
};

export const getContentEntry = async (section: ContentSection, slug: string, admin = false) => {
  const params = new URLSearchParams({ section, slug });
  if (admin) params.set('admin', '1');
  try {
    const response = await fetch(`${apiUrl}?${params.toString()}`, { credentials: 'same-origin', cache: admin ? 'no-store' : 'default' });
    const entries: ContentEntry[] = (await parseResponse(response)).entries || [];
    return entries[0] || null;
  } catch (error) {
    if (admin) throw error;
    return seedEntries.find((entry) => entry.status === 'published' && entry.slug === slug && (entry.section === section || (section === 'media' && entry.section === 'testimonial'))) || null;
  }
};

export const saveContentEntry = async (draft: ContentDraft) => {
  const response = await fetch(apiUrl, {
    method: draft.id ? 'PUT' : 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(draft),
  });
  return (await parseResponse(response)).entry as ContentEntry;
};

export const deleteContentEntry = async (id: string) => {
  const response = await fetch(`${apiUrl}?id=${encodeURIComponent(id)}`, { method: 'DELETE', credentials: 'same-origin' });
  await parseResponse(response);
};

const sessionUrl = '/api/auth/session';

export const getAdminSession = async (): Promise<User | null> => {
  const response = await fetch(sessionUrl, { credentials: 'same-origin', cache: 'no-store' });
  if (response.status === 401) return null;
  return (await parseResponse(response)).user as User;
};

export const loginAdminSession = async (email: string, password: string): Promise<User> => {
  const response = await fetch(sessionUrl, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return (await parseResponse(response)).user as User;
};

export const logoutAdminSession = async () => {
  const response = await fetch(sessionUrl, { method: 'DELETE', credentials: 'same-origin' });
  await parseResponse(response);
};

export const imageUrl = (url?: string, width = 900, height?: number, fit: 'cover' | 'contain' = 'cover') => {
  if (!url) return '';
  if (!url.startsWith('/')) return url;
  const params = new URLSearchParams({ url, w: String(width), fit, q: '82' });
  if (height) params.set('h', String(height));
  return `/.netlify/images?${params.toString()}`;
};

export const uploadAsset = (file: File, onProgress?: (progress: number) => void) => new Promise<any>((resolve, reject) => {
  const request = new XMLHttpRequest();
  request.open('POST', '/api/cms/assets');
  request.withCredentials = true;
  request.upload.onprogress = (event) => {
    if (event.lengthComputable) onProgress?.(Math.round((event.loaded / event.total) * 100));
  };
  request.onerror = () => reject(new Error('Upload failed. Check your connection and try again.'));
  request.onload = () => {
    let payload: any = {};
    try { payload = JSON.parse(request.responseText); } catch { /* handled below */ }
    if (request.status >= 200 && request.status < 300) resolve(payload.asset);
    else reject(new Error(payload.error || 'Upload failed.'));
  };
  const form = new FormData();
  form.append('file', file);
  request.send(form);
});

export const optimizeImage = async (file: File): Promise<File> => {
  if (!file.type.startsWith('image/') || file.type === 'image/gif') return file;
  const bitmap = await createImageBitmap(file);
  const maxSide = 2200;
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) return file;
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.84));
  if (!blob) return file;
  const filename = file.name.replace(/\.[^.]+$/, '') + '.webp';
  return new File([blob], filename, { type: 'image/webp', lastModified: Date.now() });
};
