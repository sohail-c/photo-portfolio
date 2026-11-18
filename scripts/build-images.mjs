#!/usr/bin/env node
// Generates gallery thumbnails and an image-size manifest.
//
//   pnpm images          # only (re)builds thumbnails that are missing or older than the source
//   pnpm images --force  # rebuilds every thumbnail
//
// Source of truth for photos: public/images/full/*.jpg (long edge <= 2600px).
// Output:
//   public/images/thumbs/<name>.jpg   640px wide, used in galleries and cards
//   content/image-sizes.json          { "/images/full/x.jpg": [w, h], ... } for
//                                     every full-size photo and project image,
//                                     so <img> tags get real width/height and
//                                     the layout doesn't jump while loading.

import { readdir, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const fullDir = path.join(root, "public/images/full");
const thumbDir = path.join(root, "public/images/thumbs");
const projectDir = path.join(root, "public/images/projects");
const manifestPath = path.join(root, "content/image-sizes.json");

const THUMB_WIDTH = 640;
const MAX_FULL_EDGE = 2600;
const force = process.argv.includes("--force");
const isImage = (f) => /\.(jpe?g|png|webp)$/i.test(f);

async function mtime(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (isImage(entry.name)) out.push(p);
  }
  return out;
}

const toPublicUrl = (file) =>
  "/" + path.relative(path.join(root, "public"), file).split(path.sep).join("/");

async function main() {
  await mkdir(thumbDir, { recursive: true });
  const sizes = {};
  let built = 0;
  const warnings = [];

  const photos = (await readdir(fullDir)).filter(isImage).sort();
  for (const name of photos) {
    const src = path.join(fullDir, name);
    const meta = await sharp(src).metadata();
    const { width, height } = meta;
    if (Math.max(width, height) > MAX_FULL_EDGE) {
      warnings.push(`${name} is ${width}x${height}; full-size photos should be <= ${MAX_FULL_EDGE}px`);
    }
    sizes[toPublicUrl(src)] = [width, height];

    const dest = path.join(thumbDir, name);
    if (force || (await mtime(dest)) < (await mtime(src))) {
      await sharp(src)
        .rotate()
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: 78, mozjpeg: true, progressive: true })
        .toFile(dest);
      built++;
    }
  }

  for (const file of (await walk(projectDir)).sort()) {
    const { width, height } = await sharp(file).metadata();
    sizes[toPublicUrl(file)] = [width, height];
  }

  const lines = Object.entries(sizes).map(
    ([url, [w, h]]) => `  ${JSON.stringify(url)}: [${w}, ${h}]`
  );
  await writeFile(manifestPath, `{\n${lines.join(",\n")}\n}\n`);
  console.log(
    `thumbnails: ${built} built, ${photos.length - built} up to date; ` +
      `manifest: ${Object.keys(sizes).length} images -> content/image-sizes.json`
  );
  for (const w of warnings) console.warn(`warning: ${w}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
