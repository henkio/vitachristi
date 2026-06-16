// Process a workflow result file into per-session JSON, then rebuild
// index.json / prayers.json / jewels.json from ALL sessions on disk.
// Usage: node scripts/process_sessions.js [resultFile]
const fs = require('fs');
const path = require('path');

const RESULT = process.argv[2] ||
  '/private/tmp/claude-501/-Users-henkwolbers-Desktop-Vita/538fc469-4a73-4400-8c81-5a111bb6ae1a/tasks/wcgb8145i.output';
const ROOT = '/Users/henkwolbers/Desktop/Vita/vitachristi';
const PUB = path.join(ROOT, 'public');
const SESS = path.join(PUB, 'sessions');
const PDATA = path.join(PUB, 'data');
fs.mkdirSync(SESS, { recursive: true });

// --- 1. write session files from the result ---
let written = 0, skipped = 0;
if (fs.existsSync(RESULT)) {
  const obj = JSON.parse(fs.readFileSync(RESULT, 'utf8').trim());
  const arr = Array.isArray(obj) ? obj : obj.result;
  for (const it of (arr || [])) {
    if (!it || !it.session || !it.session.movements) { skipped++; continue; }
    const s = it.session;
    const full = {
      id: it.id, part: it.part, chapter: it.chapter,
      title: s.title || it.id, subtitle: s.subtitle || '',
      theme: it.theme, lens: it.lens, emotions: it.emotions || [], journeys: it.journeys || [],
      gospelRef: s.gospelRef || '', durationMin: s.durationMin || 4,
      movements: s.movements, latinJewel: s.latinJewel || null,
    };
    fs.writeFileSync(path.join(SESS, it.id + '.json'), JSON.stringify(full, null, 2));
    written++;
  }
  console.log(`Wrote ${written} sessions from result (skipped ${skipped}).`);
} else {
  console.log('No result file; rebuilding indexes only.');
}

// --- 2. rebuild index / prayers / jewels from ALL session files ---
let order = [];
try { order = require(path.join(PDATA, 'register.json')).map(r => r.part + '|' + r.chapter); } catch {}
const rank = (s) => { const i = order.indexOf(s.part + '|' + s.chapter); return i < 0 ? 999 : i; };

const index = [], prayers = [], jewels = [];
for (const f of fs.readdirSync(SESS)) {
  if (f === 'index.json' || !f.endsWith('.json')) continue;
  const s = JSON.parse(fs.readFileSync(path.join(SESS, f)));
  index.push({
    id: s.id, part: s.part, chapter: s.chapter, title: s.title, subtitle: s.subtitle,
    theme: s.theme, lens: s.lens, emotions: s.emotions, journeys: s.journeys,
    gospelRef: s.gospelRef, durationMin: s.durationMin,
    prayerPreview: (s.movements.prayer || []).slice(0, 3),
  });
  if (s.movements.prayer && s.movements.prayer.length)
    prayers.push({ ref: s.title + ' · ' + s.gospelRef, text: s.movements.prayer, theme: s.theme, part: s.part, chapter: s.chapter });
  if (s.latinJewel && s.latinJewel.latin)
    jewels.push({ latin: s.latinJewel.latin, english: s.latinJewel.english, from: s.title });
}
index.sort((a, b) => rank(a) - rank(b));
prayers.sort((a, b) => rank(a) - rank(b));

fs.writeFileSync(path.join(SESS, 'index.json'), JSON.stringify(index, null, 2));
fs.writeFileSync(path.join(PDATA, 'prayers.json'), JSON.stringify(prayers, null, 2));
fs.writeFileSync(path.join(PDATA, 'jewels.json'), JSON.stringify(jewels, null, 2));

console.log(`Total on disk: ${index.length} sessions, ${prayers.length} prayers, ${jewels.length} jewels.`);
const jc = {}; index.forEach(s => (s.journeys || []).forEach(j => jc[j] = (jc[j] || 0) + 1));
console.log('Journeys:', JSON.stringify(jc));
