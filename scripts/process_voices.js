// Process the voices workflow output into public/voices/<id>.json + data/voices.json
const fs = require('fs'), path = require('path');
const RESULT = process.argv[2] || '/private/tmp/claude-501/-Users-henkwolbers-Desktop-Vita/538fc469-4a73-4400-8c81-5a111bb6ae1a/tasks/w3pzeqkkz.output';
const PUB = '/Users/henkwolbers/Desktop/Vita/vitachristi/public';
const VDIR = path.join(PUB, 'voices');
fs.mkdirSync(VDIR, { recursive: true });

const obj = JSON.parse(fs.readFileSync(RESULT, 'utf8').trim());
const arr = Array.isArray(obj) ? obj : obj.result;
const index = [];
let n = 0;
for (const it of (arr || [])) {
  if (!it || !it.session || !it.session.narration) continue;
  const s = it.session;
  const v = {
    id: it.id, type: 'voice', character: it.character, scene: it.scene,
    title: s.title || it.scene, gospelRef: it.gospelRef, theme: it.theme,
    emotions: it.emotions || [], durationMin: s.durationMin || 4,
    narration: s.narration, prayer: s.prayer || [], latinJewel: s.latinJewel || null,
  };
  fs.writeFileSync(path.join(VDIR, it.id + '.json'), JSON.stringify(v, null, 2));
  index.push({ id: v.id, character: v.character, scene: v.scene, title: v.title, gospelRef: v.gospelRef, theme: v.theme, emotions: v.emotions, durationMin: v.durationMin });
  n++;
}
fs.writeFileSync(path.join(PUB, 'data', 'voices.json'), JSON.stringify(index, null, 2));
console.log(`Wrote ${n} voices.`);
