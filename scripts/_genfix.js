const fs = require('fs');
const items = [
  { id:'risen-to-magdalene', file:'deel4-LXXII-mag', part:'II', chapter:'LXXII',
    theme:'Resurrection', lens:'Beholding', emotions:['love','joy','longing'], journeys:['risen'],
    hint:"How the risen Lord appeared to Mary Magdalene — she turns, he says 'Mary', she answers 'Rabboni'; 'Do not touch me' (John 20:11-18)" },
  { id:'the-three-marys', file:'deel4-LXXIII', part:'II', chapter:'LXXIII',
    theme:'Resurrection', lens:'Beholding', emotions:['joy','wonder','love'], journeys:['risen'],
    hint:"How the risen Lord met the three Marys returning from the tomb — 'All hail'; they held his feet and adored him (Matthew 28:9-10)" },
];
let t = fs.readFileSync('scripts/author_sessions.workflow.js','utf8');
t = t.replace("name: 'vitachristi-author-sessions'", "name: 'vitachristi-fix-resurrection'");
t = t.replace(/const CURATED = \[[\s\S]*?\n\]/, 'const CURATED = ' + JSON.stringify(items,null,2));
fs.writeFileSync('scripts/fix_resurrection.workflow.js', t);
console.log('wrote fix workflow with', items.length, 'items');
