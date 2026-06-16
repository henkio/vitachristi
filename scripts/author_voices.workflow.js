export const meta = {
  name: 'vitachristi-author-voices',
  description: 'First-person "Voices" meditations — a scene through the eyes of a witness, grounded in Ludolph',
  phases: [ { title: 'Author' }, { title: 'Verify' } ],
}
const DIR = '/Users/henkwolbers/Desktop/Vita/vitachristi/chapters-trimmed'

const VOICES = [
  { id:'voice-mary-annunciation', file:'deel1-V',   character:'Mary', scene:'The angel’s word', gospelRef:'Luke 1:26–38', theme:'Incarnation', emotions:['awe','humility','joy'] },
  { id:'voice-shepherd',          file:'deel1-IX',  character:'A shepherd of Bethlehem', scene:'The night the sky opened', gospelRef:'Luke 2:8–16', theme:'Nativity', emotions:['wonder','fear','joy'] },
  { id:'voice-magus',             file:'deel1-XI',  character:'One of the Magi', scene:'We followed a star', gospelRef:'Matthew 2:1–11', theme:'Nativity', emotions:['longing','wonder','joy'] },
  { id:'voice-joseph-flight',     file:'deel1-XIII',character:'Joseph', scene:'I took the child by night', gospelRef:'Matthew 2:13–14', theme:'Hidden Life', emotions:['fear','trust','love'] },
  { id:'voice-magdalene',         file:'deel4-LXXII',character:'Mary Magdalene', scene:'I came while it was still dark', gospelRef:'John 20:11–18', theme:'Resurrection', emotions:['longing','sorrow','joy'] },
  { id:'voice-thomas',            file:'deel4-LXXVIII',character:'Thomas', scene:'Unless I touch', gospelRef:'John 20:24–29', theme:'Resurrection', emotions:['trust','wonder','love'] },
  { id:'voice-mary-cross',        file:'deel4-LXIV',character:'Mary, the Mother', scene:'I stood by the cross', gospelRef:'John 19:25–27', theme:'The Passion', emotions:['sorrow','love','courage'] },
  { id:'voice-centurion',         file:'deel4-LXIV',character:'The centurion', scene:'Truly this was the Son of God', gospelRef:'Matthew 27:54', theme:'The Passion', emotions:['fear','wonder','repentance'] },
]

const SCHEMA = {
  type:'object',
  required:['title','narration','prayer','latinJewel'],
  properties:{
    title:{type:'string', description:'Short evocative title for this voice'},
    durationMin:{type:'integer'},
    narration:{type:'array', items:{type:'string'}, description:'FIRST-PERSON witness narration, as this character, present tense. Every concrete detail (who, where, what happens, what is said) must come from Ludolph’s text for this scene. The inner feeling may be drawn out — Ludolph himself invites this imaginative entering — but invent no events and no theology he does not give. Short lines, one beat each. Keep his intensity.'},
    prayer:{type:'array', items:{type:'string'}, description:'A short closing prayer in the reader’s own voice, turning the scene Godward. Draw on the chapter’s Oratio where possible.'},
    latinJewel:{type:'object', required:['latin','english'], properties:{latin:{type:'string'},english:{type:'string'}}},
  }
}
const VERIFY = { type:'object', required:['faithful','issues'], properties:{
  faithful:{type:'boolean'}, voicePreserved:{type:'boolean'},
  issues:{type:'array', items:{type:'string'}, description:'invented events/theology, anachronism, softened tone'} } }

function prompt(v){
  return `You are writing a "Voices" meditation for the Vita Christi app — a scene from the life of Christ told in the FIRST PERSON, through the eyes of a witness, grounded entirely in Ludolph of Saxony's text.

Read the Latin source:  ${DIR}/${v.file}.txt
Scene: "${v.scene}" (${v.gospelRef}). Speak as: ${v.character}.

Ludolph's own preface permits this: he tells the life "according to certain imaginative representations," bidding the reader be present "as if you saw it with your own eyes." So enter the scene as ${v.character} — but every fact (what happens, what is said, who is there, the place, the details) must come from Ludolph's narrative of THIS chapter. Draw out the inner experience; invent no new events and no theology he does not give. Keep his intensity — do not soften into wellness language. Write present-tense, short lines. End with a short prayer in the reader's own voice (lean on the chapter's Oratio). latinJewel = one real Latin line from the source + English. Return the structured object only.`
}

phase('Author')
const out = await pipeline(
  VOICES,
  v => agent(prompt(v), { label:`voice:${v.character}`, phase:'Author', schema:SCHEMA }).then(s => s ? {...v, session:s} : null),
  (a, v) => a ? agent(`Source: ${DIR}/${v.file}.txt (Ludolph, ${v.scene}). A first-person meditation as ${v.character} was derived from it:\n\n${JSON.stringify(a.session,null,2)}\n\nRead the source. Does it invent events or theology beyond Ludolph? Is his intensity kept? List concrete issues.`, { label:`verify:${v.id}`, phase:'Verify', schema:VERIFY }).then(verdict => ({...a, verdict})) : null
)
const ok = out.filter(Boolean)
log(`Authored ${ok.length}/${VOICES.length} voices`)
return ok
