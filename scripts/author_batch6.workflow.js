export const meta = {
  name: 'vitachristi-author-batch6',
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
    "id": "the-call-to-take-up-the-cross",
    "file": "deel3-II",
    "part": "II",
    "chapter": "II",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "courage",
      "love",
      "gravity"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Call to Take Up the Cross — De exhortatione ad sequendum Christum, et suæ Passionis exemplum"
  },
  {
    "id": "the-healing-of-the-epileptic-boy",
    "file": "deel3-IV",
    "part": "II",
    "chapter": "IV",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "trust",
      "wonder",
      "compassion"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Healing of the Epileptic Boy — De sanatione lunatici"
  },
  {
    "id": "the-unforgiving-servant",
    "file": "deel3-IX",
    "part": "II",
    "chapter": "IX",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "repentance",
      "love"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Unforgiving Servant — De rege qui voluit rationem ponere cum servis suis"
  },
  {
    "id": "the-winnowing-at-the-last-judgement",
    "file": "deel3-L",
    "part": "II",
    "chapter": "L",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "fear",
      "hope"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Winnowing at the Last Judgement — De ventilatione areæ in extremo judicio"
  },
  {
    "id": "the-pasch-and-its-meanings",
    "file": "deel3-LI",
    "part": "II",
    "chapter": "LI",
    "theme": "The Passion",
    "lens": "Beholding",
    "emotions": [
      "gravity",
      "longing",
      "love"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Pasch and Its Meanings — De Pascha et diversis hujus nominis acceptionibus"
  },
  {
    "id": "the-betrayal-by-judas",
    "file": "deel3-LII",
    "part": "II",
    "chapter": "LII",
    "theme": "The Passion",
    "lens": "Compassion",
    "emotions": [
      "sorrow",
      "gravity",
      "fear"
    ],
    "journeys": [
      "passion",
      "storm",
      "daily"
    ],
    "hint": "The Betrayal by Judas — Qua die et cur Judas vendidit Dominum"
  },
  {
    "id": "the-charitable-warning-of-the-traitor",
    "file": "deel3-LV",
    "part": "II",
    "chapter": "LV",
    "theme": "The Passion",
    "lens": "Compassion",
    "emotions": [
      "sorrow",
      "love",
      "gravity"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Charitable Warning of the Traitor — De caritativa correctione proditoris et egressu ejus"
  },
  {
    "id": "the-lord-s-discourse-and-prayer-at-the-s",
    "file": "deel3-LVII",
    "part": "II",
    "chapter": "LVII",
    "theme": "The Passion",
    "lens": "Receiving",
    "emotions": [
      "love",
      "comfort",
      "longing"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Lord's Discourse and Prayer at the Supper — De sermone et oratione Domini in cœna"
  },
  {
    "id": "the-temple-tax-and-the-question-of-great",
    "file": "deel3-V",
    "part": "II",
    "chapter": "V",
    "theme": "Calling & Discipleship",
    "lens": "Awakening",
    "emotions": [
      "humility",
      "trust",
      "gravity"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Temple Tax and the Question of Greatness — De tributo pro Domino et Petro soluto, et de quæstione discipulorum super majoritate eorum"
  },
  {
    "id": "against-scandalising-the-little-ones",
    "file": "deel3-VI",
    "part": "II",
    "chapter": "VI",
    "theme": "Calling & Discipleship",
    "lens": "Awakening",
    "emotions": [
      "humility",
      "love",
      "gravity"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Against Scandalising the Little Ones — De pusillis et parvulis non scandalizandis exterius, et non contemnendis interius"
  },
  {
    "id": "fraternal-correction-and-boundless-forgi",
    "file": "deel3-VIII",
    "part": "II",
    "chapter": "VIII",
    "theme": "Calling & Discipleship",
    "lens": "Awakening",
    "emotions": [
      "love",
      "humility",
      "comfort"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Fraternal Correction and Boundless Forgiveness — De modo correptionis fraternæ, et de dimittendo fratri septuagies septies"
  },
  {
    "id": "on-marriage-and-the-children-brought-to-",
    "file": "deel3-X",
    "part": "II",
    "chapter": "X",
    "theme": "Calling & Discipleship",
    "lens": "Receiving",
    "emotions": [
      "love",
      "humility",
      "joy"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "On Marriage and the Children Brought to the Lord — De causa dimittendi uxorem, et de parvulis Domino oblatis"
  },
  {
    "id": "the-perfection-of-poverty",
    "file": "deel3-XI",
    "part": "II",
    "chapter": "XI",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "humility",
      "longing",
      "courage"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Perfection of Poverty — De perfectione paupertatis"
  },
  {
    "id": "the-twelve-evangelical-counsels",
    "file": "deel3-XII",
    "part": "II",
    "chapter": "XII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "longing",
      "courage",
      "love"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Twelve Evangelical Counsels — De duodecim consiliis Evangelicis"
  },
  {
    "id": "the-reward-of-those-who-leave-all",
    "file": "deel3-XIII",
    "part": "II",
    "chapter": "XIII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "hope",
      "courage",
      "trust"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Reward of Those Who Leave All — De difficultate et impossibilitate intrandi divitem in regnum cœlorum, et de præmio relinquentium omnia et sequentium Christum"
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
