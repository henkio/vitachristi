#!/usr/bin/env python3
"""Recover the chapters the strict splitter missed (OCR-mangled headings).
For each (deel, roman), find the FIRST loose 'CAPUT <roman>' heading in that
deel's OCR and extract text up to the next loose CAPUT heading."""
import re, os

SRC = "/Users/henkwolbers/Desktop/Vita"
LAT = "/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-latin"

deelfile = {1:"OCR_mineru_deel-01.txt",2:"OCR_mineru_deel-02.txt",
            3:"OCR_mineru_deel-03.txt",4:"OCR_mineru_deel-04.txt"}

# missing (deel, roman)
missing = [
 (1,"III"),(1,"XXXVI"),(2,"LX"),(2,"LXII"),(2,"LXXV"),(2,"LXXVII"),
 (3,"XXXIII"),(4,"LXIII"),(4,"LXXIII"),(4,"LXXXII"),(4,"LXXXIII"),
]

# any loose CAPUT heading: 'CAPUT <roman>' with the remainder of the line short
# (no full title on the same line -> body heading, not an index line)
def is_heading(line):
    s = re.sub(r'^[#\s]*', '', line.strip())
    m = re.match(r'CAPUT\s+([IVXLC]+)\b(.*)$', s)
    if not m: return None
    rest = m.group(2).strip(' .!|:-—–')
    # body heading: nothing meaningful after the numeral (title is on next lines)
    if len(rest) <= 2:
        return m.group(1).upper()
    return None

def roman_val(r):
    vals={'I':1,'V':5,'X':10,'L':50,'C':100}; t=0;p=0
    for ch in reversed(r):
        v=vals.get(ch,0); t+= -v if v<p else v; p=max(p,v)
    return t

recovered=0
for deel, roman in missing:
    path=os.path.join(SRC, deelfile[deel])
    lines=open(path,encoding="utf-8",errors="replace").readlines()
    # collect all heading positions (roman -> first line idx)
    heads=[]
    for i,ln in enumerate(lines):
        h=is_heading(ln)
        if h: heads.append((h,i))
    # find first occurrence of our target roman
    start=None
    for idx,(h,i) in enumerate(heads):
        if h==roman:
            start=i
            # next heading line
            end = heads[idx+1][1] if idx+1<len(heads) else len(lines)
            break
    if start is None:
        print(f"  MISS  deel{deel}-{roman}: heading not found"); continue
    body="".join(lines[start:end]).strip()
    if len(body)<200:
        print(f"  SHORT deel{deel}-{roman}: {len(body)} chars (skip)"); continue
    out=os.path.join(LAT, f"deel{deel}-{roman}.txt")
    open(out,"w",encoding="utf-8").write(body)
    print(f"  OK    deel{deel}-{roman}: {len(body)} chars")
    recovered+=1
print(f"recovered {recovered}/{len(missing)}")
