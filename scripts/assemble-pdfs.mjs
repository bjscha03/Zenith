import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const partsDirectory = new URL('./pdf-assets/', import.meta.url);
const outputFile = new URL('../public/brochures/strategy-brochure.pdf', import.meta.url);

try {
  const existing = await stat(outputFile);
  if (existing.size > 1_000) {
    console.log('Using the authored Zenith strategy brochure.');
    process.exit(0);
  }
} catch {
  // Fall through to the legacy source-part recovery path.
}

const partNames = (await readdir(partsDirectory))
  .filter((name) => name.startsWith('strategy-brochure.part-'))
  .sort();

if (!partNames.length) {
  throw new Error('Strategy brochure source parts are missing.');
}

const parts = await Promise.all(
  partNames.map((name) => readFile(new URL(join('./pdf-assets/', name), import.meta.url))),
);

await writeFile(outputFile, Buffer.concat(parts));
