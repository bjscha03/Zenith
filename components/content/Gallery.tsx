import React, { useEffect, useRef, useState } from 'react';
import { imageUrl } from '../../lib/contentApi';
import type { ContentAsset } from '../../types/content';

const Gallery: React.FC<{ assets: ContentAsset[] }> = ({ assets }) => {
  const [active, setActive] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((value) => value === null ? null : (value + 1) % assets.length);
      if (event.key === 'ArrowLeft') setActive((value) => value === null ? null : (value - 1 + assets.length) % assets.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [active, assets.length]);

  if (!assets.length) return null;
  const current = active === null ? null : assets[active];

  return (
    <>
      <div className={`grid gap-4 ${assets.length === 1 ? 'grid-cols-1' : assets.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
        {assets.map((asset, index) => (
          <button key={asset.id} type="button" onClick={() => setActive(index)} className={`group relative overflow-hidden rounded-xl bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-300 ${index === 0 && assets.length > 4 ? 'sm:col-span-2 sm:row-span-2' : ''}`} aria-label={`Open image ${index + 1}: ${asset.alt || asset.caption || ''}`}>
            <img src={imageUrl(asset.url, index === 0 ? 1300 : 720, index === 0 ? 900 : 520)} alt={asset.alt || ''} loading="lazy" className="w-full h-full min-h-64 object-cover group-hover:scale-[1.02] transition-transform duration-500" />
            {asset.caption && <span className="absolute inset-x-0 bottom-0 p-4 text-left text-xs text-white bg-gradient-to-t from-black/75 to-transparent pt-12 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity">{asset.caption}</span>}
          </button>
        ))}
      </div>
      {current && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setActive(null)} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 50) setActive((value) => value === null ? null : delta < 0 ? (value + 1) % assets.length : (value - 1 + assets.length) % assets.length); touchStart.current = null; }}>
          <button type="button" onClick={() => setActive(null)} className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white text-2xl" aria-label="Close photo viewer">×</button>
          {assets.length > 1 && <button type="button" onClick={(event) => { event.stopPropagation(); setActive((value) => value === null ? null : (value - 1 + assets.length) % assets.length); }} className="absolute left-3 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white text-2xl" aria-label="Previous photo">‹</button>}
          <figure className="max-w-6xl max-h-[92vh]" onClick={(event) => event.stopPropagation()}>
            <img src={imageUrl(current.url, 2200, undefined, 'contain')} alt={current.alt || ''} className="max-w-full max-h-[84vh] object-contain mx-auto" />
            {(current.caption || current.alt) && <figcaption className="text-center text-sm text-slate-300 mt-4">{current.caption || current.alt}</figcaption>}
          </figure>
          {assets.length > 1 && <button type="button" onClick={(event) => { event.stopPropagation(); setActive((value) => value === null ? null : (value + 1) % assets.length); }} className="absolute right-3 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white text-2xl" aria-label="Next photo">›</button>}
        </div>
      )}
    </>
  );
};

export default Gallery;

