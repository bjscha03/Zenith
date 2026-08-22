import React, { useEffect, useMemo, useState } from 'react';
import {
  acceptInvite,
  logout,
  requestPasswordRecovery,
  updateUser,
  type User,
} from '@netlify/identity';
import {
  deleteContentEntry,
  getAdminSession,
  getContentEntries,
  loginAdminSession,
  logoutAdminSession,
  optimizeImage,
  saveContentEntry,
  uploadAsset,
} from '../lib/contentApi';
import type { ContentAsset, ContentDraft, ContentEntry, ContentSection } from '../types/content';
import { contentPath } from '../types/content';

const sectionDefaults: Record<ContentSection, string> = { media: 'article', event: 'event', resource: 'guide', testimonial: 'testimonial' };
const emptyDraft = (section: ContentSection = 'media'): ContentDraft => ({
  section,
  contentType: sectionDefaults[section],
  title: '',
  slug: '',
  subtitle: '',
  description: '',
  body: '',
  date: new Date().toISOString().slice(0, 10),
  category: section === 'event' ? 'Events' : section === 'resource' ? 'Resources' : 'News',
  gallery: [],
  displayOrder: 0,
  featured: false,
  status: 'draft',
});

const typeOptions: Record<ContentSection, string[]> = {
  media: ['article', 'press-release', 'news-coverage', 'podcast', 'interview', 'research', 'video', 'photo-gallery'],
  event: ['event', 'event-recap', 'conference', 'webinar'],
  resource: ['guide', 'research', 'document', 'download', 'white-paper'],
  testimonial: ['testimonial'],
};

const Field: React.FC<{ label: string; hint?: string; children: React.ReactNode }> = ({ label, hint, children }) => <label className="block"><span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">{label}</span>{children}{hint && <span className="block text-xs text-slate-400 mt-2">{hint}</span>}</label>;
const inputClass = 'w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent';

const AdminLogin: React.FC<{ onLogin: (user: User) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const callbackType = sessionStorage.getItem('zenith_auth_callback');
  const inviteToken = sessionStorage.getItem('zenith_invite_token');

  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setMessage('');
    try { onLogin(await loginAdminSession(email, password)); }
    catch (error) { setMessage(error instanceof Error ? error.message : 'Sign in failed.'); }
    finally { setBusy(false); }
  };

  const finishPassword = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setMessage('');
    try {
      const user = callbackType === 'invite' && inviteToken
        ? await acceptInvite(inviteToken, newPassword)
        : await updateUser({ password: newPassword });
      sessionStorage.removeItem('zenith_auth_callback');
      sessionStorage.removeItem('zenith_invite_token');
      const verified = await getAdminSession();
      if (!verified) throw new Error('Your password was saved, but the session could not be verified. Please sign in.');
      onLogin(verified || user);
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to set password.'); }
    finally { setBusy(false); }
  };

  if (callbackType === 'invite' || callbackType === 'recovery') return (
    <form onSubmit={finishPassword} className="space-y-5">
      <div><h1 className="text-3xl font-bold text-zenith-navy mb-2">{callbackType === 'invite' ? 'Accept your invitation' : 'Choose a new password'}</h1><p className="text-slate-500">Create a secure password to access Zenith’s content manager.</p></div>
      <Field label="New password"><input className={inputClass} type="password" minLength={8} required value={newPassword} onChange={(event) => setNewPassword(event.target.value)} autoComplete="new-password" /></Field>
      {message && <p role="alert" className="text-sm text-red-600">{message}</p>}
      <button disabled={busy} className="w-full py-4 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-lg disabled:opacity-50">{busy ? 'Saving…' : 'Set password & continue'}</button>
    </form>
  );

  return (
    <form onSubmit={submit} className="space-y-5">
      <div><span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-3">Zenith Content Manager</span><h1 className="text-3xl font-bold text-zenith-navy mb-2">Administrator sign in</h1><p className="text-slate-500">Authorized Zenith staff can manage media, events, and resources here.</p></div>
      <Field label="Email"><input className={inputClass} type="email" required value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" /></Field>
      <Field label="Password"><input className={inputClass} type="password" required value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" /></Field>
      {message && <p role="alert" className="text-sm text-red-600">{message}</p>}
      <button disabled={busy} className="w-full py-4 bg-zenith-blue text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-lg disabled:opacity-50">{busy ? 'Signing in…' : 'Sign in'}</button>
      <button type="button" onClick={async () => { if (!email) return setMessage('Enter your email first.'); try { await requestPasswordRecovery(email); setMessage('Check your email for a password reset link.'); } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to send reset email.'); } }} className="w-full text-sm text-blue-700 underline">Forgot password?</button>
      <p className="text-xs text-slate-400 text-center">Accounts are invitation-only.</p>
    </form>
  );
};

const Admin: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [entries, setEntries] = useState<ContentEntry[]>([]);
  const [draft, setDraft] = useState<ContentDraft | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [pendingDelete, setPendingDelete] = useState<ContentEntry | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let active = true;
    const authExpired = () => { setUser(null); setEntries([]); setDraft(null); };
    window.addEventListener('zenith-auth-expired', authExpired);
    getAdminSession()
      .then((current) => { if (active) setUser(current); })
      .catch((reason) => { if (active) setError(reason instanceof Error ? reason.message : 'Unable to verify your session.'); })
      .finally(() => { if (active) setAuthLoading(false); });
    return () => { active = false; window.removeEventListener('zenith-auth-expired', authExpired); };
  }, []);

  const refresh = async () => {
    setLoading(true); setError('');
    try { setEntries(await getContentEntries(undefined, true)); }
    catch (reason) { setError(reason instanceof Error ? reason.message : 'Unable to load content.'); }
    finally { setLoading(false); }
  };
  useEffect(() => { if (user) refresh(); }, [user]);

  const visibleEntries = useMemo(() => entries.filter((entry) => {
    const matchesText = `${entry.title} ${entry.category} ${entry.contentType}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'all' || entry.section === filter || entry.status === filter;
    return matchesText && matchesFilter;
  }), [entries, query, filter]);

  const setValue = <K extends keyof ContentDraft>(key: K, value: ContentDraft[K]) => setDraft((current) => current ? { ...current, [key]: value } : current);

  const validateDraft = (candidate: ContentDraft) => {
    if (candidate.section === 'media' && candidate.contentType === 'video' && !candidate.videoPoster && !candidate.featuredImage) {
      setError('Add a speaker portrait / video poster before saving. It automatically fills the right side of the speaker hero.');
      return false;
    }
    return true;
  };

  const doUpload = async (files: FileList | null, target: 'featuredImage' | 'gallery' | 'video' | 'videoPoster' | 'document') => {
    if (!files?.length || !draft) return;
    setUploading(target); setUploadProgress(0); setError('');
    try {
      const uploaded: ContentAsset[] = [];
      for (let index = 0; index < files.length; index++) {
        const source = files[index];
        const prepared = source.type.startsWith('image/') ? await optimizeImage(source) : source;
        const asset = await uploadAsset(prepared, (progress) => setUploadProgress(Math.round(((index + progress / 100) / files.length) * 100)));
        uploaded.push({ ...asset, alt: source.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ') });
      }
      if (target === 'gallery') setValue('gallery', [...draft.gallery, ...uploaded]);
      else setValue(target, uploaded[0] as any);
      setNotice(`${uploaded.length} file${uploaded.length === 1 ? '' : 's'} uploaded.`);
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Upload failed.'); }
    finally { setUploading(''); setUploadProgress(0); }
  };

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft || saving) return;
    if (!validateDraft(draft)) return;
    setSaving(true); setError(''); setNotice('');
    try {
      const saved = await saveContentEntry(draft);
      setDraft(saved);
      setNotice(saved.status === 'published' ? 'Published successfully.' : 'Draft saved.');
      await refresh();
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Unable to save content.'); }
    finally { setSaving(false); }
  };

  const preview = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!draft || saving || uploading) return;
    if (!event.currentTarget.form?.reportValidity()) return;
    if (!validateDraft(draft)) return;

    const previewWindow = window.open('about:blank', '_blank');
    if (previewWindow) {
      previewWindow.opener = null;
      previewWindow.document.title = 'Preparing preview…';
      previewWindow.document.body.innerHTML = '<p style="font:16px system-ui;padding:32px;color:#334155">Saving the latest draft and preparing your preview…</p>';
    }

    setSaving(true); setError(''); setNotice('');
    try {
      const saved = await saveContentEntry(draft);
      setDraft(saved);
      setNotice(saved.status === 'published' ? 'Changes saved. Preview opened.' : 'Draft saved. Preview opened.');
      await refresh();
      const url = new URL(window.location.href);
      url.hash = `#${contentPath(saved.section, saved.slug)}?preview=1`;
      if (previewWindow) previewWindow.location.replace(url.href);
      else window.location.assign(url.href);
    } catch (reason) {
      previewWindow?.close();
      setError(reason instanceof Error ? reason.message : 'Unable to save and preview content.');
    } finally { setSaving(false); }
  };

  useEffect(() => {
    if (!pendingDelete) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !deleting) setPendingDelete(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [pendingDelete, deleting]);

  const remove = (entry: ContentEntry) => setPendingDelete(entry);

  const confirmRemove = async () => {
    if (!pendingDelete || deleting) return;
    const entry = pendingDelete;
    setDeleting(true);
    setError('');
    try {
      await deleteContentEntry(entry.id);
      if (draft?.id === entry.id) setDraft(null);
      setPendingDelete(null);
      setNotice('Content deleted.');
      await refresh();
    }
    catch (reason) { setError(reason instanceof Error ? reason.message : 'Unable to delete content.'); }
    finally { setDeleting(false); }
  };

  if (authLoading) return <div className="min-h-[70vh] flex items-center justify-center"><div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" /></div>;
  if (!user) return <div className="min-h-[75vh] bg-slate-50 flex items-center justify-center px-4 py-20"><div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-8 md:p-10"><AdminLogin onLogin={setUser} /></div></div>;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-zenith-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.3em]">Zenith Content Manager</span><h1 className="text-2xl font-bold mt-2">Media, Events & Resources</h1></div>
          <div className="flex items-center gap-4"><span className="text-xs text-slate-300">{user.email}</span><button type="button" onClick={async () => { try { await logoutAdminSession(); } finally { await logout().catch(() => undefined); setUser(null); setEntries([]); setDraft(null); } }} className="px-4 py-2 border border-white/30 rounded text-[10px] font-black uppercase tracking-widest">Sign out</button></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {(notice || error) && <div role="status" className={`mb-6 px-5 py-4 rounded-lg border ${error ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>{error || notice}</div>}
        {!draft ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {(['media', 'event', 'resource', 'testimonial'] as ContentSection[]).map((section) => <button key={section} type="button" onClick={() => { setDraft(emptyDraft(section)); setNotice(''); }} className="p-5 bg-white border border-slate-200 rounded-xl text-left hover:border-blue-400 hover:shadow-md transition-all"><span className="text-2xl text-blue-600 block mb-3">＋</span><strong className="text-zenith-navy capitalize">Add {section}</strong></button>)}
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-slate-200 flex flex-col md:flex-row gap-4 justify-between"><input className={`${inputClass} md:max-w-sm`} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search content…" aria-label="Search content" /><select className={`${inputClass} md:w-48`} value={filter} onChange={(event) => setFilter(event.target.value)}><option value="all">All content</option><option value="media">Media</option><option value="event">Events</option><option value="resource">Resources</option><option value="testimonial">Testimonials</option><option value="published">Published</option><option value="draft">Drafts</option></select></div>
              {loading ? <p className="p-8 text-slate-500">Loading content…</p> : visibleEntries.length ? <div className="divide-y divide-slate-100">{visibleEntries.map((entry) => <div key={entry.id} className="p-5 flex flex-col md:flex-row md:items-center gap-4"><div className="flex-grow min-w-0"><div className="flex flex-wrap gap-2 mb-2"><span className="text-[9px] font-black uppercase tracking-widest text-blue-600">{entry.section}</span><span className={`text-[9px] font-black uppercase tracking-widest ${entry.status === 'published' ? 'text-green-600' : 'text-amber-600'}`}>{entry.status}</span>{entry.featured && <span className="text-[9px] font-black uppercase tracking-widest text-purple-600">Featured</span>}</div><h2 className="font-bold text-zenith-navy truncate">{entry.title}</h2><p className="text-xs text-slate-400 mt-1">{entry.category} · Updated {new Date(entry.updatedAt).toLocaleDateString()}</p></div><div className="flex gap-2"><button type="button" onClick={() => setDraft(entry)} className="px-4 py-2 bg-slate-100 rounded text-xs font-bold">Edit</button><button type="button" onClick={() => { const url = new URL(window.location.href); url.hash = `#${contentPath(entry.section, entry.slug)}?preview=1`; window.open(url.href, '_blank', 'noopener'); }} className="px-4 py-2 bg-slate-100 rounded text-xs font-bold">Preview</button><button type="button" onClick={() => remove(entry)} className="px-4 py-2 bg-red-50 text-red-700 rounded text-xs font-bold">Delete</button></div></div>)}</div> : <p className="p-8 text-slate-500">No content matches this view.</p>}
            </div>
          </>
        ) : (
          <form onSubmit={save} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="p-5 md:p-7 border-b border-slate-200 flex flex-col md:flex-row gap-4 justify-between md:items-center"><div><button type="button" onClick={() => setDraft(null)} className="text-sm text-blue-700 mb-2">← Back to content</button><h2 className="text-2xl font-bold text-zenith-navy">{draft.id ? 'Edit' : 'Add'} <span className="capitalize">{draft.section}</span></h2></div><div className="flex gap-3"><button type="button" onClick={preview} disabled={saving || Boolean(uploading)} className="px-5 py-3 border border-slate-300 rounded-lg text-xs font-bold disabled:opacity-50">{saving ? 'Preparing…' : 'Save & preview'}</button><button disabled={saving || Boolean(uploading)} className="px-6 py-3 bg-zenith-blue text-white rounded-lg text-xs font-black uppercase tracking-widest disabled:opacity-50">{saving ? 'Saving…' : draft.status === 'published' ? 'Save & publish' : 'Save draft'}</button></div></div>
            <div className="p-5 md:p-8 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="grid md:grid-cols-2 gap-5"><Field label="Section"><select className={inputClass} value={draft.section} onChange={(event) => { const section = event.target.value as ContentSection; setDraft({ ...draft, section, contentType: sectionDefaults[section] }); }}>{(['media', 'event', 'resource', 'testimonial'] as ContentSection[]).map((item) => <option key={item} value={item}>{item}</option>)}</select></Field><Field label="Content type"><select className={inputClass} value={draft.contentType} onChange={(event) => setValue('contentType', event.target.value)}>{typeOptions[draft.section].map((item) => <option key={item} value={item}>{item.replace(/-/g, ' ')}</option>)}</select></Field></div>
                <Field label="Title"><input className={inputClass} required maxLength={180} value={draft.title} onChange={(event) => setValue('title', event.target.value)} /></Field>
                <Field label="Subtitle"><input className={inputClass} maxLength={240} value={draft.subtitle || ''} onChange={(event) => setValue('subtitle', event.target.value)} /></Field>
                <Field label="URL slug" hint="Leave blank to generate it from the title."><input className={inputClass} value={draft.slug} onChange={(event) => setValue('slug', event.target.value)} /></Field>
                <Field label="Short description"><textarea className={`${inputClass} min-h-28`} required value={draft.description} onChange={(event) => setValue('description', event.target.value)} /></Field>
                <Field label="Full content"><textarea className={`${inputClass} min-h-52`} value={draft.body || ''} onChange={(event) => setValue('body', event.target.value)} /></Field>
                <div className="grid md:grid-cols-2 gap-5"><Field label="Category"><input className={inputClass} value={draft.category} onChange={(event) => setValue('category', event.target.value)} /></Field><Field label="Content date"><input className={inputClass} type="date" value={draft.date} onChange={(event) => setValue('date', event.target.value)} /></Field></div>
                {draft.section === 'event' && <div className="grid md:grid-cols-2 gap-5"><Field label="Event date"><input className={inputClass} type="date" value={draft.eventDate || ''} onChange={(event) => setValue('eventDate', event.target.value)} /></Field><Field label="Location"><input className={inputClass} value={draft.location || ''} onChange={(event) => setValue('location', event.target.value)} /></Field></div>}
                {(draft.section === 'media' || draft.section === 'testimonial') && <div className="grid md:grid-cols-2 gap-5"><Field label="Author"><input className={inputClass} value={draft.author || ''} onChange={(event) => setValue('author', event.target.value)} /></Field><Field label="Source"><input className={inputClass} value={draft.source || ''} onChange={(event) => setValue('source', event.target.value)} /></Field></div>}
                <div className="border-t border-slate-200 pt-7 space-y-5"><h3 className="text-lg font-bold text-zenith-navy">Media</h3><Field label="Featured image" hint="JPG, PNG, WebP, or AVIF. Large images are resized and converted to WebP before upload."><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={(event) => doUpload(event.target.files, 'featuredImage')} /></Field>{draft.featuredImage && <div className="flex items-center gap-3 p-3 bg-slate-50 rounded"><span className="text-sm flex-grow truncate">{draft.featuredImage.filename}</span><button type="button" onClick={() => setValue('featuredImage', undefined)} className="text-xs text-red-700">Remove</button></div>}
                  <Field label="Photo gallery" hint="Select multiple images. Uploads are optimized and added in selection order."><input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" onChange={(event) => doUpload(event.target.files, 'gallery')} /></Field>{draft.gallery.length > 0 && <div className="space-y-2">{draft.gallery.map((asset, index) => <div key={`${asset.id}-${index}`} className="p-3 bg-slate-50 rounded flex flex-col sm:flex-row gap-3 sm:items-center"><span className="text-sm flex-grow truncate">{index + 1}. {asset.filename}</span><input className="px-3 py-2 border border-slate-200 rounded text-xs sm:w-64" value={asset.alt || ''} onChange={(event) => setValue('gallery', draft.gallery.map((item, itemIndex) => itemIndex === index ? { ...item, alt: event.target.value } : item))} placeholder="Alt text" aria-label={`Alt text for ${asset.filename}`} /><button type="button" disabled={index === 0} onClick={() => { const next = [...draft.gallery]; [next[index - 1], next[index]] = [next[index], next[index - 1]]; setValue('gallery', next); }} className="text-xs disabled:opacity-30">↑</button><button type="button" disabled={index === draft.gallery.length - 1} onClick={() => { const next = [...draft.gallery]; [next[index + 1], next[index]] = [next[index], next[index + 1]]; setValue('gallery', next); }} className="text-xs disabled:opacity-30">↓</button><button type="button" onClick={() => setValue('gallery', draft.gallery.filter((_, itemIndex) => itemIndex !== index))} className="text-xs text-red-700">Remove</button></div>)}</div>}
                  {(draft.contentType === 'video' || draft.section === 'testimonial') && <><Field label="Hosted video URL" hint="Recommended for longer video: paste a YouTube or Vimeo URL."><input className={inputClass} type="url" value={draft.externalUrl || ''} onChange={(event) => setValue('externalUrl', event.target.value)} placeholder="https://…" /></Field><Field label="Small MP4 clip" hint="For short clips only, up to 4 MB. Longer videos should use YouTube or Vimeo."><input type="file" accept="video/mp4" onChange={(event) => doUpload(event.target.files, 'video')} /></Field><Field label="Speaker portrait / video poster" hint="Required for speaker videos. This image automatically appears on the right side of the branded peak hero."><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={(event) => doUpload(event.target.files, 'videoPoster')} /></Field>{draft.videoPoster && <div className="flex items-center gap-3 p-3 bg-slate-50 rounded"><span className="text-sm flex-grow truncate">{draft.videoPoster.filename}</span><button type="button" onClick={() => setValue('videoPoster', undefined)} className="text-xs text-red-700">Remove</button></div>}</>}
                  {draft.section === 'resource' && <><Field label="Resource file" hint="PDF, Word, Excel, or PowerPoint up to 4 MB."><input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.pptx" onChange={(event) => doUpload(event.target.files, 'document')} /></Field><Field label="External resource URL"><input className={inputClass} type="url" value={draft.externalUrl || ''} onChange={(event) => setValue('externalUrl', event.target.value)} placeholder="https://…" /></Field></>}
                  {uploading && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4"><div className="flex justify-between text-xs font-bold text-blue-800 mb-2"><span>Uploading {uploading.replace(/([A-Z])/g, ' $1').toLowerCase()}…</span><span>{uploadProgress}%</span></div><div className="h-2 bg-blue-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all" style={{ width: `${uploadProgress}%` }} /></div></div>}
                </div>
              </div>
              <aside className="space-y-6 lg:border-l lg:border-slate-200 lg:pl-8"><Field label="Status"><select className={inputClass} value={draft.status} onChange={(event) => setValue('status', event.target.value as any)}><option value="draft">Draft</option><option value="published">Published</option></select></Field><label className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><input type="checkbox" checked={draft.featured} onChange={(event) => setValue('featured', event.target.checked)} /><span className="text-sm font-bold text-slate-700">Feature this content</span></label><Field label="Display order" hint="Lower numbers appear first."><input className={inputClass} type="number" value={draft.displayOrder} onChange={(event) => setValue('displayOrder', Number(event.target.value))} /></Field><Field label="Call-to-action label"><input className={inputClass} value={draft.ctaLabel || ''} onChange={(event) => setValue('ctaLabel', event.target.value)} placeholder="View resource" /></Field>{draft.id && <button type="button" onClick={() => remove(draft as ContentEntry)} className="w-full py-3 border border-red-300 text-red-700 rounded-lg text-xs font-bold">Delete content</button>}</aside>
            </div>
          </form>
        )}
      </div>

      {pendingDelete && (
        <div
          className="fixed inset-0 z-[70] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-content-title"
          onMouseDown={(event) => { if (event.currentTarget === event.target && !deleting) setPendingDelete(null); }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">
            <div className="h-1.5 bg-gradient-to-r from-red-700 via-red-500 to-amber-400" />
            <div className="p-7 md:p-8">
              <span className="block mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-red-700">Permanent action</span>
              <h2 id="delete-content-title" className="text-2xl font-bold leading-tight text-zenith-navy">Delete “{pendingDelete.title}”?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">This permanently removes the entry from the content manager and cannot be undone. If the content may be useful again, cancel and change its status to Draft instead.</p>
              <div className="mt-7 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                  type="button"
                  autoFocus
                  disabled={deleting}
                  onClick={() => setPendingDelete(null)}
                  className="px-5 py-3 rounded-lg border border-slate-300 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                >
                  Keep content
                </button>
                <button
                  type="button"
                  disabled={deleting}
                  onClick={confirmRemove}
                  className="px-5 py-3 rounded-lg bg-red-700 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-50"
                >
                  {deleting ? 'Deleting…' : 'Delete permanently'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
