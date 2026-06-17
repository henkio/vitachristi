#!/usr/bin/env python3
"""Recover OCR-mangled chapters by anchoring on a unique content phrase,
then walking back to the 'CAPUT' line and forward to the next 'CAPUT'."""
import re, os
SRC="/Users/henkwolbers/Desktop/Vita"
LAT="/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-latin"
deelfile={1:"OCR_mineru_deel-01.txt",2:"OCR_mineru_deel-02.txt",3:"OCR_mineru_deel-03.txt",4:"OCR_mineru_deel-04.txt"}

# (deel, roman, unique lowercase phrase found in the chapter body)
targets=[
 (1,"III","desponsation"),
 (1,"XXXVI","laude humana"),
 (2,"LX","magdalen"),
 (2,"LXII","samaritan"),
 (2,"LXXV","extoll"),
 (2,"LXXVII","horrea"),
 (3,"XXXIII","vinitor"),
 (4,"LXIII","de sexta"),
 (4,"LXXIII","tribus mari"),
 (4,"LXXXII","ascension"),
 (4,"LXXXIII","evangelic"),
]

capre=re.compile(r'CAPUT', re.I)
recovered=0
for deel,roman,phrase in targets:
    out=os.path.join(LAT,f"deel{deel}-{roman}.txt")
    if os.path.exists(out):
        print(f"  exists deel{deel}-{roman}"); recovered+=1; continue
    lines=open(os.path.join(SRC,deelfile[deel]),encoding="utf-8",errors="replace").readlines()
    # first line containing the phrase
    hit=None
    for i,ln in enumerate(lines):
        if phrase in ln.lower(): hit=i; break
    if hit is None:
        print(f"  MISS deel{deel}-{roman}: phrase '{phrase}' not found"); continue
    # walk back to nearest CAPUT line
    start=0
    for j in range(hit,-1,-1):
        if capre.search(lines[j]): start=j; break
    # forward to next CAPUT line after start
    end=len(lines)
    for j in range(start+1,len(lines)):
        if capre.search(lines[j]): end=j; break
    body="".join(lines[start:end]).strip()
    if len(body)<200:
        print(f"  SHORT deel{deel}-{roman}: {len(body)}"); continue
    open(out,"w",encoding="utf-8").write(body)
    print(f"  OK   deel{deel}-{roman}: {len(body)} chars  (heading: {lines[start].strip()[:40]!r})")
    recovered+=1
print(f"recovered {recovered}/{len(targets)}")
