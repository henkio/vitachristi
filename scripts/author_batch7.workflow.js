export const meta = {
  name: 'vitachristi-author-batch7',
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
    "id": "the-labourers-in-the-vineyard",
    "file": "deel3-XIV",
    "part": "II",
    "chapter": "XIV",
    "theme": "Parables",
    "lens": "Receiving",
    "emotions": [
      "gratitude",
      "humility",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Labourers in the Vineyard — De denario diurno"
  },
  {
    "id": "the-ten-lepers-cleansed",
    "file": "deel3-XIX",
    "part": "II",
    "chapter": "XIX",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "gratitude",
      "wonder",
      "joy"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Ten Lepers Cleansed — De decem leprosis a Domino curatis"
  },
  {
    "id": "the-coming-and-persecution-of-antichrist",
    "file": "deel3-XL",
    "part": "II",
    "chapter": "XL",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "fear",
      "courage",
      "trust"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Coming and Persecution of Antichrist — De adventu et persecutione Antichristi"
  },
  {
    "id": "remedies-against-the-temptations-of-the-",
    "file": "deel3-XLI",
    "part": "II",
    "chapter": "XLI",
    "theme": "The Last Things",
    "lens": "Receiving",
    "emotions": [
      "courage",
      "trust",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Remedies Against the Temptations of the Last Times — De remediis contra spirituales novissimi temporis tentationes, et de exercitio mentis in Deum"
  },
  {
    "id": "watching-and-praying-for-the-lord-s-comi",
    "file": "deel3-XLII",
    "part": "II",
    "chapter": "XLII",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "hope",
      "longing",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Watching and Praying for the Lord's Coming — De orando et exspectando adventum Domini, et de posterioribus signis adventus ejus, et consummationis seculi"
  },
  {
    "id": "the-consolation-of-the-elect-and-the-fig",
    "file": "deel3-XLIV",
    "part": "II",
    "chapter": "XLIV",
    "theme": "The Last Things",
    "lens": "Receiving",
    "emotions": [
      "comfort",
      "hope",
      "joy"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Consolation of the Elect and the Fig Tree — De electorum consolatione ex appropinquante redemptione et de similitudine ficulneæ"
  },
  {
    "id": "the-parable-of-the-talents",
    "file": "deel3-XLIX",
    "part": "II",
    "chapter": "XLIX",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "courage",
      "trust",
      "gravity"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Parable of the Talents — De talentis et bonis a Domino servis traditis"
  },
  {
    "id": "the-day-of-the-lord-coming-suddenly",
    "file": "deel3-XLV",
    "part": "II",
    "chapter": "XLV",
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
    "hint": "The Day of the Lord Coming Suddenly — De die Domini juxta exemplum Noe, vel Loth subito venturo, ac de uno assumpto et alio relicto"
  },
  {
    "id": "the-watchful-householder",
    "file": "deel3-XLVI",
    "part": "II",
    "chapter": "XLVI",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "courage",
      "trust",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Watchful Householder — De vigilia patrisfamilias custodientis contra furem domum suam"
  },
  {
    "id": "loins-girded-and-lamps-burning",
    "file": "deel3-XLVII",
    "part": "II",
    "chapter": "XLVII",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "hope",
      "longing",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Loins Girded and Lamps Burning — De lumbis præcinctis et lucernis ardentibus"
  },
  {
    "id": "the-unjust-steward",
    "file": "deel3-XV",
    "part": "II",
    "chapter": "XV",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "longing",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Unjust Steward — De villico iniquitatis"
  },
  {
    "id": "the-plot-against-jesus",
    "file": "deel3-XVIII",
    "part": "II",
    "chapter": "XVIII",
    "theme": "Conflict & Opposition",
    "lens": "Beholding",
    "emotions": [
      "sorrow",
      "gravity",
      "fear"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Plot Against Jesus — De conspiratione Pontificum et Pharisæorum contra Jesum"
  },
  {
    "id": "the-samaritans-who-refused-him-welcome",
    "file": "deel3-XX",
    "part": "II",
    "chapter": "XX",
    "theme": "Conflict & Opposition",
    "lens": "Following",
    "emotions": [
      "sorrow",
      "humility",
      "love"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Samaritans Who Refused Him Welcome — De Samaritanis hospitium Domino negantibus"
  },
  {
    "id": "the-request-of-the-sons-of-zebedee",
    "file": "deel3-XXI",
    "part": "II",
    "chapter": "XXI",
    "theme": "Calling & Discipleship",
    "lens": "Awakening",
    "emotions": [
      "humility",
      "gravity",
      "love"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Request of the Sons of Zebedee — De petitione filiorum Zebedæi"
  },
  {
    "id": "the-blind-man-healed-before-jericho",
    "file": "deel3-XXII",
    "part": "II",
    "chapter": "XXII",
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
    "hint": "The Blind Man Healed Before Jericho — De uno cæco ante ingressum Jericho illuminato"
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
