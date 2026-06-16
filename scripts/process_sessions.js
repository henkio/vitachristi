// Read the workflow result file, write per-session JSON + index + prayers.
const fs = require('fs');
const path = require('path');

const RESULT = '/private/tmp/claude-501/-Users-henkwolbers-Desktop-Vita/538fc469-4a73-4400-8c81-5a111bb6ae1a/tasks/wcgb8145i.output';
const PUB = '/Users/henkwolbers/Desktop/Vita/vitachristi/public';
const DATA = '/Users/henkwolbers/Desktop/Vita/vitachristi/data';
const PDATA = '/Users/henkwolbers/Desktop/Vita/vitachristi/public/data';

let raw = fs.readFileSync(RESULT, 'utf8').trim();
let arr;
try {
  const obj = JSON.parse(raw);
  arr = Array.isArray(obj) ? obj : obj.result;
} catch (e) { console.error('parse failed:', e.message); process.exit(1); }
if (!Array.isArray(arr)) { console.error('no result array'); process.exit(1); }

fs.mkdirSync(path.join(PUB, 'sessions'), { recursive: true });

const index = [];
const prayers = [];
let written = 0, skipped = 0;

for (const it of arr) {
  if (!it || !it.session || !it.session.movements) { skipped++; continue; }
  const s = it.session;
  const full = {
    id: it.id,
    part: it.part,
    chapter: it.chapter,
    title: s.title || it.id,
    subtitle: s.subtitle || '',
    theme: it.theme,
    lens: it.lens,
    emotions: it.emotions || [],
    journeys: it.journeys || [],
    gospelRef: s.gospelRef || '',
    durationMin: s.durationMin || 4,
    movements: s.movements,
    latinJewel: s.latinJewel || null,
  };
  fs.writeFileSync(path.join(PUB, 'sessions', it.id + '.json'), JSON.stringify(full, null, 2));
  written++;

  index.push({
    id: full.id, part: full.part, chapter: full.chapter, title: full.title,
    subtitle: full.subtitle, theme: full.theme, lens: full.lens,
    emotions: full.emotions, journeys: full.journeys,
    gospelRef: full.gospelRef, durationMin: full.durationMin,
    prayerPreview: (full.movements.prayer || []).slice(0, 3),
  });

  if (full.movements.prayer && full.movements.prayer.length) {
    prayers.push({ ref: full.title + ' · ' + full.gospelRef, text: full.movements.prayer, theme: full.theme });
  }
}

// order index by part then a rough chapter order using register
let order = [];
try { order = require(path.join(DATA, 'register.json')).map(r => r.part + '|' + r.chapter); } catch {}
const rank = (s) => { const i = order.indexOf(s.part + '|' + s.chapter); return i < 0 ? 999 : i; };
index.sort((x, y) => rank(x) - rank(y));

fs.writeFileSync(path.join(PUB, 'sessions', 'index.json'), JSON.stringify(index, null, 2));
fs.writeFileSync(path.join(DATA, 'prayers.json'), JSON.stringify(prayers, null, 2));

console.log(`Wrote ${written} sessions (skipped ${skipped}).`);
console.log(`Index: ${index.length} entries. Prayers: ${prayers.length}.`);
console.log('Journeys coverage:');
const jc = {};
index.forEach(s => (s.journeys || []).forEach(j => jc[j] = (jc[j] || 0) + 1));
console.log(JSON.stringify(jc));
