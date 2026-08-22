import React, { useEffect, useMemo, useState } from 'react';
import { getContentEntries } from '../../lib/contentApi';
import type { ContentEntry, ContentSection } from '../../types/content';
import ContentCard from './ContentCard';

const ContentGrid: React.FC<{
  section: ContentSection;
  limit?: number;
  emptyText?: string;
  showFilters?: boolean;
  excludeIds?: string[];
  variant?: 'grid' | 'archive';
}> = ({ section, limit, emptyText = 'New content is coming soon.', showFilters = false, excludeIds = [], variant = 'grid' }) => {
  const [entries, setEntries] = useState<ContentEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    let active = true;
    getContentEntries(section).then((items) => active && setEntries(items)).finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [section]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(entries.map((entry) => entry.category)))], [entries]);
  const visible = entries
    .filter((entry) => !excludeIds.includes(entry.id) && (category === 'All' || entry.category === category))
    .slice(0, limit || entries.length);

  if (loading) return variant === 'archive'
    ? <div className="h-72 bg-white/70 rounded-3xl animate-pulse" aria-label="Loading content" />
    : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Loading content"><div className="h-80 bg-slate-100 rounded-2xl animate-pulse" /><div className="h-80 bg-slate-100 rounded-2xl animate-pulse" /><div className="h-80 bg-slate-100 rounded-2xl animate-pulse" /></div>;

  return (
    <div>
      {showFilters && categories.length > 2 && (
        <div className={`flex gap-2 flex-wrap mb-10 ${section === 'resource' ? 'w-fit max-w-full p-2 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-sm' : ''}`} aria-label="Filter content by category">
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${category === item ? 'bg-zenith-navy text-white shadow-md' : section === 'resource' ? 'text-slate-500 hover:text-zenith-navy hover:bg-blue-50' : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-300'}`}>{item}</button>
          ))}
        </div>
      )}
      {visible.length ? (
        <div className={variant === 'archive' ? 'space-y-6' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'}>{visible.map((entry) => <ContentCard key={entry.id} entry={entry} compact={variant === 'archive'} />)}</div>
      ) : (
        <div className="py-16 px-8 text-center bg-slate-50 border border-slate-200 rounded-2xl text-slate-500">{emptyText}</div>
      )}
    </div>
  );
};

export default ContentGrid;
