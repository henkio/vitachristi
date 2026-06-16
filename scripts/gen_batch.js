// Generate a sessions-authoring workflow for a list of chapter file-ids,
// pulling metadata from register.json and assigning journeys by theme/emotion.
const fs = require('fs');
const reg = require('../data/register.json');

const TARGETS = process.argv[2] ? process.argv[2].split(',') : [];
const OUT = process.argv[3] || 'scripts/author_batch2.workflow.js';

const fileToPart = (f) => (f.startsWith('deel1') || f.startsWith('deel2')) ? 'I' : 'II';

function journeysFor(theme, emotions) {
  const e = new Set(emotions || []);
  const J = [];
  if (theme === 'The Passion') J.push('passion');
  if (theme === 'Resurrection' || theme === 'Consummation') J.push('risen');
  if (theme === 'Baptism & Temptation') J.push('temptation');
  if (['Nativity', 'Incarnation', 'Hidden Life'].includes(theme)) J.push('humility');
  if (e.has('fear') || e.has('rest')) J.push('storm');
  if (theme === 'Calling & Discipleship') J.push('humility');
  J.push('daily');
  return [...new Set(J)];
}

const items = [];
for (const fid of TARGETS) {
  const m = fid.match(/deel\d-([IVXLC]+)/);
  if (!m) continue;
  const roman = m[1];
  const part = fileToPart(fid);
  const r = reg.find(x => x.part === part && x.chapter === roman);
  if (!r) { console.error('no register match for', fid); continue; }
  const id = r.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  items.push({
    id, file: fid, part, chapter: roman,
    theme: r.theme, lens: r.lens, emotions: r.emotions,
    journeys: journeysFor(r.theme, r.emotions),
    hint: r.title + ' — ' + r.latinTitle,
  });
}

// de-dup ids
const seen = {}; items.forEach(it => { if (seen[it.id]) it.id += '-' + it.chapter.toLowerCase(); seen[it.id] = 1; });

const template = fs.readFileSync('scripts/author_sessions.workflow.js', 'utf8');
const newName = OUT.includes('batch2') ? 'vitachristi-author-batch2' : 'vitachristi-author-batchN';
let out = template
  .replace("name: 'vitachristi-author-sessions'", `name: '${newName}'`)
  .replace(/const CURATED = \[[\s\S]*?\n\]/, 'const CURATED = ' + JSON.stringify(items, null, 2));
fs.writeFileSync(OUT, out);
console.log(`Wrote ${OUT} with ${items.length} chapters.`);
console.log('ids:', items.map(i => i.id).join(', '));
