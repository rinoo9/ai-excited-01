// A make.fun ai-excited-01 entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels, and the
// judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

// The entry must be a whole PNG: refuse to ship anything else.
const sourceBytes = readFileSync(source);
if (sourceBytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('entry.png is not a PNG file');
}
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
// Write through a temp file and rename, so a partial copy can never be shipped.
const temp = join(outDir, '.entry.png.tmp');
writeFileSync(temp, sourceBytes);
const copied = readFileSync(temp);
if (copied.length !== sourceBytes.length || !copied.equals(sourceBytes)) {
  throw new Error('copied entry.png does not match the source');
}
renameSync(temp, target);
