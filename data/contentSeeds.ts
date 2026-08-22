import type { ContentAsset, ContentEntry } from '../types/content';

const createdAt = '2026-08-21T19:45:00.000Z';
const assetUrl = (id: string) => `/api/cms/assets/${id}`;

const image = (id: string, filename: string, alt: string, caption?: string): ContentAsset => ({
  id,
  kind: 'image',
  url: assetUrl(id),
  filename,
  mimeType: 'image/webp',
  alt,
  caption,
});

const video = (id: string, filename: string, duration: number): ContentAsset => ({
  id,
  kind: 'video',
  url: assetUrl(id),
  filename,
  mimeType: 'video/mp4',
  duration,
});

const galleryAssets: ContentAsset[] = [
  image('trajectory-photo-5', 'trajectory-to-greatness-5.webp', 'A plated meal prepared for guests at the Trajectory to Greatness event', 'Hospitality and conversation were part of the July gathering.'),
  image('trajectory-photo-12', 'trajectory-to-greatness-12.webp', 'A presenter welcomes attendees in the event room'),
  image('trajectory-photo-21', 'trajectory-to-greatness-21.webp', 'A woman presents beside Zenith Risk Strategies event signage'),
  image('trajectory-photo-25', 'trajectory-to-greatness-25.webp', 'Wide view of a speaker presenting to Trajectory to Greatness attendees'),
  image('trajectory-photo-28', 'trajectory-to-greatness-28.webp', 'A guest speaker in a blue suit addresses the group'),
  image('trajectory-photo-56', 'trajectory-to-greatness-56.webp', 'Event attendees listening during a presentation'),
  image('trajectory-photo-60', 'trajectory-to-greatness-60.webp', 'A guest speaker shares insights during the event'),
  image('trajectory-photo-100', 'trajectory-to-greatness-100.webp', 'A presenter speaks beside the Zenith Risk Strategies banner'),
  image('trajectory-photo-128', 'trajectory-to-greatness-128.webp', 'A speaker addresses attendees from the front of the room'),
  image('trajectory-photo-183', 'trajectory-to-greatness-183.webp', 'Guests connect during a networking break'),
  image('trajectory-photo-193', 'trajectory-to-greatness-193.webp', 'A small group talks during the event networking session'),
  image('trajectory-photo-204', 'trajectory-to-greatness-204.webp', 'Event guests share a conversation'),
  image('trajectory-photo-219', 'trajectory-to-greatness-219.webp', 'Two presenters confer at the front of the event room'),
  image('trajectory-photo-223', 'trajectory-to-greatness-223.webp', 'A speaker presents a customized-network discussion'),
  image('trajectory-photo-235', 'trajectory-to-greatness-235.webp', 'Wide view of an educational session with attendees and Zenith signage'),
  image('trajectory-photo-270', 'trajectory-to-greatness-270.webp', 'A presenter speaks in front of the Zenith Risk Strategies banner'),
  image('trajectory-photo-293', 'trajectory-to-greatness-293.webp', 'Attendees laugh together during a break'),
  image('trajectory-photo-319', 'trajectory-to-greatness-319.webp', 'A speaker explains a concept during a presentation'),
  image('trajectory-photo-334', 'trajectory-to-greatness-334.webp', 'Panelists listen during a group discussion'),
  image('trajectory-photo-356', 'trajectory-to-greatness-356.webp', 'Three panelists take part in a live conversation'),
  image('trajectory-photo-360', 'trajectory-to-greatness-360.webp', 'Panelists respond during an audience discussion'),
  image('trajectory-photo-366', 'trajectory-to-greatness-366.webp', 'Two guests continue the conversation during networking'),
  image('trajectory-photo-371', 'trajectory-to-greatness-371.webp', 'A group of attendees connects after the sessions'),
  image('trajectory-photo-393', 'trajectory-to-greatness-393.webp', 'Guests gather for a final networking conversation'),
];

const videoEntries: Array<[string, string, string, number]> = [
  ['brett-morris', 'Brett Morris', 'Brett Morris shares his perspective from Trajectory to Greatness.', 103.236],
  ['jarred-pierce', 'Jarred Pierce', 'Jarred Pierce reflects on the conversations and connections at the event.', 47.948],
  ['jason-roll', 'Jason Roll', 'Jason Roll shares a takeaway from Trajectory to Greatness.', 59.426],
  ['karen-mcreynolds', 'Karen McReynolds', 'Karen McReynolds discusses her experience at the event.', 28.161],
  ['thomas-wagner-and-erika-ensign', 'Thomas Wagner & Erika Ensign', 'Thomas Wagner and Erika Ensign continue the Trajectory to Greatness conversation.', 188.588],
  ['thomas-wagner', 'Thomas Wagner', 'Thomas Wagner reflects on the purpose and momentum behind the event.', 65.866],
  ['tim-hyde', 'Tim Hyde', 'Tim Hyde shares a perspective from the July gathering.', 42.276],
  ['tracy-creger', 'Tracy Creger', 'Tracy Creger offers a concise takeaway from Trajectory to Greatness.', 15.048],
];

const resources: ContentEntry[] = [
  {
    id: 'resource-captive-vs-traditional',
    slug: 'captive-vs-traditional-stop-loss-employer-guide',
    section: 'resource',
    contentType: 'guide',
    title: 'Captive vs Traditional Stop Loss Employer Guide',
    description: 'A structural comparison designed for CFOs and HR Directors evaluating the transition to a captive risk-sharing model.',
    date: '2026-03-01',
    category: 'Guides',
    gallery: [],
    document: { id: 'static-captive-guide', kind: 'document', url: '/brochures/captive-vs-traditional-stoploss.pptx', filename: 'captive-vs-traditional-stoploss.pptx' },
    ctaLabel: 'Download guide',
    displayOrder: 10,
    featured: true,
    status: 'published',
    createdAt,
    updatedAt: createdAt,
  },
  ...[
    ['reimagining-health-insurance', 'Reimagining Health Insurance', 'A forward-looking analysis of how innovative risk structures are reshaping the health insurance landscape for self-funded employers.', '/brochures/reimagining-health-insurance.pdf'],
    ['stop-loss-captives', 'Stop Loss Captives', 'An in-depth exploration of stop loss captive structures, their strategic advantages, and implementation considerations for employers and advisors.', '/brochures/stop-loss-captives.pdf'],
    ['cost-containment-stop-loss-pricing-impact', 'Cost Containment & Stop Loss Pricing Impact', 'Examining the relationship between clinical cost containment strategies and their measurable impact on stop loss pricing outcomes.', '/brochures/cost-containment-stop-loss.pdf'],
    ['mechanics-of-apollo-lf-captive-program', 'Mechanics of Apollo LF Captive Program', 'A comprehensive overview of the Apollo LF Captive Program, including key mechanics, risk strategy, and implementation approach.', '/brochures/mechanics-of-apollo-lf-captive-program.pptx'],
  ].map(([slug, title, description, url], index): ContentEntry => ({
    id: `resource-${slug}`,
    slug,
    section: 'resource',
    contentType: 'research',
    title,
    description,
    date: '2026-03-01',
    category: 'Research',
    gallery: [],
    document: { id: `static-${slug}`, kind: 'document', url, filename: url.split('/').pop() || slug },
    ctaLabel: 'View resource',
    displayOrder: 20 + index,
    featured: index === 0,
    status: 'published',
    createdAt,
    updatedAt: createdAt,
  })),
];

const event: ContentEntry = {
  id: 'event-trajectory-to-greatness-2026',
  slug: 'trajectory-to-greatness-july-2026',
  section: 'event',
  contentType: 'event-recap',
  title: 'Trajectory to Greatness',
  subtitle: 'A day built around ideas, candid conversation, and stronger connections.',
  description: 'Highlights from Zenith Risk Strategies’ July 22, 2026 Trajectory to Greatness gathering, featuring educational sessions, peer discussion, and relationship-building across the healthcare risk community.',
  body: 'The Trajectory to Greatness gathering brought industry voices together for a focused day of learning and connection. Explore a curated selection of event photography and conversations from participants below.',
  date: '2026-07-22',
  eventDate: '2026-07-22',
  category: 'Event Recap',
  featuredImage: galleryAssets.find((asset) => asset.id === 'trajectory-photo-235'),
  gallery: galleryAssets,
  displayOrder: 1,
  featured: true,
  status: 'published',
  createdAt,
  updatedAt: createdAt,
};

const videos: ContentEntry[] = videoEntries.map(([slug, title, description, duration], index) => ({
  id: `media-${slug}`,
  slug: `trajectory-to-greatness-${slug}`,
  section: 'media',
  contentType: 'video',
  title,
  subtitle: 'Trajectory to Greatness conversation',
  description,
  date: '2026-07-22',
  category: 'Videos',
  source: 'Trajectory to Greatness — July 22, 2026',
  gallery: [],
  video: video(`video-${slug}`, `${slug}.mp4`, duration),
  videoPoster: image(`poster-${slug}`, `${slug}.webp`, `${title} at the Trajectory to Greatness event`),
  displayOrder: index + 1,
  featured: index === 4 || index === 5,
  status: 'published',
  createdAt,
  updatedAt: createdAt,
}));

export const seedEntries: ContentEntry[] = [event, ...videos, ...resources];
