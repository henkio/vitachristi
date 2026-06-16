#!/usr/bin/env python3
"""Split the four OCR files into per-chapter Latin text files.
A body chapter heading is a line that, after stripping markdown #'s and
whitespace, equals 'CAPUT <roman>' (optionally trailing period) with nothing
else after the numeral. Index lines ('CAPUT I. - De divina...') are skipped
because they carry the title on the same line.
"""
import re, os, sys

SRC = "/Users/henkwolbers/Desktop/Vita"
OUT = "/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-latin"
os.makedirs(OUT, exist_ok=True)

files = {
    "1": "OCR_mineru_deel-01.txt",
    "2": "OCR_mineru_deel-02.txt",
    "3": "OCR_mineru_deel-03.txt",
    "4": "OCR_mineru_deel-04.txt",
}

# matches a heading-only CAPUT line (no title after the numeral)
head_re = re.compile(r'^\s*#*\s*CAPUT\s+([IVXLC]+)\s*\.?\s*$', re.IGNORECASE)

manifest = []
for deel, fname in files.items():
    path = os.path.join(SRC, fname)
    with open(path, encoding="utf-8", errors="replace") as fh:
        lines = fh.readlines()
    # find the index region start (heuristic: a run of many short 'CAPUT X. — ...' lines)
    chapters = []  # (roman, start_idx)
    for i, ln in enumerate(lines):
        m = head_re.match(ln)
        if m:
            chapters.append((m.group(1).upper(), i))
    # build chunks
    for idx, (roman, start) in enumerate(chapters):
        end = chapters[idx + 1][1] if idx + 1 < len(chapters) else len(lines)
        body = "".join(lines[start:end]).strip()
        # drop chapters that are absurdly short (OCR noise) but keep most
        if len(body) < 40:
            continue
        out_name = f"deel{deel}-{roman}.txt"
        with open(os.path.join(OUT, out_name), "w", encoding="utf-8") as out:
            out.write(body)
        manifest.append((deel, roman, out_name, len(body)))

# write a manifest
with open(os.path.join(OUT, "_manifest.tsv"), "w", encoding="utf-8") as mf:
    mf.write("deel\troman\tfile\tchars\n")
    for row in manifest:
        mf.write("\t".join(str(x) for x in row) + "\n")

print(f"Extracted {len(manifest)} chapter files")
# quick per-deel count
from collections import Counter
c = Counter(r[0] for r in manifest)
for d in sorted(c):
    print(f"  deel {d}: {c[d]} chapters")
