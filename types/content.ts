export type ContentSection = 'media' | 'event' | 'resource' | 'testimonial';
export type PublishStatus = 'draft' | 'published';

export type AssetKind = 'image' | 'video' | 'document';

export interface ContentAsset {
  id: string;
  kind: AssetKind;
  url: string;
  filename: string;
  mimeType?: string;
  alt?: string;
  caption?: string;
  size?: number;
  width?: number;
  height?: number;
  duration?: number;
}

export interface ContentEntry {
  id: string;
  slug: string;
  section: ContentSection;
  contentType: string;
  title: string;
  subtitle?: string;
  description: string;
  body?: string;
  date: string;
  eventDate?: string;
  eventEndDate?: string;
  location?: string;
  category: string;
  author?: string;
  source?: string;
  featuredImage?: ContentAsset;
  gallery: ContentAsset[];
  video?: ContentAsset;
  videoPoster?: ContentAsset;
  externalUrl?: string;
  document?: ContentAsset;
  ctaLabel?: string;
  displayOrder: number;
  featured: boolean;
  status: PublishStatus;
  createdAt: string;
  updatedAt: string;
}

export type ContentDraft = Omit<ContentEntry, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
};

export const sectionPath = (section: ContentSection) => {
  if (section === 'event') return 'events';
  if (section === 'testimonial') return 'media';
  if (section === 'resource') return 'resources';
  return section;
};

export const contentPath = (section: ContentSection, slug: string) => `/${sectionPath(section)}/${slug}`;
