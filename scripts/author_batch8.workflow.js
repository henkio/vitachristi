export const meta = {
  name: 'vitachristi-author-batch8',
  description: 'Translate & author immersive English meditation sessions from the Latin Vita Christi',
  phases: [
    { title: 'Author', detail: 'one agent per chapter: read Latin, produce a faithful English session' },
    { title: 'Verify', detail: 'check fidelity & voice, flag invented content' },
  ],
}

const DIR = '/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-trimmed'

// Curated flagship set. part: I = Pars Prima, II = Pars Secunda.
const CURATED = [
  {
    "id": "the-two-blind-men-healed-beyond-jericho",
    "file": "deel3-XXIV",
    "part": "II",
    "chapter": "XXIV",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "trust",
      "wonder",
      "gratitude"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Two Blind Men Healed Beyond Jericho — De duobus cæcis post egressum Jericho illuminatis"
  },
  {
    "id": "the-second-cleansing-of-the-temple",
    "file": "deel3-XXIX",
    "part": "II",
    "chapter": "XXIX",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "courage",
      "repentance"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Second Cleansing of the Temple — De secunda ejectione vendentium et ementium de templo"
  },
  {
    "id": "the-anointing-at-bethany",
    "file": "deel3-XXV",
    "part": "II",
    "chapter": "XXV",
    "theme": "The Passion",
    "lens": "Beholding",
    "emotions": [
      "love",
      "sorrow",
      "gratitude"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Anointing at Bethany — De effusione unguenti super caput Jesu"
  },
  {
    "id": "the-lord-seated-upon-the-colt",
    "file": "deel3-XXVI",
    "part": "II",
    "chapter": "XXVI",
    "theme": "The Passion",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "humility",
      "hope"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Lord Seated upon the Colt — De sessione Domini super pullum et asinam"
  },
  {
    "id": "the-widow-s-mite-and-the-pharisee-and-pu",
    "file": "deel3-XXX",
    "part": "II",
    "chapter": "XXX",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "humility",
      "trust",
      "love"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Widow's Mite and the Pharisee and Publican — De duobus minutis viduæ, et de Pharisæi et Publicani oratione"
  },
  {
    "id": "the-cursing-of-the-fig-tree-and-the-grai",
    "file": "deel3-XXXI",
    "part": "II",
    "chapter": "XXXI",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "longing",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Cursing of the Fig Tree and the Grain of Wheat — De maledictione ficulneæ, et grano frumenti, et de principe mundi"
  },
  {
    "id": "the-parable-of-the-two-sons",
    "file": "deel3-XXXII",
    "part": "II",
    "chapter": "XXXII",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "repentance",
      "gravity",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Parable of the Two Sons — De duobus filiis, quorum unus in vineam ivit, alius ire neglexit"
  },
  {
    "id": "the-wedding-feast-and-the-wedding-garmen",
    "file": "deel3-XXXIV",
    "part": "II",
    "chapter": "XXXIV",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "longing",
      "gravity",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Wedding Feast and the Wedding Garment — De invitatis ad nuptias, et de non habente vestem nuptialem"
  },
  {
    "id": "the-signs-of-the-lord-s-coming",
    "file": "deel3-XXXIX",
    "part": "II",
    "chapter": "XXXIX",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "hope",
      "fear"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Signs of the Lord's Coming — De signis adventus Domini et consummationis seculi"
  },
  {
    "id": "the-tribute-to-caesar-and-the-question-o",
    "file": "deel3-XXXV",
    "part": "II",
    "chapter": "XXXV",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "wonder",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Tribute to Caesar and the Question of the Resurrection — De quæstione super tributo solvendo, et de muliere septem viros habente"
  },
  {
    "id": "the-greatest-commandment",
    "file": "deel3-XXXVI",
    "part": "II",
    "chapter": "XXXVI",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "love",
      "longing",
      "humility"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Greatest Commandment — De primo et magno, ac secundo et simili Legis mandato"
  },
  {
    "id": "the-scribes-and-pharisees-in-the-seat-of",
    "file": "deel3-XXXVII",
    "part": "II",
    "chapter": "XXXVII",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "humility",
      "repentance"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Scribes and Pharisees in the Seat of Moses — De Scribis et Pharisæis in doctrina audiendis, sed non in vita imitandis"
  },
  {
    "id": "the-woes-of-eternal-judgement",
    "file": "deel3-XXXVIII",
    "part": "II",
    "chapter": "XXXVIII",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "fear",
      "repentance"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Woes of Eternal Judgement — Quibus debetur væ æternum"
  },
  {
    "id": "the-lie-of-the-guards",
    "file": "deel4-LXXIV",
    "part": "II",
    "chapter": "LXXIV",
    "theme": "Resurrection",
    "lens": "Beholding",
    "emotions": [
      "gravity",
      "trust",
      "hope"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Lie of the Guards — De mendacio custodum"
  },
  {
    "id": "the-lord-appears-by-the-sea-of-tiberias",
    "file": "deel4-LXXIX",
    "part": "II",
    "chapter": "LXXIX",
    "theme": "Resurrection",
    "lens": "Following",
    "emotions": [
      "joy",
      "love",
      "gratitude"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Lord Appears by the Sea of Tiberias — Quomodo Dominus apparuit septem discipulis, ad mare Tiberiadis"
  }
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
3. The "behold" movement: use ONLY Ludolph's own scene-setting words FROM THIS CHAPTER (his "Conspice...", "Vide...", "Cogita...", "attende...", "Aspice..."). If THIS chapter contains no such compositio, build the scene strictly from his actual narrative in this chapter — do NOT insert the "as if you were present" formula, and do NOT import phrasing from the preface or other chapters. Never put a sentence in his mouth that is not in this chapter's text.
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
