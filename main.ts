// Entry for make.fun bounty ai-excited-01 (Node 22, standard library only).
// The image lives in entry.png next to this file; this program copies it to
// /output/entry.png, byte for byte. The gate only accepts a whole PNG of at
// most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly these bytes,
// so the program checks the file is really such a PNG before it ships it.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = '89504e470d0a1a0a';
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);

// Refuse to ship anything that is not a whole PNG inside the gate's limits.
if (bytes.subarray(0, 8).toString('hex') !== PNG_MAGIC) {
  throw new Error('refusing to ship entry.png: it does not start with the PNG signature');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`refusing to ship entry.png: ${bytes.length} bytes exceeds the 1 MiB limit`);
}
// The IHDR chunk holds the width and height as big-endian 32-bit values.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`refusing to ship entry.png: ${width}x${height} exceeds the 1024x1024 limit`);
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// Write through a temp file and rename, so a partial copy is never shipped.
const temp = join(outDir, '.entry.png.tmp');
writeFileSync(temp, bytes);
const copied = readFileSync(temp);
if (copied.length !== bytes.length || !copied.equals(bytes)) {
  throw new Error('the copy of entry.png does not match the source byte for byte');
}
renameSync(temp, target);
