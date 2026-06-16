export const meta = {
  name: 'vitachristi-author-batch5',
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
    "id": "the-rebuke-of-the-pharisees-and-lawyers",
    "file": "deel2-LXXVI",
    "part": "I",
    "chapter": "LXXVI",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "repentance",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Rebuke of the Pharisees and Lawyers — De increpatione Pharisæorum et Legisperitorum"
  },
  {
    "id": "the-healing-at-the-pool-of-bethesda",
    "file": "deel2-LXXVIII",
    "part": "I",
    "chapter": "LXXVIII",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "hope",
      "wonder",
      "gratitude"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Healing at the Pool of Bethesda — De probatica piscina et paralytico"
  },
  {
    "id": "the-man-with-dropsy-and-the-call-to-humi",
    "file": "deel2-LXXX",
    "part": "I",
    "chapter": "LXXX",
    "theme": "Miracles",
    "lens": "Awakening",
    "emotions": [
      "humility",
      "compassion",
      "wonder"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Man with Dropsy and the Call to Humility — De hydropico et exhortatione ad humilitatem et misericordiam"
  },
  {
    "id": "the-parable-of-the-great-supper",
    "file": "deel2-LXXXI",
    "part": "I",
    "chapter": "LXXXI",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "longing",
      "hope",
      "love"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Parable of the Great Supper — De invitatis ad cœnam magnam"
  },
  {
    "id": "at-the-feast-of-tabernacles",
    "file": "deel2-LXXXII",
    "part": "I",
    "chapter": "LXXXII",
    "theme": "Conflict & Opposition",
    "lens": "Beholding",
    "emotions": [
      "longing",
      "gravity",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "At the Feast of Tabernacles — De Scenopegia festivitate Judæorum"
  },
  {
    "id": "the-woman-taken-in-adultery",
    "file": "deel2-LXXXIII",
    "part": "I",
    "chapter": "LXXXIII",
    "theme": "Conflict & Opposition",
    "lens": "Compassion",
    "emotions": [
      "compassion",
      "repentance",
      "comfort"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Woman Taken in Adultery — De muliere in adulterio deprehensa"
  },
  {
    "id": "the-words-for-which-they-sought-to-stone",
    "file": "deel2-LXXXIV",
    "part": "I",
    "chapter": "LXXXIV",
    "theme": "Conflict & Opposition",
    "lens": "Beholding",
    "emotions": [
      "gravity",
      "courage",
      "wonder"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Words for Which They Sought to Stone Him — De quibusdam verbis Domini, pro quibus volebant eum Judæi lapidare"
  },
  {
    "id": "the-canaanite-woman-and-her-daughter",
    "file": "deel2-LXXXIX",
    "part": "I",
    "chapter": "LXXXIX",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "trust",
      "humility",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Canaanite Woman and Her Daughter — De muliere Chananæa et ejus filia"
  },
  {
    "id": "at-the-feast-of-dedication",
    "file": "deel2-LXXXVII",
    "part": "I",
    "chapter": "LXXXVII",
    "theme": "Conflict & Opposition",
    "lens": "Beholding",
    "emotions": [
      "gravity",
      "courage",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "At the Feast of Dedication — De encæniis, in quibus voluerunt Judæi Jesum lapidare"
  },
  {
    "id": "the-traditions-of-the-pharisees",
    "file": "deel2-LXXXVIII",
    "part": "I",
    "chapter": "LXXXVIII",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "repentance",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Traditions of the Pharisees — De traditionibus Pharisæorum, etiam contra Dei mandatum"
  },
  {
    "id": "the-deaf-and-mute-man-healed",
    "file": "deel2-XC",
    "part": "I",
    "chapter": "XC",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "wonder",
      "gratitude",
      "comfort"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Deaf and Mute Man Healed — De surdo et muto a dæmone possesso"
  },
  {
    "id": "the-feeding-of-the-four-thousand",
    "file": "deel2-XCI",
    "part": "I",
    "chapter": "XCI",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "wonder",
      "gratitude",
      "joy"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Feeding of the Four Thousand — De refectione quatuor millium hominum"
  },
  {
    "id": "the-leaven-of-the-pharisees-and-the-blin",
    "file": "deel2-XCII",
    "part": "I",
    "chapter": "XCII",
    "theme": "Miracles",
    "lens": "Awakening",
    "emotions": [
      "wonder",
      "gravity",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Leaven of the Pharisees and the Blind Man of Bethsaida — De fermento cavendo et cæco Bethsaidæ illuminato"
  },
  {
    "id": "the-cost-of-following-christ",
    "file": "deel2-XLV",
    "part": "I",
    "chapter": "XLV",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "courage",
      "gravity",
      "longing"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Cost of Following Christ — De Scriba doloso, et duobus aliis Christum sequi volentibus"
  },
  {
    "id": "the-gerasene-demoniacs",
    "file": "deel2-XLVII",
    "part": "I",
    "chapter": "XLVII",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "wonder",
      "fear",
      "comfort"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Gerasene Demoniacs — De duobus dæmoniacis a Legione obsessis"
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
