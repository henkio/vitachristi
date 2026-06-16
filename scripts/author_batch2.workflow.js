export const meta = {
  name: 'vitachristi-author-batch2',
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
    "id": "the-presentation-in-the-temple",
    "file": "deel1-XII",
    "part": "I",
    "chapter": "XII",
    "theme": "Nativity",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "hope",
      "humility"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Presentation in the Temple — De Præsentatione Domini in Templum"
  },
  {
    "id": "the-flight-into-egypt-and-the-holy-innoc",
    "file": "deel1-XIII",
    "part": "I",
    "chapter": "XIII",
    "theme": "Hidden Life",
    "lens": "Compassion",
    "emotions": [
      "sorrow",
      "fear",
      "trust"
    ],
    "journeys": [
      "humility",
      "storm",
      "daily"
    ],
    "hint": "The Flight into Egypt and the Holy Innocents — De fuga Domini in Egyptum, et nece Innocentium"
  },
  {
    "id": "the-baptism-of-the-lord",
    "file": "deel1-XXI",
    "part": "I",
    "chapter": "XXI",
    "theme": "Baptism & Temptation",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "humility",
      "joy"
    ],
    "journeys": [
      "temptation",
      "daily"
    ],
    "hint": "The Baptism of the Lord — De Baptismo Domini"
  },
  {
    "id": "the-first-calling-of-the-disciples",
    "file": "deel1-XXIV",
    "part": "I",
    "chapter": "XXIV",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "hope",
      "joy",
      "trust"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The First Calling of the Disciples — De novo testimonio Joannis de Christo, ac de prima discipulorum vocatione, et occulta Christi prædicatione"
  },
  {
    "id": "the-calling-of-matthew-and-his-feast",
    "file": "deel1-XXXI",
    "part": "I",
    "chapter": "XXXI",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "joy",
      "repentance",
      "love"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Calling of Matthew and His Feast — De vocatione Matthæi et ejus convivio"
  },
  {
    "id": "the-choosing-of-the-twelve-apostles",
    "file": "deel1-XXXII",
    "part": "I",
    "chapter": "XXXII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "hope",
      "trust",
      "gravity"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Choosing of the Twelve Apostles — De electione duodecim Apostolorum"
  },
  {
    "id": "light-to-the-world-and-the-law-fulfilled",
    "file": "deel1-XXXIV",
    "part": "I",
    "chapter": "XXXIV",
    "theme": "Sermon on the Mount",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "courage",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Light to the World and the Law Fulfilled — Sermonis in monte continuatio : Quod Prælati debent lucere opere et sermone, et quod Christus non venit Legem solvere, sed implere"
  },
  {
    "id": "patience-and-generosity-toward-our-neigh",
    "file": "deel1-XXXV",
    "part": "I",
    "chapter": "XXXV",
    "theme": "Sermon on the Mount",
    "lens": "Awakening",
    "emotions": [
      "love",
      "humility",
      "comfort"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Patience and Generosity Toward Our Neighbour — Sermonis in monte continuatio : De patientia et largitate circa proximum exhibenda"
  },
  {
    "id": "treasure-in-heaven-not-on-earth",
    "file": "deel1-XXXVIII",
    "part": "I",
    "chapter": "XXXVIII",
    "theme": "Sermon on the Mount",
    "lens": "Awakening",
    "emotions": [
      "longing",
      "trust",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Treasure in Heaven, Not on Earth — Sermonis in monte continuatio : De non thesaurizando in terra, sed in cælo"
  },
  {
    "id": "mercy-not-judging-and-confidence-in-pray",
    "file": "deel1-XXXIX",
    "part": "I",
    "chapter": "XXXIX",
    "theme": "Sermon on the Mount",
    "lens": "Awakening",
    "emotions": [
      "love",
      "trust",
      "comfort"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Mercy, Not Judging, and Confidence in Prayer — Sermonis in monte continuatio : De misericordia facienda, de non judicando, ac de fiducia orationis"
  },
  {
    "id": "the-narrow-way-and-the-sermon-s-close",
    "file": "deel1-XL",
    "part": "I",
    "chapter": "XL",
    "theme": "Sermon on the Mount",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "courage",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Narrow Way and the Sermon's Close — De arcta via, etc., et conclusione sermonis Domini in monte"
  },
  {
    "id": "the-healing-of-the-leper",
    "file": "deel1-XLI",
    "part": "I",
    "chapter": "XLI",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "compassion",
      "wonder",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Healing of the Leper — De curatione leprosi"
  },
  {
    "id": "the-centurion-s-paralysed-servant",
    "file": "deel1-XLII",
    "part": "I",
    "chapter": "XLII",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "trust",
      "wonder",
      "humility"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Centurion's Paralysed Servant — De servo Centurionis paralytico"
  },
  {
    "id": "the-demoniac-and-peter-s-mother-in-law",
    "file": "deel1-XLIII",
    "part": "I",
    "chapter": "XLIII",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "wonder",
      "comfort",
      "gratitude"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Demoniac and Peter's Mother-in-Law — De curatione dæmoniaci, et de socru Petri"
  },
  {
    "id": "the-paralytic-lowered-through-the-roof",
    "file": "deel2-XLVIII",
    "part": "I",
    "chapter": "XLVIII",
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
    "hint": "The Paralytic Lowered Through the Roof — De curatione paralytici per tectum dimissi"
  },
  {
    "id": "the-woman-with-the-issue-and-jairus-daug",
    "file": "deel2-XLIX",
    "part": "I",
    "chapter": "XLIX",
    "theme": "Miracles",
    "lens": "Receiving",
    "emotions": [
      "trust",
      "hope",
      "wonder"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Woman with the Issue and Jairus' Daughter — De hæmorrhoica et Archisynagogi filia"
  },
  {
    "id": "the-feeding-of-the-five-thousand",
    "file": "deel2-LXVII",
    "part": "I",
    "chapter": "LXVII",
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
    "hint": "The Feeding of the Five Thousand — De refectione quinque millium hominum"
  },
  {
    "id": "the-man-born-blind",
    "file": "deel2-LXXXV",
    "part": "I",
    "chapter": "LXXXV",
    "theme": "Miracles",
    "lens": "Awakening",
    "emotions": [
      "wonder",
      "joy",
      "gratitude"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Man Born Blind — De cæco a nativitate illuminato"
  },
  {
    "id": "the-good-shepherd",
    "file": "deel2-LXXXVI",
    "part": "I",
    "chapter": "LXXXVI",
    "theme": "Parables",
    "lens": "Receiving",
    "emotions": [
      "comfort",
      "love",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Good Shepherd — De pastore ovium"
  },
  {
    "id": "the-good-samaritan",
    "file": "deel2-LIX",
    "part": "I",
    "chapter": "LIX",
    "theme": "Parables",
    "lens": "Compassion",
    "emotions": [
      "love",
      "compassion",
      "comfort"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Good Samaritan — De homine sauciato et vulnerato a latronibus"
  },
  {
    "id": "the-transfiguration-of-the-lord",
    "file": "deel3-III",
    "part": "II",
    "chapter": "III",
    "theme": "Miracles",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "joy",
      "longing"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Transfiguration of the Lord — De transfiguratione Domini"
  },
  {
    "id": "the-lost-sheep-the-lost-coin-and-the-pro",
    "file": "deel3-VII",
    "part": "II",
    "chapter": "VII",
    "theme": "Parables",
    "lens": "Receiving",
    "emotions": [
      "joy",
      "repentance",
      "love"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Lost Sheep, the Lost Coin, and the Prodigal Son — De tribus parabolis, scilicet : ovis, et drachmæ, et filii prodigi"
  },
  {
    "id": "the-rich-man-and-lazarus",
    "file": "deel3-XVI",
    "part": "II",
    "chapter": "XVI",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "compassion",
      "fear"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Rich Man and Lazarus — De divite epulone et Lazaro mendico ad januam ejus jacente"
  },
  {
    "id": "zacchaeus-and-his-feast",
    "file": "deel3-XXIII",
    "part": "II",
    "chapter": "XXIII",
    "theme": "Calling & Discipleship",
    "lens": "Receiving",
    "emotions": [
      "joy",
      "repentance",
      "gratitude"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Zacchaeus and His Feast — De Zachæo et ejus convivio"
  },
  {
    "id": "the-entry-into-jerusalem-on-palm-sunday",
    "file": "deel3-XXVII",
    "part": "II",
    "chapter": "XXVII",
    "theme": "The Passion",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "wonder",
      "hope"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Entry into Jerusalem on Palm Sunday — De gloriosa Domini susceptione, ipsa die Palmarum"
  },
  {
    "id": "the-lord-s-weeping-over-jerusalem",
    "file": "deel3-XXVIII",
    "part": "II",
    "chapter": "XXVIII",
    "theme": "The Passion",
    "lens": "Compassion",
    "emotions": [
      "sorrow",
      "love",
      "longing"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Lord's Weeping over Jerusalem — De fletu Domini super Jerusalem et ingressu in eam"
  },
  {
    "id": "the-coming-of-christ-the-judge",
    "file": "deel3-XLIII",
    "part": "II",
    "chapter": "XLIII",
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
    "hint": "The Coming of Christ the Judge — De adventu Christi Judicis"
  },
  {
    "id": "the-ten-virgins",
    "file": "deel3-XLVIII",
    "part": "II",
    "chapter": "XLVIII",
    "theme": "The Last Things",
    "lens": "Awakening",
    "emotions": [
      "longing",
      "hope",
      "gravity"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Ten Virgins — De decem virginibus"
  },
  {
    "id": "meditation-at-the-first-vespers-of-the-s",
    "file": "deel3-LIII",
    "part": "II",
    "chapter": "LIII",
    "theme": "The Passion",
    "lens": "Beholding",
    "emotions": [
      "love",
      "sorrow",
      "longing"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "Meditation at the First Vespers of the Supper — Meditatio in primis vesperis de cœna Domini"
  },
  {
    "id": "the-institution-of-the-eucharist",
    "file": "deel3-LVI",
    "part": "II",
    "chapter": "LVI",
    "theme": "The Passion",
    "lens": "Receiving",
    "emotions": [
      "love",
      "gratitude",
      "wonder"
    ],
    "journeys": [
      "passion",
      "daily"
    ],
    "hint": "The Institution of the Eucharist — De institutione sacramenti Eucharistiæ"
  },
  {
    "id": "the-women-and-disciples-at-the-tomb",
    "file": "deel4-LXXI",
    "part": "II",
    "chapter": "LXXI",
    "theme": "Resurrection",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "hope",
      "longing"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Women and Disciples at the Tomb — Quomodo Maria Magdalena et aliæ Mariæ, et Petrus et Joannes venerunt ad monumentum"
  },
  {
    "id": "the-lord-appears-in-galilee-to-the-eleve",
    "file": "deel4-LXXX",
    "part": "II",
    "chapter": "LXXX",
    "theme": "Resurrection",
    "lens": "Following",
    "emotions": [
      "joy",
      "wonder",
      "courage"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Lord Appears in Galilee to the Eleven and Five Hundred — Quomodo Dominus apparuit undecim discipulis in Galilæa, et etiam quingentis fratribus"
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
