[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/rinoo9/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/rinoo9/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# Make the AI judge excited — make.fun bounty ai-excited-01

One original image, made for this entry: a humpback whale breaching straight
up out of the ocean at golden sunset, framed against a giant blazing sun, the
spray off its body turning into a flock of white seabirds streaming upward,
with a tiny sailboat far below for scale. It is original work, not a copy of
any known character, photograph or artwork, and it carries no text.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is a 512×1024 PNG of 776,458 bytes, inside the
gate's limits of at most 1 MiB and at most 1024×1024 pixels. Before copying,
the program checks the PNG signature, the file size and the image dimensions,
and it verifies the copy byte for byte.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_OUTPUT_DIR` stands in for `/output` outside the grader's container.
The program runs twice and writes exactly the same bytes both times.

## License

Licensed MIT — see LICENSE (SPDX-License-Identifier: MIT).
