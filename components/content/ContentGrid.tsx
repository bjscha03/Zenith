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
}> = ({ section, limit, emptyText = 'New content is coming soon.', showFilters = false, excludeIds = [] }) => {
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

  if (loading) return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Loading content"><div className="h-80 bg-slate-100 rounded-2xl animate-pulse" /><div className="h-80 bg-slate-100 rounded-2xl animate-pulse" /><div className="h-80 bg-slate-100 rounded-2xl animate-pulse" /></div>;

  return (
    <div>
      {showFilters && categories.length > 2 && (
        <div className="flex gap-2 flex-wrap mb-10" aria-label="Filter content by category">
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors ${category === item ? 'bg-zenith-navy text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-300'}`}>{item}</button>
          ))}
        </div>
      )}
      {visible.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{visible.map((entry) => <ContentCard key={entry.id} entry={entry} />)}</div>
      ) : (
        <div className="py-16 px-8 text-center bg-slate-50 border border-slate-200 rounded-2xl text-slate-500">{emptyText}</div>
      )}
    </div>
  );
};

export default ContentGrid;

