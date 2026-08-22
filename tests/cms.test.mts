import assert from 'node:assert/strict';
import test from 'node:test';
import { seedEntries } from '../data/contentSeeds.ts';
import { normalizeDraft, slugify } from '../netlify/functions/_shared/cms.mts';
import { contentPath, sectionPath } from '../types/content.ts';

test('seed content contains the curated event, videos, and resource library', () => {
  assert.equal(seedEntries.filter((entry) => entry.section === 'event').length, 1);
  assert.equal(seedEntries.filter((entry) => entry.contentType === 'video').length, 8);
  assert.equal(seedEntries.filter((entry) => entry.section === 'resource').length, 5);
  assert.equal(seedEntries.find((entry) => entry.section === 'event')?.gallery.length, 24);
});

test('slugify creates stable SEO-friendly paths', () => {
  assert.equal(slugify('Trajectory to Greatness — July 2026'), 'trajectory-to-greatness-july-2026');
});

test('content normalization enforces safe defaults', () => {
  const draft = normalizeDraft({
    section: 'event',
    title: 'A New Event',
    description: 'Details',
    category: 'Conferences',
    date: '2026-09-10',
    gallery: [],
    displayOrder: 3,
    featured: true,
    status: 'published',
    contentType: 'conference',
    slug: '',
  });
  assert.equal(draft.slug, 'a-new-event');
  assert.equal(draft.status, 'published');
  assert.equal(draft.section, 'event');
});

test('content normalization rejects empty titles', () => {
  assert.throws(() => normalizeDraft({ title: '   ' }), /title is required/i);
});

test('managed content routes match every public route', () => {
  assert.equal(sectionPath('media'), 'media');
  assert.equal(sectionPath('event'), 'events');
  assert.equal(sectionPath('resource'), 'resources');
  assert.equal(sectionPath('testimonial'), 'media');
  assert.equal(contentPath('resource', 'employer-guide'), '/resources/employer-guide');
  assert.equal(contentPath('event', 'annual-summit'), '/events/annual-summit');
});
