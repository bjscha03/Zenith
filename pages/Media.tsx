import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentGrid from '../components/content/ContentGrid';
import { getContentEntries, imageUrl } from '../lib/contentApi';
import type { ContentEntry } from '../types/content';

const Media: React.FC = () => {
  const [entries, setEntries] = useState<ContentEntry[]>([]);
  useEffect(() => { getContentEntries('media').then(setEntries); }, []);
  const featured = useMemo(() => entries.find((entry) => entry.featured) || entries[0], [entries]);

  return (
    <div className="w-full">
      <section className="relative text-white py-24 md:py-32 overflow-hidden bg-zenith-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6 block">Media & Insights</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">Ideas, conversations, and moments shaping healthcare risk.</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl">Explore Zenith news, interviews, event conversations, research, video, and photography in one organized destination.</p>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b border-slate-200" aria-label="Media section navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 overflow-x-auto">
          <Link to="/media" className="py-4 text-[11px] font-black uppercase tracking-[0.25em] text-zenith-navy border-b-2 border-zenith-navy whitespace-nowrap">Media</Link>
          <Link to="/events" className="py-4 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-zenith-navy whitespace-nowrap">Events</Link>
          <Link to="/resources" className="py-4 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-zenith-navy whitespace-nowrap">Resources</Link>
        </div>
      </nav>

      {featured && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden">
              <div className="aspect-video lg:aspect-auto lg:h-full bg-slate-200">
                <img src={imageUrl((featured.featuredImage || featured.videoPoster || featured.gallery[0])?.url, 1400, 900)} alt={(featured.featuredImage || featured.videoPoster || featured.gallery[0])?.alt || featured.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 lg:pr-16">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block mb-5">Featured {featured.contentType}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy mb-5">{featured.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">{featured.description}</p>
                <Link to={`/media/${featured.slug}`} className="inline-flex items-center px-8 py-4 bg-zenith-blue text-white font-black text-[10px] uppercase tracking-[0.2em] rounded">{featured.contentType === 'video' ? 'Watch conversation' : 'Explore feature'}</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.35em] block mb-4">Latest</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zenith-navy">From Zenith</h2>
          </div>
          <ContentGrid section="media" showFilters excludeIds={featured ? [featured.id] : []} />
        </div>
      </section>

    </div>
  );
};

export default Media;
