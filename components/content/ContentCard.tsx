import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../../lib/contentApi';
import type { ContentEntry } from '../../types/content';
import { contentPath } from '../../types/content';

const formatDate = (date?: string) => date
  ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(`${date}T12:00:00`))
  : '';

const ContentCard: React.FC<{ entry: ContentEntry; compact?: boolean }> = ({ entry, compact = false }) => {
  const cover = entry.featuredImage || entry.videoPoster || entry.gallery[0];
  const href = contentPath(entry.section, entry.slug);

  return (
    <article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full">
      {cover && (
        <Link to={href} className={`block overflow-hidden bg-slate-100 ${compact ? 'aspect-[16/10]' : 'aspect-video'}`}>
          <img
            src={imageUrl(cover.url, 900, compact ? 560 : 506, 'cover')}
            alt={cover.alt || entry.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500"
          />
        </Link>
      )}
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          <span className="text-blue-600">{entry.category}</span>
          <span className="text-slate-300">•</span>
          <time className="text-slate-400" dateTime={entry.eventDate || entry.date}>{formatDate(entry.eventDate || entry.date)}</time>
        </div>
        <h3 className="text-xl font-bold text-zenith-navy leading-snug mb-3 group-hover:text-blue-600 transition-colors">
          <Link to={href}>{entry.title}</Link>
        </h3>
        {entry.subtitle && <p className="text-sm font-semibold text-slate-600 mb-3">{entry.subtitle}</p>}
        <p className="text-sm text-slate-500 leading-relaxed font-light mb-6 flex-grow">{entry.description}</p>
        <Link to={href} className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-zenith-navy group-hover:text-blue-600">
          {entry.contentType === 'video' ? 'Watch video' : entry.section === 'resource' ? 'View resource' : 'View details'}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </article>
  );
};

export default ContentCard;
