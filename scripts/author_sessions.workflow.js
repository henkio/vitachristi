export const meta = {
  name: 'vitachristi-author-sessions',
  description: 'Translate & author immersive English meditation sessions from the Latin Vita Christi',
  phases: [
    { title: 'Author', detail: 'one agent per chapter: read Latin, produce a faithful English session' },
    { title: 'Verify', detail: 'check fidelity & voice, flag invented content' },
  ],
}

const DIR = '/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-trimmed'

// Curated flagship set. part: I = Pars Prima, II = Pars Secunda.
const CURATED = [
  { id:'passion-meditation', file:'deel4-LVIII', part:'II', chapter:'LVIII', theme:'The Passion', lens:'Compassion', emotions:['sorrow','love'], journeys:['passion','temptation'], hint:'On meditating the Passion in general' },
  { id:'gethsemane',         file:'deel4-LIX',  part:'II', chapter:'LIX',  theme:'The Passion', lens:'Compassion', emotions:['fear','sorrow','trust'], journeys:['passion','storm'], hint:'Compline I — the agony in Gethsemane (Lk 22)' },
  { id:'the-arrest',         file:'deel4-LX',   part:'II', chapter:'LX',   theme:'The Passion', lens:'Compassion', emotions:['sorrow','courage'], journeys:['passion'], hint:'Matins — the arrest and first interrogation' },
  { id:'before-the-council', file:'deel4-LXI',  part:'II', chapter:'LXI',  theme:'The Passion', lens:'Compassion', emotions:['sorrow'], journeys:['passion'], hint:'Prime — the council against Jesus' },
  { id:'before-pilate',      file:'deel4-LXII', part:'II', chapter:'LXII', theme:'The Passion', lens:'Compassion', emotions:['sorrow','courage'], journeys:['passion'], hint:'Terce — Pilate; the scourging and crowning' },
  { id:'the-dying-christ',   file:'deel4-LXIV', part:'II', chapter:'LXIV', theme:'The Passion', lens:'Compassion', emotions:['sorrow','love'], journeys:['passion'], hint:'None — the death of Christ on the Cross' },
  { id:'the-deposition',     file:'deel4-LXV',  part:'II', chapter:'LXV',  theme:'The Passion', lens:'Compassion', emotions:['sorrow','rest'], journeys:['passion'], hint:'Vespers — Joseph takes down the body' },
  { id:'the-burial',        file:'deel4-LXVI', part:'II', chapter:'LXVI', theme:'The Passion', lens:'Compassion', emotions:['sorrow','rest'], journeys:['passion'], hint:'Compline II — anointing and burial' },
  { id:'praise-of-the-cross',file:'deel4-LXVII',part:'II', chapter:'LXVII',theme:'The Passion', lens:'Beholding', emotions:['love','gratitude'], journeys:['passion'], hint:'Epilogue of the Passion — the praise of the Cross' },
  { id:'holy-saturday',      file:'deel4-LXVIII',part:'II',chapter:'LXVIII',theme:'The Passion', lens:'Compassion', emotions:['silence','hope','sorrow'], journeys:['passion'], hint:'Holy Saturday — Mary keeps faith' },
  { id:'washing-of-feet',    file:'deel3-LIV',  part:'II', chapter:'LIV',  theme:'The Passion', lens:'Compassion', emotions:['humility','love'], journeys:['passion','humility'], hint:'The washing of the disciples’ feet' },

  { id:'the-resurrection',   file:'deel4-LXIX', part:'II', chapter:'LXIX', theme:'Resurrection', lens:'Beholding', emotions:['joy','wonder'], journeys:['risen'], hint:'The Resurrection of the Lord' },
  { id:'risen-to-his-mother',file:'deel4-LXX',  part:'II', chapter:'LXX',  theme:'Resurrection', lens:'Beholding', emotions:['joy','comfort','love'], journeys:['risen'], hint:'How the Lord appeared to His Mother' },
  { id:'risen-to-magdalene', file:'deel4-LXXII',part:'II', chapter:'LXXII',theme:'Resurrection', lens:'Beholding', emotions:['love','joy','longing'], journeys:['risen'], hint:'How the Lord appeared to Mary Magdalene' },
  { id:'the-road-to-emmaus', file:'deel4-LXXVI',part:'II', chapter:'LXXVI',theme:'Resurrection', lens:'Beholding', emotions:['hope','joy'], journeys:['risen'], hint:'The road to Emmaus' },
  { id:'doubting-thomas',    file:'deel4-LXXVIII',part:'II',chapter:'LXXVIII',theme:'Resurrection', lens:'Receiving', emotions:['trust','joy'], journeys:['risen'], hint:'How the Lord appeared with Thomas present' },
  { id:'pentecost',          file:'deel4-LXXXIV',part:'II', chapter:'LXXXIV',theme:'Consummation', lens:'Receiving', emotions:['joy','fire','courage'], journeys:['risen'], hint:'Pentecost — the coming of the Spirit' },

  { id:'the-storm-stilled',  file:'deel2-XLVI', part:'I',  chapter:'XLVI', theme:'Miracles', lens:'Trust', emotions:['fear','rest','trust'], journeys:['storm'], hint:'Christ asleep in the boat rebukes the wind and sea' },
  { id:'peter-sinks',        file:'deel2-LXIX', part:'I',  chapter:'LXIX', theme:'Miracles', lens:'Trust', emotions:['fear','trust'], journeys:['storm'], hint:'Jesus walks on the water and lifts Peter' },
  { id:'the-our-father',     file:'deel1-XXXVII',part:'I', chapter:'XXXVII',theme:'Sermon on the Mount', lens:'Receiving', emotions:['trust','rest'], journeys:['storm'], hint:'The Lord’s Prayer' },

  { id:'the-nativity',       file:'deel1-IX',   part:'I',  chapter:'IX',   theme:'Nativity', lens:'Beholding', emotions:['joy','wonder','humility'], journeys:['humility','daily'], hint:'The Nativity of the Saviour' },
  { id:'the-annunciation',   file:'deel1-V',    part:'I',  chapter:'V',    theme:'Incarnation', lens:'Receiving', emotions:['awe','joy','humility'], journeys:['humility','daily'], hint:'The Annunciation — the conception of the Saviour' },
  { id:'the-beatitudes',     file:'deel1-XXXIII',part:'I', chapter:'XXXIII',theme:'Sermon on the Mount', lens:'Following', emotions:['longing','hope'], journeys:['humility','daily'], hint:'The Sermon on the Mount — the eight Beatitudes' },
  { id:'the-epiphany',       file:'deel1-XI',   part:'I',  chapter:'XI',   theme:'Nativity', lens:'Beholding', emotions:['wonder','joy'], journeys:['daily'], hint:'The Epiphany — the three Magi' },
  { id:'boy-jesus-temple',   file:'deel1-XV',   part:'I',  chapter:'XV',   theme:'Hidden Life', lens:'Beholding', emotions:['wonder','sorrow'], journeys:['daily'], hint:'The boy Jesus remains in the Temple' },

  { id:'the-desert',         file:'deel1-XXII', part:'I',  chapter:'XXII', theme:'Temptation', lens:'Following', emotions:['courage','steadfastness'], journeys:['temptation'], hint:'The fasting and temptations in the desert' },

  { id:'raising-of-lazarus', file:'deel3-XVII', part:'II', chapter:'XVII', theme:'Miracles', lens:'Compassion', emotions:['grief','comfort','hope'], journeys:['daily','storm'], hint:'The raising of Lazarus' },
  { id:'wedding-at-cana',    file:'deel1-XXV',  part:'I',  chapter:'XXV',  theme:'Miracles', lens:'Beholding', emotions:['joy','trust'], journeys:['daily'], hint:'The water made wine at Cana' },
  { id:'widow-of-nain',      file:'deel2-XLIV', part:'I',  chapter:'XLIV', theme:'Miracles', lens:'Compassion', emotions:['comfort','hope'], journeys:['daily','storm'], hint:'The raising of the widow of Nain’s son' },
]

const SCHEMA = {
  type: 'object',
  required: ['title','subtitle','gospelRef','durationMin','movements','latinJewel'],
  properties: {
    title: { type:'string', description:'Short evocative English title for the session' },
    subtitle: { type:'string', description:'One-line subtitle / the moment depicted' },
    gospelRef: { type:'string', description:'Gospel reference, e.g. "Luke 22:39–44"' },
    durationMin: { type:'integer', description:'Estimated reading time in minutes (2–6)' },
    movements: {
      type:'object',
      required:['stillness','gospel','behold','consider','prayer'],
      properties: {
        stillness: { type:'array', items:{type:'string'}, description:'1–3 short lines inviting the reader into silence. May use a patristic line Ludolf cites about quiet prayer; otherwise a simple invitation. Plain, calm.' },
        gospel: { type:'array', items:{type:'string'}, description:'The Gospel verses for this scene, faithfully translated as Ludolf quotes them. One short line per array item, for slow reveal.' },
        behold: { type:'array', items:{type:'string'}, description:'Ludolf’s compositio: his second-person invitation to imagine you are present (translate his actual words, e.g. "Behold attentively the Lord Jesus..."). Keep his voice.' },
        consider: { type:'array', items:{type:'string'}, description:'The consideratio: Ludolf’s meditation, translated faithfully. PRESERVE his intense, visceral medieval voice — do NOT soften into wellness language. One thought per line.' },
        prayer: { type:'array', items:{type:'string'}, description:'Ludolf’s actual closing prayer (Oratio), translated from the PRAYER PASSAGES in the source. If none present, translate an embedded "Domine Jesu" prayer. Address Christ directly.' },
      }
    },
    latinJewel: {
      type:'object', required:['latin','english'],
      properties: {
        latin: { type:'string', description:'ONE real Latin sentence from the source, the most beautiful/striking line.' },
        english: { type:'string', description:'Faithful English of that Latin line.' },
      }
    },
    fidelityNote: { type:'string', description:'Anything you had to infer or could not source; empty if fully faithful.' },
  }
}

function authorPrompt(item) {
  return `You are the translator-editor of "Vita Christi", an immersive English Catholic contemplation web app built ENTIRELY on the real text of Ludolph of Saxony's *Vita Jesu Christi* (1374). The guide's voice IS Ludolph himself — a Carthusian monk speaking across 650 years.

Read this Latin source chapter:
  ${DIR}/${item.file}.txt

This is chapter ${item.chapter} (Part ${item.part}): "${item.hint}".

Produce ONE meditation session as structured JSON, arranged in Ludolph's own five movements (stillness → gospel → behold → consider → prayer).

ABSOLUTE RULES:
1. FAITHFUL, NOT INVENTED. Translate Ludolph's actual words and the Gospel verses he quotes. Do not put modern sentences in his mouth. If you must add a tiny connective phrase, keep it minimal and note it in fidelityNote.
2. KEEP THE INTENSITY. Ludolph is visceral, raw, medieval — blood, fear, "wretched sinner", the worm, tears. DO NOT sanitize him into soft mindfulness language. His heaviness is the whole point.
3. The "behold" movement uses his real compositio (e.g. his "attende ad singula ac si praesens esses" — attend to each thing as if you were present; "Conspice..." — Behold...).
4. The "prayer" movement must be a REAL prayer from the source (the PRAYER PASSAGES block, or an embedded "Domine Jesu..."), translated faithfully — never a self-authored affirmation.
5. Keep lines SHORT (one image/thought per line) for slow on-screen reveal.
6. latinJewel = one real, beautiful Latin sentence copied from the source + its English.

Translate into dignified, timeless English (think a fine modern translation of a spiritual classic), not archaic pastiche, but reverent. Return ONLY the structured object.`
}

const VERIFY_SCHEMA = {
  type:'object', required:['faithful','issues'],
  properties:{
    faithful:{type:'boolean', description:'true if the session faithfully reflects Ludolph and invents nothing major'},
    voicePreserved:{type:'boolean', description:'true if Ludolph’s intense voice is kept (not softened into wellness)'},
    issues:{type:'array', items:{type:'string'}, description:'specific problems: invented content, softened tone, prayer not from source, mistranslation'},
  }
}

phase('Author')
const results = await pipeline(
  CURATED,
  (item) => agent(authorPrompt(item), { label:`author:${item.id}`, phase:'Author', schema: SCHEMA })
    .then(session => session ? { ...item, session } : null),
  (authored, item) => {
    if (!authored) return null
    // verify as soon as authored
    return agent(
      `You are a fidelity reviewer for the Vita Christi app. The source is ${DIR}/${item.file}.txt (Ludolph of Saxony, chapter ${item.chapter}). Here is an English session derived from it:\n\n${JSON.stringify(authored.session, null, 2)}\n\nRead the source. Judge: (a) is it faithful (invents nothing major)? (b) is Ludolph's intense medieval voice preserved (NOT softened into wellness)? (c) is the prayer a real prayer from the source? List concrete issues.`,
      { label:`verify:${item.id}`, phase:'Verify', schema: VERIFY_SCHEMA }
    ).then(v => ({ ...authored, verdict: v }))
  }
)

const ok = results.filter(Boolean)
log(`Authored ${ok.length}/${CURATED.length} sessions`)
return ok
