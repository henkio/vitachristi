#!/usr/bin/env python3
"""For each curated chapter, build a compact source: the opening meditation
(first ~7500 chars) + any prayer passages (Oratio / 'Domine Jesu' blocks).
This gives authoring agents both the scene/meditation and a real closing prayer
without feeding them 200k chars of scholastic digression."""
import re, os

LAT = "/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-latin"
OUT = "/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-trimmed"
os.makedirs(OUT, exist_ok=True)

curated = [
 "deel4-LVIII","deel4-LIX","deel4-LX","deel4-LXI","deel4-LXII","deel4-LXIV",
 "deel4-LXV","deel4-LXVI","deel4-LXVII","deel4-LXVIII","deel4-LXIX","deel4-LXX",
 "deel4-LXXII","deel4-LXXVI","deel4-LXXVIII","deel2-XLVI","deel2-LXIX",
 "deel1-XXXVII","deel1-IX","deel1-V","deel3-LIV","deel1-XXXIII","deel1-XXII",
 "deel1-XI","deel1-XV","deel3-XVII","deel1-XXV","deel4-LXXXIV","deel2-XLIV",
]

def prayer_blocks(text):
    blocks = []
    # capture sentences around prayer cues
    for m in re.finditer(r'(Domine Jesu|O bone Jesu|O Jesu|O dulcis|Concede|Tu, Domine|Oratio)', text):
        start = max(0, m.start() - 40)
        end = min(len(text), m.start() + 700)
        blocks.append(text[start:end])
        if len("".join(blocks)) > 6000:
            break
    return blocks

for cid in curated:
    p = os.path.join(LAT, cid + ".txt")
    if not os.path.exists(p):
        print("skip missing", cid); continue
    text = open(p, encoding="utf-8", errors="replace").read()
    opening = text[:7500]
    prayers = prayer_blocks(text)
    out = opening
    if prayers:
        out += "\n\n=== PRAYER PASSAGES (for the Oratio movement) ===\n"
        out += "\n---\n".join(prayers)
    open(os.path.join(OUT, cid + ".txt"), "w", encoding="utf-8").write(out)
    print(f"{cid}: opening {len(opening)} + {len(prayers)} prayer blocks")
print("done")
