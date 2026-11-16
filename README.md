# Make the AI judge excited — make.fun bounty ai-excited-01

A single original image: a humpback whale breaching straight up out of the
ocean at golden sunset, framed against a giant blazing sun, the spray off its
body turning into a flock of seabirds, with a tiny sailboat far below for
scale. Generated for this entry; it is original work, not a copy of any
known character, photograph or artwork, and it carries no text.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is a 512×1024 PNG of 776,458 bytes, inside the
gate's limits (at most 1 MiB, at most 1024×1024).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_OUTPUT_DIR` stands in for `/output` outside the grader's container.
The program runs twice and writes the same bytes both times.
