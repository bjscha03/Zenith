import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';

const detail = readFileSync(new URL('../pages/ContentDetail.tsx', import.meta.url), 'utf8');
const netlify = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');
const partsDirectory = new URL('../scripts/download-assets/', import.meta.url);

const assemble = (prefix: string) => Buffer.concat(
  readdirSync(partsDirectory)
    .filter((name) => name.startsWith(prefix))
    .sort()
    .map((name) => readFileSync(new URL(name, partsDirectory))),
);

test('captive guide offers the exact uploaded PowerPoint as a separate download', () => {
  assert.match(detail, /href="\/brochures\/captive-vs-traditional-stoploss\.pptx"/);
  assert.match(detail, /download="Zenith_Medical_Stop_Loss_Captives_Training\.pptx"/);
  assert.match(detail, />\s*Download PowerPoint\s*</);
  assert.doesNotMatch(netlify, /from = "\/brochures\/captive-vs-traditional-stoploss\.pptx"/);

  const deck = assemble('captive-vs-traditional-stoploss.pptx.part-');
  assert.equal(deck.length, 12_343_637);
  assert.equal(createHash('sha256').update(deck).digest('hex'), '5241e0b410011ef6fa21662d0501d12ed1c94f7a67124ee4a6389133b0f5bf4e');
});
