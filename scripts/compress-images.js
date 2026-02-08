/**
 * Compress images in public/assets to reduce load time.
 * Run: npm run compress-images (before build)
 *
 * Reduces quality: JPEG 75%, PNG 80% - good balance of size vs. quality
 */

const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../public/assets');
const JPEG_QUALITY = 75;
const MAX_WIDTH = 1920;  // Resize very large images (e.g. 4K) to speed up loading

async function compressImages() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.log('Installing sharp... run: npm install sharp --save-dev');
    process.exit(1);
  }

  const extensions = ['.png', '.jpg', '.jpeg'];
  const imageFiles = [];

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (extensions.includes(path.extname(file).toLowerCase())) {
        imageFiles.push(fullPath);
      }
    }
  }

  async function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const originalSize = fs.statSync(filePath).size;

    try {
      let pipeline = sharp(filePath);
      const meta = await pipeline.metadata();
      if (meta.width > MAX_WIDTH || meta.height > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { fit: 'inside', withoutEnlargement: true });
      }
      let buffer;
      if (ext === '.png') {
        buffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
      } else {
        buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
      }

      const newSize = buffer.length;
      if (newSize < originalSize) {
        fs.writeFileSync(filePath, buffer);
        const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
        console.log(`  ${path.relative(ASSETS_DIR, filePath)}: -${saved}%`);
        return originalSize - newSize;
      }
    } catch (err) {
      console.error(`  Error: ${filePath}`, err.message);
    }
    return 0;
  }

  if (!fs.existsSync(ASSETS_DIR)) {
    console.log('Assets folder not found.');
    return;
  }

  walkDir(ASSETS_DIR);
  console.log(`Compressing ${imageFiles.length} images...\n`);

  let totalSaved = 0;
  for (const file of imageFiles) {
    totalSaved += await processFile(file);
  }

  if (totalSaved > 0) {
    console.log(`\nDone! Saved ${(totalSaved / 1024 / 1024).toFixed(2)} MB.`);
  } else {
    console.log('\nNo images needed compression.');
  }
}

compressImages().catch(console.error);
