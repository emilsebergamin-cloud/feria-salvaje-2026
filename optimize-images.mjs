import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, parse } from 'path';

const inputDir = '../fotos web/MIX INICIO';
const outputDir = '../fotos web/MIX INICIO/optimizadas';

const files = await readdir(inputDir);
const images = files.filter(f => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f));

console.log(`Optimizando ${images.length} imágenes...\n`);

for (const file of images) {
  const inputPath = join(inputDir, file);
  const name = parse(file).name
    .replace(/^Copia de /g, '')
    .replace(/^Copia de /g, '')
    .replace(/\s+/g, '_')
    .toLowerCase();

  const outputWebp = join(outputDir, `${name}.webp`);
  const outputJpg = join(outputDir, `${name}.jpg`);

  const meta = await sharp(inputPath).metadata();
  console.log(`${file}: ${meta.width}x${meta.height}`);

  // WebP version
  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputWebp);

  // JPG fallback
  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outputJpg);

  const { size: webpSize } = await sharp(outputWebp).metadata().then(() =>
    import('fs/promises').then(fs => fs.stat(outputWebp))
  );
  const { size: jpgSize } = await sharp(outputJpg).metadata().then(() =>
    import('fs/promises').then(fs => fs.stat(outputJpg))
  );

  console.log(`  → webp: ${(webpSize / 1024).toFixed(0)}KB | jpg: ${(jpgSize / 1024).toFixed(0)}KB\n`);
}

console.log('✓ Listo!');
