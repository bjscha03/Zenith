import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import CompassMark from '../components/brand/CompassMark';
import ContentGrid from '../components/content/ContentGrid';
import Gallery from '../components/content/Gallery';
import VideoPlayer from '../components/content/VideoPlayer';
import { ZENITH_PEAK_IMAGE } from '../lib/brandAssets';
import { getContentEntry, imageUrl } from '../lib/contentApi';
import type { ContentEntry, ContentSection } from '../types/content';
import { sectionPath } from '../types/content';

const formatDate = (date?: string) => date ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(`${date}T12:00:00`)) : '';

const ContentDetail: React.FC<{ section: ContentSection }> = ({ section }) => {
  const { slug = '' } = useParams();
  const location = useLocation();
  const [entry, setEntry] = useState<ContentEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const preview = new URLSearchParams(location.search).get('preview') === '1';

  useEffect(() => {
    let active = true;
    setLoading(true);
    setEntry(null);
    setError('');
    getContentEntry(section, slug, preview)
      .then((result) => { if (active) setEntry(result); })
      .catch((reason) => { if (active) setError(reason instanceof Error ? reason.message : 'Unable to load content.'); })
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [section, slug, preview]);

  useEffect(() => {
    if (!entry) return;
    const previousTitle = document.title;
    document.title = `${entry.title} | Zenith Risk Strategies`;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const createdMeta = !meta;
    const previousDescription = meta?.content || '';
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = entry.description;
    return () => {
      document.title = previousTitle;
      if (createdMeta) meta?.remove();
      else if (meta) meta.content = previousDescription;
    };
  }, [entry]);

  if (loading) return <div className="max-w-7xl mx-auto px-4 py-32"><div className="h-96 bg-slate-100 animate-pulse rounded-3xl" /></div>;
  if (!entry || error) return <div className="max-w-3xl mx-auto px-4 py-32 text-center"><h1 className="text-3xl font-bold text-zenith-navy mb-4">Content not found</h1><p className="text-slate-500 mb-8">{error || 'This item may be unpublished or no longer available.'}</p><Link to={`/${sectionPath(section)}`} className="text-blue-600 font-bold">Return to {sectionPath(section)}</Link></div>;

  const cover = entry.featuredImage || entry.videoPoster || entry.gallery[0];
  const speakerPortrait = entry.videoPoster || entry.featuredImage;
  const isSpeakerHero = entry.section === 'media' && entry.contentType === 'video' && Boolean(speakerPortrait);
  const isEventHero = entry.section === 'event' && Boolean(cover);
  const download = entry.document;
  const hasCaptiveTrainingDeck = entry.section === 'resource' && entry.slug === 'captive-vs-traditional-stop-loss-employer-guide';

  return (
    <article className="w-full">
      {preview && <div className="bg-amber-400 text-amber-950 px-4 py-3 text-center text-sm font-bold">Draft preview — only signed-in administrators can see this version.</div>}
      <header className="relative bg-zenith-navy text-white overflow-hidden">
        {isSpeakerHero ? (
          <>
            <img
              src={ZENITH_PEAK_IMAGE}
              alt=""
              aria-hidden="true"
              className="absolute inset-y-0 left-0 h-full w-[78%] md:w-[67%] object-cover object-center opacity-45"
              style={{ WebkitMaskImage: 'linear-gradient(to right, #000 0%, #000 48%, transparent 100%)', maskImage: 'linear-gradient(to right, #000 0%, #000 48%, transparent 100%)' }}
            />
            <img
              src={imageUrl(speakerPortrait?.url, 1400, 1100)}
              alt=""
              aria-hidden="true"
              className="absolute inset-y-0 right-0 h-full w-[78%] md:w-[60%] object-cover object-[center_25%]"
              style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 42%, #000 100%)', maskImage: 'linear-gradient(to right, transparent 0%, #000 42%, #000 100%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy via-zenith-navy/50 to-zenith-navy/10" />
            <div className="absolute inset-y-0 left-[42%] w-40 md:w-56 bg-zenith-navy/25 blur-3xl" />
          </>
        ) : (
          <>
            {cover && <img src={imageUrl(cover.url, 2000, 1100)} alt="" className={`absolute inset-0 w-full h-full object-cover ${isEventHero ? 'opacity-80 object-[center_38%]' : 'opacity-25'}`} />}
            {isEventHero ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy/95 via-zenith-navy/65 to-zenith-navy/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/35 via-transparent to-zenith-navy/10" />
              </>
            ) : <div className="absolute inset-0 bg-gradient-to-r from-zenith-navy via-zenith-navy/95 to-zenith-navy/70" />}
          </>
        )}
        <div className={`${isSpeakerHero ? 'max-w-7xl min-h-[520px] md:min-h-[640px] flex flex-col justify-center' : 'max-w-5xl'} mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10`}>
          <div className={isSpeakerHero ? 'max-w-xl md:max-w-2xl lg:max-w-[55%]' : ''}>
          <Link to={`/${sectionPath(entry.section)}`} className="text-[10px] font-black text-blue-300 uppercase tracking-[0.3em] mb-8 inline-block">← Back to {sectionPath(entry.section)}</Link>
          <div className="flex flex-wrap gap-3 items-center text-[10px] font-black uppercase tracking-[0.25em] text-blue-300 mb-6"><span>{entry.category}</span><span>•</span><time dateTime={entry.eventDate || entry.date}>{formatDate(entry.eventDate || entry.date)}</time>{entry.location && <><span>•</span><span>{entry.location}</span></>}</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">{entry.title}</h1>
          {entry.subtitle && <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">{entry.subtitle}</p>}
          </div>
        </div>
      </header>

      <div className={`${isEventHero ? 'max-w-6xl' : 'max-w-5xl'} mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24`}>
        {isEventHero ? (
          <section className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 shadow-[0_28px_80px_-42px_rgba(15,35,68,0.48)]">
            <div className="grid md:grid-cols-[210px_1fr] min-h-[390px]">
              <div className="relative overflow-hidden bg-zenith-navy px-8 py-10 md:px-9 md:py-12 text-white flex flex-col justify-between">
                <img src={ZENITH_PEAK_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center opacity-55" />
                <div className="absolute inset-0 bg-gradient-to-b from-zenith-navy/55 via-zenith-navy/72 to-zenith-navy/95" />
                <div className="relative z-10">
                  <span className="text-[9px] font-black uppercase tracking-[0.32em] text-blue-200 block mb-5">Zenith Event Series</span>
                  <div className="w-12 h-px bg-blue-300/80 mb-5" />
                  <p className="text-2xl font-bold leading-tight">Event<br />Perspective</p>
                </div>
                <div className="relative z-10 pt-12">
                  <span className="block text-[9px] font-black uppercase tracking-[0.25em] text-blue-200 mb-2">Gathered</span>
                  <time dateTime={entry.eventDate || entry.date} className="text-sm text-white/90">{formatDate(entry.eventDate || entry.date)}</time>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/80 px-8 py-10 sm:px-10 md:px-14 md:py-14 lg:px-16 lg:py-16">
                <CompassMark className="absolute -right-14 -bottom-16 w-64 h-64 opacity-[0.055]" />
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zenith-blue via-blue-400 to-transparent" />

                <div className="relative z-10 max-w-3xl">
                  <div className="flex items-center gap-3 mb-7">
                    <span className="w-2.5 h-2.5 rounded-full bg-zenith-blue shadow-[0_0_0_5px_rgba(37,99,235,0.10)]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-700">The Story Behind the Summit</span>
                  </div>
                  <p className="text-2xl md:text-[1.75rem] text-zenith-navy leading-[1.5] font-light tracking-[-0.015em]">{entry.description}</p>
                  {entry.body && <div className="mt-9 pt-8 border-t border-slate-200/90">{entry.body.split(/\n{2,}/).map((paragraph, index) => <p key={index} className="text-[1.05rem] text-slate-600 leading-8 mb-5 last:mb-0">{paragraph}</p>)}</div>}
                  {download && <a href={download.url} target="_blank" rel="noopener noreferrer" download className="inline-flex items-center px-8 py-4 bg-zenith-blue text-white font-black text-[10px] uppercase tracking-[0.2em] rounded mt-8">{entry.ctaLabel || 'Download resource'}</a>}
                  {!download && entry.externalUrl && <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-zenith-blue text-white font-black text-[10px] uppercase tracking-[0.2em] rounded mt-8">{entry.ctaLabel || 'Visit source'}</a>}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            {entry.video || (entry.contentType === 'video' && entry.externalUrl) ? <div className="mb-14"><VideoPlayer video={entry.video} poster={entry.videoPoster} externalUrl={entry.externalUrl} title={entry.title} /></div> : null}
            <div className="max-w-3xl">
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">{entry.description}</p>
              {entry.body && entry.body.split(/\n{2,}/).map((paragraph, index) => <p key={index} className="text-slate-600 leading-8 mb-6">{paragraph}</p>)}
              {(entry.author || entry.source) && <p className="text-sm text-slate-500 border-l-2 border-blue-300 pl-4 my-8">{entry.author && <>By {entry.author}</>}{entry.author && entry.source && <span> · </span>}{entry.source}</p>}
              {download && (
                <div className="flex flex-wrap gap-3 mt-4">
                  <a href={download.url} target="_blank" rel="noopener noreferrer" download className="inline-flex items-center px-8 py-4 bg-zenith-blue text-white font-black text-[10px] uppercase tracking-[0.2em] rounded transition-colors hover:bg-blue-700">
                    {hasCaptiveTrainingDeck ? 'Download PDF Guide' : entry.ctaLabel || 'Download resource'}
                  </a>
                  {hasCaptiveTrainingDeck && (
                    <a
                      href="/brochures/captive-vs-traditional-stoploss.pptx"
                      download="Zenith_Medical_Stop_Loss_Captives_Training.pptx"
                      className="inline-flex items-center px-8 py-4 border-2 border-zenith-navy text-zenith-navy font-black text-[10px] uppercase tracking-[0.2em] rounded transition-colors hover:bg-zenith-navy hover:text-white"
                    >
                      Download PowerPoint
                    </a>
                  )}
                </div>
              )}
              {!download && entry.externalUrl && entry.contentType !== 'video' && <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-zenith-blue text-white font-black text-[10px] uppercase tracking-[0.2em] rounded mt-4">{entry.ctaLabel || 'Visit source'}</a>}
            </div>
          </>
        )}
      </div>

      {entry.gallery.length > 0 && <section className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-12"><span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] block mb-4">Photo Gallery</span><h2 className="text-3xl font-bold text-zenith-navy">Inside {entry.title}</h2></div><Gallery assets={entry.gallery} /></div></section>}

      <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-zenith-navy mb-10">More from Zenith</h2><ContentGrid section={entry.section === 'testimonial' ? 'media' : entry.section} limit={3} excludeIds={[entry.id]} /></div></section>
    </article>
  );
};

export default ContentDetail;
