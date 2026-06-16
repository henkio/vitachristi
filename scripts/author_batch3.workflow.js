export const meta = {
  name: 'vitachristi-author-batch3',
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
    "id": "the-eternal-generation-of-the-son",
    "file": "deel1-I",
    "part": "I",
    "chapter": "I",
    "theme": "Incarnation",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "humility",
      "love"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Eternal Generation of the Son — De divina et æterna Christi generatione"
  },
  {
    "id": "the-remedy-for-mankind-and-the-birth-of-",
    "file": "deel1-II",
    "part": "I",
    "chapter": "II",
    "theme": "Incarnation",
    "lens": "Beholding",
    "emotions": [
      "hope",
      "wonder",
      "gratitude"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Remedy for Mankind and the Birth of the Virgin — De inventione remedii pro salvatione generis humani, et nativitate B. Virginis Mariæ"
  },
  {
    "id": "the-conception-of-the-forerunner",
    "file": "deel1-IV",
    "part": "I",
    "chapter": "IV",
    "theme": "Incarnation",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "joy",
      "hope"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Conception of the Forerunner — De conceptione Joannis Præcursoris"
  },
  {
    "id": "the-birth-and-circumcision-of-the-foreru",
    "file": "deel1-VI",
    "part": "I",
    "chapter": "VI",
    "theme": "Nativity",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "wonder",
      "gratitude"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Birth and Circumcision of the Forerunner — De Nativitate et Circumcisione Præcursoris Domini"
  },
  {
    "id": "the-genealogy-of-the-saviour",
    "file": "deel1-VII",
    "part": "I",
    "chapter": "VII",
    "theme": "Incarnation",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "gravity",
      "hope"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Genealogy of the Saviour — De genealogia Salvatoris"
  },
  {
    "id": "joseph-resolves-to-send-mary-away",
    "file": "deel1-VIII",
    "part": "I",
    "chapter": "VIII",
    "theme": "Incarnation",
    "lens": "Beholding",
    "emotions": [
      "sorrow",
      "trust",
      "humility"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Joseph Resolves to Send Mary Away — De eo quod Joseph voluit dimittere Mariam"
  },
  {
    "id": "the-circumcision-of-the-lord",
    "file": "deel1-X",
    "part": "I",
    "chapter": "X",
    "theme": "Nativity",
    "lens": "Beholding",
    "emotions": [
      "humility",
      "love",
      "gravity"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Circumcision of the Lord — De Circumcisione Domini"
  },
  {
    "id": "the-return-from-egypt-and-john-s-penance",
    "file": "deel1-XIV",
    "part": "I",
    "chapter": "XIV",
    "theme": "Hidden Life",
    "lens": "Following",
    "emotions": [
      "hope",
      "repentance",
      "trust"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Return from Egypt and John's Penance — De reditu Domini ex Egypto, et initio pænitentiæ Joannis-Baptistæ"
  },
  {
    "id": "john-s-witness-as-forerunner",
    "file": "deel1-XIX",
    "part": "I",
    "chapter": "XIX",
    "theme": "Baptism & Temptation",
    "lens": "Beholding",
    "emotions": [
      "humility",
      "hope",
      "gravity"
    ],
    "journeys": [
      "temptation",
      "daily"
    ],
    "hint": "John's Witness as Forerunner — De eo quod Joannes confessus est se non esse Christum, sed ejus præcursorem et nuntium"
  },
  {
    "id": "the-hidden-years-of-the-lord",
    "file": "deel1-XVI",
    "part": "I",
    "chapter": "XVI",
    "theme": "Hidden Life",
    "lens": "Beholding",
    "emotions": [
      "humility",
      "rest",
      "love"
    ],
    "journeys": [
      "humility",
      "storm",
      "daily"
    ],
    "hint": "The Hidden Years of the Lord — Quid fecerit Dominus Jesus ab anno duodecimo, usque ad principium anni trigesimi"
  },
  {
    "id": "the-office-and-life-of-john-the-baptist",
    "file": "deel1-XVII",
    "part": "I",
    "chapter": "XVII",
    "theme": "Baptism & Temptation",
    "lens": "Following",
    "emotions": [
      "repentance",
      "gravity",
      "hope"
    ],
    "journeys": [
      "temptation",
      "daily"
    ],
    "hint": "The Office and Life of John the Baptist — De officio et vita Joannis-Baptistæ"
  },
  {
    "id": "john-sent-forth-by-god",
    "file": "deel1-XVIII",
    "part": "I",
    "chapter": "XVIII",
    "theme": "Baptism & Temptation",
    "lens": "Following",
    "emotions": [
      "humility",
      "trust",
      "gravity"
    ],
    "journeys": [
      "temptation",
      "daily"
    ],
    "hint": "John Sent Forth by God — De eo quod Joannes non per seipsum, sed a Deo missus venit ad publicum"
  },
  {
    "id": "the-call-to-repentance",
    "file": "deel1-XX",
    "part": "I",
    "chapter": "XX",
    "theme": "Baptism & Temptation",
    "lens": "Awakening",
    "emotions": [
      "repentance",
      "gravity",
      "hope"
    ],
    "journeys": [
      "temptation",
      "daily"
    ],
    "hint": "The Call to Repentance — De pænitentia facienda"
  },
  {
    "id": "john-s-witness-to-the-lamb-of-god",
    "file": "deel1-XXIII",
    "part": "I",
    "chapter": "XXIII",
    "theme": "Baptism & Temptation",
    "lens": "Beholding",
    "emotions": [
      "wonder",
      "hope",
      "love"
    ],
    "journeys": [
      "temptation",
      "daily"
    ],
    "hint": "John's Witness to the Lamb of God — De testimonio Joannis de Christo Dei Agno"
  },
  {
    "id": "the-second-and-third-calling-of-the-disc",
    "file": "deel1-XXIX",
    "part": "I",
    "chapter": "XXIX",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "trust",
      "hope",
      "joy"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Second and Third Calling of the Disciples — De secunda et tertia vocatione discipulorum"
  },
  {
    "id": "the-cleansing-of-the-temple-and-nicodemu",
    "file": "deel1-XXVI",
    "part": "I",
    "chapter": "XXVI",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "courage",
      "hope"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Cleansing of the Temple and Nicodemus — De prima ejectione vendentium de templo, et de Nicodemo"
  },
  {
    "id": "the-imprisonment-of-john-the-baptist",
    "file": "deel1-XXVII",
    "part": "I",
    "chapter": "XXVII",
    "theme": "Conflict & Opposition",
    "lens": "Compassion",
    "emotions": [
      "sorrow",
      "courage",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Imprisonment of John the Baptist — De incarceratione Joannis-Baptistæ"
  },
  {
    "id": "the-beginning-of-the-public-preaching",
    "file": "deel1-XXVIII",
    "part": "I",
    "chapter": "XXVIII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "hope",
      "courage",
      "joy"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Beginning of the Public Preaching — De initio publicæ prædicationis Domini Jesu"
  },
  {
    "id": "the-zeal-of-christ-in-preaching",
    "file": "deel1-XXX",
    "part": "I",
    "chapter": "XXX",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "courage",
      "love",
      "hope"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Zeal of Christ in Preaching — De Epilogo vocationum discipulorum, et de diligentia Christi ad prædicandum"
  },
  {
    "id": "the-two-blind-men-and-the-mute",
    "file": "deel2-L",
    "part": "I",
    "chapter": "L",
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
    "hint": "The Two Blind Men and the Mute — De duobus cæcis et uno muto"
  },
  {
    "id": "the-mission-of-the-apostles",
    "file": "deel2-LI",
    "part": "I",
    "chapter": "LI",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "courage",
      "hope",
      "trust"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Mission of the Apostles — De missione Apostolorum ad prædicandum cum potestate curationum"
  },
  {
    "id": "patience-in-adversity",
    "file": "deel2-LII",
    "part": "I",
    "chapter": "LII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "courage",
      "trust",
      "comfort"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Patience in Adversity — De patientia in adversis habenda"
  },
  {
    "id": "fearless-confession-of-christ",
    "file": "deel2-LIII",
    "part": "I",
    "chapter": "LIII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "courage",
      "trust",
      "hope"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Fearless Confession of Christ — De morte non timenda et Christo confitendo"
  },
  {
    "id": "hindrances-to-following-christ",
    "file": "deel2-LIV",
    "part": "I",
    "chapter": "LIV",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "gravity",
      "longing",
      "courage"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "Hindrances to Following Christ — De quibusdam impedimentis perfectionis et sequelæ Christi"
  },
  {
    "id": "consolation-amid-the-burden-of-precepts",
    "file": "deel2-LV",
    "part": "I",
    "chapter": "LV",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "comfort",
      "rest",
      "trust"
    ],
    "journeys": [
      "storm",
      "humility",
      "daily"
    ],
    "hint": "Consolation Amid the Burden of Precepts — De consolatione discipulorum inter onera præceptorum"
  },
  {
    "id": "john-s-question-and-the-lord-s-praise-of",
    "file": "deel2-LVI",
    "part": "I",
    "chapter": "LVI",
    "theme": "Conflict & Opposition",
    "lens": "Beholding",
    "emotions": [
      "hope",
      "gravity",
      "trust"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "John's Question and the Lord's Praise of Him — De quæstione Joannis Baptistæ et ejus commendatione"
  },
  {
    "id": "the-rebuke-of-the-unbelieving-cities",
    "file": "deel2-LVII",
    "part": "I",
    "chapter": "LVII",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "sorrow",
      "repentance"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Rebuke of the Unbelieving Cities — De increpatione et condemnatione infidelium Judæorum"
  },
  {
    "id": "the-mission-of-the-seventy-two",
    "file": "deel2-LVIII",
    "part": "I",
    "chapter": "LVIII",
    "theme": "Calling & Discipleship",
    "lens": "Following",
    "emotions": [
      "joy",
      "hope",
      "courage"
    ],
    "journeys": [
      "humility",
      "daily"
    ],
    "hint": "The Mission of the Seventy-Two — De reversione Apostolorum, ac missione et reversione septuaginta duorum discipulorum"
  },
  {
    "id": "martha-s-service-and-mary-s-repose",
    "file": "deel2-LXI",
    "part": "I",
    "chapter": "LXI",
    "theme": "Calling & Discipleship",
    "lens": "Receiving",
    "emotions": [
      "rest",
      "love",
      "longing"
    ],
    "journeys": [
      "storm",
      "humility",
      "daily"
    ],
    "hint": "Martha's Service and Mary's Repose — De ministerio Marthæ et otio Mariæ Magdalenæ"
  },
  {
    "id": "the-healing-of-the-official-s-son",
    "file": "deel2-LXIII",
    "part": "I",
    "chapter": "LXIII",
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
    "hint": "The Healing of the Official's Son — De filio Reguli sanato"
  },
  {
    "id": "the-parables-of-the-kingdom",
    "file": "deel2-LXIV",
    "part": "I",
    "chapter": "LXIV",
    "theme": "Parables",
    "lens": "Awakening",
    "emotions": [
      "wonder",
      "hope",
      "longing"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Parables of the Kingdom — De quatuor parabolis Domini ad turbas, et tribus ad discipulos habitis"
  },
  {
    "id": "rejection-at-nazareth",
    "file": "deel2-LXV",
    "part": "I",
    "chapter": "LXV",
    "theme": "Conflict & Opposition",
    "lens": "Beholding",
    "emotions": [
      "sorrow",
      "gravity",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Rejection at Nazareth — De adventu Domini in Nazareth quando legit in synagoga eorum, et ipsi volebant præcipitare eum"
  },
  {
    "id": "the-beheading-of-john-the-baptist",
    "file": "deel2-LXVI",
    "part": "I",
    "chapter": "LXVI",
    "theme": "Conflict & Opposition",
    "lens": "Compassion",
    "emotions": [
      "sorrow",
      "gravity",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Beheading of John the Baptist — De decollatione Joannis Baptistæ"
  },
  {
    "id": "against-ambition-and-the-faults-of-the-c",
    "file": "deel2-LXVIII",
    "part": "I",
    "chapter": "LXVIII",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "humility",
      "gravity",
      "repentance"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Against Ambition and the Faults of the Clergy — De ambitione et quibusdam aliis clericorum et religiosorum defectibus"
  },
  {
    "id": "the-hard-saying-and-the-disciples-who-tu",
    "file": "deel2-LXX",
    "part": "I",
    "chapter": "LXX",
    "theme": "Conflict & Opposition",
    "lens": "Following",
    "emotions": [
      "gravity",
      "trust",
      "sorrow"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Hard Saying and the Disciples Who Turned Back — De verbis Domini, propter quæ quidam retro abierunt"
  },
  {
    "id": "passing-through-the-grainfields",
    "file": "deel2-LXXI",
    "part": "I",
    "chapter": "LXXI",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "trust",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "Passing Through the Grainfields — De transitu Domini et discipulorum per sata"
  },
  {
    "id": "the-man-with-the-withered-hand",
    "file": "deel2-LXXII",
    "part": "I",
    "chapter": "LXXII",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "compassion",
      "wonder",
      "courage"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Man with the Withered Hand — De manco manum aridam habente"
  },
  {
    "id": "the-blind-and-mute-demoniac",
    "file": "deel2-LXXIII",
    "part": "I",
    "chapter": "LXXIII",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "wonder",
      "comfort",
      "gravity"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Blind and Mute Demoniac — De dæmoniaco cæco et muto"
  },
  {
    "id": "the-sign-sought-from-heaven-and-the-uncl",
    "file": "deel2-LXXIV",
    "part": "I",
    "chapter": "LXXIV",
    "theme": "Conflict & Opposition",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "repentance",
      "fear"
    ],
    "journeys": [
      "storm",
      "daily"
    ],
    "hint": "The Sign Sought from Heaven and the Unclean Spirit — De Judæis signum de cœlo quærentibus, et de spiritu immundo olim ejecto ab eis"
  },
  {
    "id": "the-barren-tree-and-the-bent-woman",
    "file": "deel2-LXXIX",
    "part": "I",
    "chapter": "LXXIX",
    "theme": "Miracles",
    "lens": "Compassion",
    "emotions": [
      "compassion",
      "hope",
      "gratitude"
    ],
    "journeys": [
      "daily"
    ],
    "hint": "The Barren Tree and the Bent Woman — De arbore infructuosa et muliere curvata"
  },
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
  },
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
  },
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
  },
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
  },
  {
    "id": "the-lord-appears-to-peter-and-the-holy-f",
    "file": "deel4-LXXV",
    "part": "II",
    "chapter": "LXXV",
    "theme": "Resurrection",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "comfort",
      "hope"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Lord Appears to Peter and the Holy Fathers — Quomodo Dominus apparuit Petro, et Joseph ab Arimathia et Jacobo Minori, ac sanctis Patribus in limbo"
  },
  {
    "id": "the-lord-appears-to-the-apostles-thomas-",
    "file": "deel4-LXXVII",
    "part": "II",
    "chapter": "LXXVII",
    "theme": "Resurrection",
    "lens": "Receiving",
    "emotions": [
      "joy",
      "comfort",
      "trust"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Lord Appears to the Apostles, Thomas Absent — Quomodo Dominus apparuit Apostolis, Thoma absente"
  },
  {
    "id": "epilogue-of-the-resurrection-appearances",
    "file": "deel4-LXXXI",
    "part": "II",
    "chapter": "LXXXI",
    "theme": "Resurrection",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "gratitude",
      "hope"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "Epilogue of the Resurrection Appearances — Epilogus apparitionum Domini post Resurrectionem"
  },
  {
    "id": "the-conclusion-of-the-book",
    "file": "deel4-LXXXIX",
    "part": "II",
    "chapter": "LXXXIX",
    "theme": "Consummation",
    "lens": "Beholding",
    "emotions": [
      "gratitude",
      "rest",
      "hope"
    ],
    "journeys": [
      "risen",
      "storm",
      "daily"
    ],
    "hint": "The Conclusion of the Book — Conclusio libri et signatio ejus"
  },
  {
    "id": "the-praise-of-god",
    "file": "deel4-LXXXV",
    "part": "II",
    "chapter": "LXXXV",
    "theme": "Consummation",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "gratitude",
      "love"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Praise of God — De laude divina"
  },
  {
    "id": "the-assumption-and-praise-of-the-blessed",
    "file": "deel4-LXXXVI",
    "part": "II",
    "chapter": "LXXXVI",
    "theme": "Consummation",
    "lens": "Beholding",
    "emotions": [
      "joy",
      "love",
      "wonder"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Assumption and Praise of the Blessed Virgin — De Assumptione, et laude beatæ Virginis"
  },
  {
    "id": "the-final-judgement",
    "file": "deel4-LXXXVII",
    "part": "II",
    "chapter": "LXXXVII",
    "theme": "Consummation",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "hope",
      "fear"
    ],
    "journeys": [
      "risen",
      "storm",
      "daily"
    ],
    "hint": "The Final Judgement — De finali judicio"
  },
  {
    "id": "the-pains-of-hell-and-the-glory-of-heave",
    "file": "deel4-LXXXVIII",
    "part": "II",
    "chapter": "LXXXVIII",
    "theme": "Consummation",
    "lens": "Awakening",
    "emotions": [
      "gravity",
      "hope",
      "longing"
    ],
    "journeys": [
      "risen",
      "daily"
    ],
    "hint": "The Pains of Hell and the Glory of Heaven — De pæna infernali et gloria cælesti"
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
