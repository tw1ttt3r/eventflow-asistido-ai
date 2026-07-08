/**
 * Genera iconos PWA y favicon desde public/icons/calendar-brand.svg
 * (mismo diseño que ef-icon name="calendar-brand" + text-ef-purple).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const sourceSvg = join(root, 'public', 'icons', 'calendar-brand.svg');
const iconsDir = join(root, 'public', 'icons');
const faviconPath = join(root, 'public', 'favicon.ico');

const PNG_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const FAVICON_SIZES = [16, 32, 48];

const svg = readFileSync(sourceSvg);

for (const size of PNG_SIZES) {
  const target = join(iconsDir, `icon-${size}x${size}.png`);
  await sharp(svg).resize(size, size).png().toFile(target);
  console.log(`✓ ${target.replace(`${root}/`, '')}`);
}

const faviconBuffers = await Promise.all(
  FAVICON_SIZES.map((size) => sharp(svg).resize(size, size).png().toBuffer()),
);
writeFileSync(faviconPath, await toIco(faviconBuffers));
console.log(`✓ ${faviconPath.replace(`${root}/`, '')}`);
