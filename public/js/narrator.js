/* Vita Christi — read-aloud narrator via the browser's built-in Web Speech API.
   Free, no backend. Reads movement lines in sequence; fires onLine to sync reveal. */
const Narrator = (() => {
  const synth = window.speechSynthesis || null;
  let enabled = localStorage.getItem('vc-voice') === '1';
  let voiceURI = localStorage.getItem('vc-voiceURI') || '';
  let rate = parseFloat(localStorage.getItem('vc-rate') || '0.9');
  let voices = [];
  let cancelled = false;

  function loadVoices() {
    if (!synth) return;
    const all = synth.getVoices();
    voices = all.filter(v => /^en(-|_)/i.test(v.lang));
    if (!voices.length) voices = all;
  }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  function pickVoice() {
    if (!voices.length) loadVoices();
    return voices.find(v => v.voiceURI === voiceURI)
      || voices.find(v => /Serena|Samantha|Moira|Daniel|Arthur|Tessa|Karen|female/i.test(v.name))
      || voices[0] || null;
  }

  function clean(s) {
    return s.replace(/[—–]/g, ', ').replace(/[✝☩☵]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // texts: array of strings. opts.onLine(i) before each line, opts.onDone()
  function speak(texts, opts = {}) {
    if (!synth || !enabled) { if (opts.onDone) opts.onDone(); return false; }
    cancel(); cancelled = false;
    const v = pickVoice();
    let i = 0;
    const next = () => {
      if (cancelled) return;
      if (i >= texts.length) { if (opts.onDone) opts.onDone(); return; }
      const txt = clean(texts[i]);
      if (opts.onLine) opts.onLine(i);
      if (!txt) { i++; return next(); }
      const u = new SpeechSynthesisUtterance(txt);
      if (v) u.voice = v;
      u.rate = rate; u.pitch = 0.96; u.volume = 1;
      u.onend = () => { i++; next(); };
      u.onerror = () => { i++; next(); };
      synth.speak(u);
    };
    next();
    return true;
  }
  function cancel() { cancelled = true; if (synth) try { synth.cancel(); } catch (e) {} }

  function toggle() { enabled = !enabled; localStorage.setItem('vc-voice', enabled ? '1' : '0'); if (!enabled) cancel(); return enabled; }
  const isEnabled = () => enabled;
  const isSupported = () => !!synth;
  function setVoice(uri) { voiceURI = uri; localStorage.setItem('vc-voiceURI', uri); }
  function setRate(r) { rate = r; localStorage.setItem('vc-rate', String(r)); }
  const getRate = () => rate;
  function list() { if (!voices.length) loadVoices(); return voices.map(v => ({ uri: v.voiceURI, name: v.name, lang: v.lang })); }
  const currentVoice = () => voiceURI;

  return { speak, cancel, toggle, isEnabled, isSupported, setVoice, setRate, getRate, list, currentVoice };
})();
