import { createHash } from 'node:crypto';
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';

const pdfPartsDirectory = new URL('./pdf-assets/', import.meta.url);
const downloadPartsDirectory = new URL('./download-assets/', import.meta.url);

const assemble = async ({ directory, prefix, output, size, sha256 }) => {
  const partNames = (await readdir(directory))
    .filter((name) => name.startsWith(prefix))
    .sort();

  if (!partNames.length) throw new Error(`Source parts are missing for ${prefix}.`);

  const parts = await Promise.all(
    partNames.map((name) => readFile(new URL(name, directory))),
  );
  const file = Buffer.concat(parts);
  const digest = createHash('sha256').update(file).digest('hex');

  if (file.length !== size || digest !== sha256) {
    throw new Error(`Integrity check failed while assembling ${output.pathname}.`);
  }

  await writeFile(output, file);
  console.log(`Assembled ${output.pathname.split('/').pop()} (${file.length} bytes).`);
};

const strategyOutput = new URL('../public/brochures/strategy-brochure.pdf', import.meta.url);
try {
  const existing = await stat(strategyOutput);
  if (existing.size <= 1_000) throw new Error('Strategy brochure is incomplete.');
  console.log('Using the authored Zenith strategy brochure.');
} catch {
  const partNames = (await readdir(pdfPartsDirectory))
    .filter((name) => name.startsWith('strategy-brochure.part-'))
    .sort();
  if (!partNames.length) throw new Error('Strategy brochure source parts are missing.');
  const parts = await Promise.all(partNames.map((name) => readFile(new URL(name, pdfPartsDirectory))));
  await writeFile(strategyOutput, Buffer.concat(parts));
}

await assemble({
  directory: downloadPartsDirectory,
  prefix: 'captive-vs-traditional-stoploss.pdf.part-',
  output: new URL('../public/brochures/captive-vs-traditional-stoploss.pdf', import.meta.url),
  size: 3_086_974,
  sha256: 'dbcaa71db6d6ffcaf2470f9574ddfbab11776856cf9d2035e2ad17c982cf27c9',
});

await assemble({
  directory: downloadPartsDirectory,
  prefix: 'captive-vs-traditional-stoploss.pptx.part-',
  output: new URL('../public/brochures/captive-vs-traditional-stoploss.pptx', import.meta.url),
  size: 12_343_637,
  sha256: '5241e0b410011ef6fa21662d0501d12ed1c94f7a67124ee4a6389133b0f5bf4e',
});

await assemble({
  directory: downloadPartsDirectory,
  prefix: 'peak-performance-risk-control-zenith-branded.pdf.part-',
  output: new URL('../public/brochures/peak-performance-risk-control-zenith-branded.pdf', import.meta.url),
  size: 1_058_935,
  sha256: '25f516ec33ba04a0b4118553ea6ee866bc7c9b045cc147f12658e7b8ba27656d',
});
