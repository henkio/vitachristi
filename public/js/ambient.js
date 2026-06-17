/* Vita Christi — procedural ambient soundscapes (Web Audio, no files).
   10 selectable scapes + "themed" (auto per theme). Subtle, looping. */
const Ambient = (() => {
  let ctx = null, master = null, layers = [], bellTimer = null;
  let muted = localStorage.getItem('vc-muted') === '1';
  let override = localStorage.getItem('vc-scape') || 'themed'; // 'themed' or a scape name
  let lastTheme = 'calm';
  const TARGET = 0.16;

  const SCAPES = ['themed','river','rain','ocean','wind','night','fire','chant','bells','drone','silence'];
  const LABELS = { themed:'Automatic (by theme)', river:'River', rain:'Rain', ocean:'Ocean', wind:'Wind',
    night:'Night', fire:'Candlelight', chant:'Chant', bells:'Distant bells', drone:'Deep drone', silence:'Silence' };

  function ensure() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
  }
  function noiseBuffer(sec = 4, type = 'brown') {
    const len = ctx.sampleRate * sec, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (type === 'white') d[i] = w * 0.6;
      else { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.2; }
    }
    return buf;
  }
  function noiseSource(type) { const s = ctx.createBufferSource(); s.buffer = noiseBuffer(4, type); s.loop = true; return s; }
  function lfo(rate, min, max, param) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.value = rate; g.gain.value = (max - min) / 2;
    o.connect(g).connect(param); param.value = (max + min) / 2; o.start(); return o;
  }
  function filt(type, freq, q) { const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q != null) f.Q.value = q; return f; }

  // ---- layer builders ----
  function water(level, cut = 650) {
    const s = noiseSource('brown'), lp = filt('lowpass', cut, 0.6), g = ctx.createGain(); g.gain.value = level;
    s.connect(lp).connect(g).connect(master);
    const l1 = lfo(0.07, cut * 0.6, cut * 1.35, lp.frequency), l2 = lfo(0.11, level * 0.6, level, g.gain);
    s.start(); return { nodes: [s, l1, l2] };
  }
  function waves(level) { // slow ocean swell
    const s = noiseSource('brown'), lp = filt('lowpass', 500, 0.5), g = ctx.createGain(); g.gain.value = level * 0.3;
    s.connect(lp).connect(g).connect(master);
    const l1 = lfo(0.05, 0.06, level, g.gain), l2 = lfo(0.09, 300, 700, lp.frequency);
    s.start(); return { nodes: [s, l1, l2] };
  }
  function rain(level) {
    const s = noiseSource('white'), hp = filt('highpass', 1200, 0.4), lp = filt('lowpass', 7000), g = ctx.createGain(); g.gain.value = level;
    s.connect(hp); hp.connect(lp).connect(g).connect(master);
    const l = lfo(0.3, level * 0.8, level, g.gain); s.start(); return { nodes: [s, l] };
  }
  function wind(level) {
    const s = noiseSource('brown'), bp = filt('bandpass', 500, 0.7), g = ctx.createGain(); g.gain.value = level;
    s.connect(bp).connect(g).connect(master);
    const l1 = lfo(0.05, 300, 820, bp.frequency), l2 = lfo(0.08, level * 0.4, level, g.gain);
    s.start(); return { nodes: [s, l1, l2] };
  }
  function fire(level) { // warm crackle: low noise + irregular gain flicker
    const s = noiseSource('brown'), lp = filt('lowpass', 380, 1.2), g = ctx.createGain(); g.gain.value = level;
    s.connect(lp).connect(g).connect(master);
    const l1 = lfo(2.7, level * 0.3, level, g.gain), l2 = lfo(0.5, 180, 420, lp.frequency);
    s.start(); return { nodes: [s, l1, l2] };
  }
  function drone(freq, level) {
    const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), lp = filt('lowpass', 400), g = ctx.createGain();
    o1.type = o2.type = 'sine'; o1.frequency.value = freq; o2.frequency.value = freq * 1.004; g.gain.value = level;
    o1.connect(lp); o2.connect(lp); lp.connect(g).connect(master);
    const l = lfo(0.04, level * 0.6, level, g.gain); o1.start(); o2.start(); return { nodes: [o1, o2, l] };
  }
  function shimmer(level, base = 220) {
    const g = ctx.createGain(); g.gain.value = level; const hp = filt('highpass', 160);
    const freqs = [base, base * 1.26, base * 1.5];
    const oscs = freqs.map(f => { const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; const og = ctx.createGain(); og.gain.value = 0.33; o.connect(og).connect(hp); o.start(); return o; });
    hp.connect(g).connect(master);
    const l = lfo(0.06, level * 0.5, level, g.gain); return { nodes: [...oscs, l] };
  }
  function bells(level) { // scheduled soft bell plucks
    const out = ctx.createGain(); out.gain.value = level; out.connect(master);
    const ring = () => {
      if (!ctx) return;
      const f = [392, 523.25, 587.33, 659.25][Math.floor(Math.random() * 4)];
      const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime;
      o.type = 'sine'; o.frequency.value = f; o.connect(g).connect(out);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.9, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0008, t + 4.5);
      o.start(t); o.stop(t + 4.6);
    };
    ring(); bellTimer = setInterval(ring, 6500);
    return { nodes: [], extra: () => { clearInterval(bellTimer); bellTimer = null; } };
  }

  const BUILD = {
    river:        () => [water(0.34, 650), wind(0.1)],
    rain:         () => [rain(0.5), water(0.12, 400)],
    ocean:        () => [waves(0.5), wind(0.14)],
    wind:         () => [wind(0.4), drone(70, 0.1)],
    night:        () => [wind(0.16), shimmer(0.12, 330), drone(98, 0.12)],
    fire:         () => [fire(0.5), drone(60, 0.1)],
    chant:        () => [shimmer(0.34, 196), drone(98, 0.16)],
    bells:        () => [bells(0.16), drone(98, 0.14), shimmer(0.1, 261)],
    drone:        () => [drone(55, 0.5), drone(82.5, 0.22)],
    silence:      () => [],
    // themed presets
    passion:      () => [drone(55, 0.5), drone(82.5, 0.22), wind(0.18)],
    resurrection: () => [shimmer(0.4, 261), water(0.16), drone(110, 0.14)],
    consummation: () => [shimmer(0.45, 261), drone(110, 0.18)],
    nativity:     () => [shimmer(0.24, 261), drone(110, 0.18), water(0.1)],
    incarnation:  () => [shimmer(0.28, 220), drone(98, 0.16)],
    calm:         () => [water(0.34), wind(0.18)],
  };

  function themeKey(theme) {
    switch (theme) {
      case 'The Passion': return 'passion';
      case 'Resurrection': return 'resurrection';
      case 'Consummation': case 'The Last Things': return 'consummation';
      case 'Nativity': return 'nativity';
      case 'Incarnation': case 'Hidden Life': return 'incarnation';
      case 'Miracles': return 'ocean';
      default: return 'calm';
    }
  }
  function activeKey(theme) { return (override && override !== 'themed') ? override : themeKey(theme); }

  function stopLayers() {
    if (bellTimer) { clearInterval(bellTimer); bellTimer = null; }
    layers.forEach(L => { if (L.extra) try { L.extra(); } catch (e) {} L.nodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch (e) {} }); });
    layers = [];
  }
  function build(key) { const f = BUILD[key] || BUILD.calm; return f(); }

  function start(theme) {
    ensure(); if (ctx.state === 'suspended') ctx.resume();
    lastTheme = theme || 'calm';
    stopLayers();
    layers = build(activeKey(lastTheme));
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(muted ? 0 : TARGET, t + 2.2);
  }
  function stop() {
    if (!ctx) return;
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(0, t + 1.0);
    setTimeout(stopLayers, 1200);
  }
  function setScape(name) {
    override = name; localStorage.setItem('vc-scape', name);
    if (ctx && layers.length >= 0 && master && master.gain.value > 0.001 || (ctx && override === 'silence')) {
      // rebuild live
      stopLayers(); layers = build(activeKey(lastTheme));
    } else if (ctx) { stopLayers(); layers = build(activeKey(lastTheme)); }
  }
  function toggleMute() {
    muted = !muted; localStorage.setItem('vc-muted', muted ? '1' : '0');
    if (ctx && master) { const t = ctx.currentTime; master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(master.gain.value, t); master.gain.linearRampToValueAtTime(muted ? 0 : TARGET, t + 0.4); }
    return muted;
  }
  const isMuted = () => muted;
  const currentScape = () => override;
  const scapes = () => SCAPES.map(s => ({ id: s, label: LABELS[s] }));

  return { start, stop, toggleMute, isMuted, setScape, currentScape, scapes };
})();
