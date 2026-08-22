import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const layout = readFileSync(new URL('../components/Layout.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../index.css', import.meta.url), 'utf8');

test('mobile navigation remains a viewport-fixed surface outside the filtered header', () => {
  const headerEnd = layout.indexOf('</header>');
  const drawerStart = layout.indexOf('id="mobile-navigation"');
  assert.ok(headerEnd >= 0 && drawerStart > headerEnd, 'drawer must remain outside the sticky header');
  assert.match(styles, /\.mobile-nav-drawer\s*\{[\s\S]*?position:\s*fixed;/);
  assert.match(styles, /\.mobile-nav-drawer\s*\{[\s\S]*?z-index:\s*45;/);
  assert.match(styles, /\.mobile-nav-drawer\s*\{[\s\S]*?background:\s*#ffffff;/);
  assert.match(layout, /style=\{\{ top: `\$\{mobileMenuTop\}px` \}\}/);
});

test('mobile navigation closes and releases the page across link, keyboard, and desktop transitions', () => {
  assert.match(layout, /matchMedia\('\(min-width: 1024px\)'\)/);
  assert.match(layout, /onClick=\{closeMobileMenu\}/);
  assert.match(layout, /event\.key === 'Escape'/);
  assert.match(layout, /event\.key !== 'Tab'/);
  assert.match(layout, /setAttribute\('inert', ''\)/);
  assert.match(styles, /body\.mobile-menu-open\s*\{[\s\S]*?overflow:\s*hidden;/);
});
