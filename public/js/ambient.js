/* Vita Christi — procedural ambient soundscapes (Web Audio, no files).
   Layers of filtered noise + low drones, themed per session. Subtle, looping. */
const Ambient = (() => {
  let ctx = null, master = null, layers = [], current = null;
  let muted = localStorage.getItem('vc-muted') === '1';
  const TARGET = 0.16; // overall subtlety

  function ensure() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
  }

  function noiseBuffer(seconds = 4) {
    const len = ctx.sampleRate * seconds;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;   // brown-ish (soft, low)
      d[i] = last * 3.2;
    }
    return buf;
  }

  function noiseSource() {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuffer();
    s.loop = true;
    return s;
  }

  function lfo(rate, min, max, param) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.frequency.value = rate;
    g.gain.value = (max - min) / 2;
    osc.connect(g).connect(param);
    param.value = (max + min) / 2;
    osc.start();
    return osc;
  }

  // ---- layer builders (each returns {nodes:[], gain}) ----
  function water(level) {
    const src = noiseSource();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 650; lp.Q.value = 0.6;
    const g = ctx.createGain(); g.gain.value = level;
    src.connect(lp).connect(g).connect(master);
    const l1 = lfo(0.07, 380, 880, lp.frequency);
    const l2 = lfo(0.11, level * 0.6, level, g.gain);
    src.start();
    return { nodes: [src, l1, l2], gain: g };
  }
  function wind(level) {
    const src = noiseSource();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 0.7;
    const g = ctx.createGain(); g.gain.value = level;
    src.connect(bp).connect(g).connect(master);
    const l1 = lfo(0.05, 300, 820, bp.frequency);
    const l2 = lfo(0.08, level * 0.4, level, g.gain);
    src.start();
    return { nodes: [src, l1, l2], gain: g };
  }
  function drone(freq, level) {
    const o1 = ctx.createOscillator(); o1.type = 'sine'; o1.frequency.value = freq;
    const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 1.004;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 400;
    const g = ctx.createGain(); g.gain.value = level;
    o1.connect(lp); o2.connect(lp); lp.connect(g).connect(master);
    const l = lfo(0.04, level * 0.6, level, g.gain);
    o1.start(); o2.start();
    return { nodes: [o1, o2, l], gain: g };
  }
  function shimmer(level) {
    const freqs = [220, 277.18, 329.63]; // a soft major-ish cluster, low
    const g = ctx.createGain(); g.gain.value = level;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 180;
    const oscs = freqs.map(f => { const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; const og = ctx.createGain(); og.gain.value = 0.33; o.connect(og).connect(hp); o.start(); return o; });
    hp.connect(g).connect(master);
    const l = lfo(0.06, level * 0.5, level, g.gain);
    return { nodes: [...oscs, l], gain: g };
  }

  const PROFILES = {
    passion:      () => [drone(55, 0.5), drone(82.5, 0.22), wind(0.18)],
    resurrection: () => [shimmer(0.4), water(0.16), drone(110, 0.14)],
    consummation: () => [shimmer(0.45), drone(110, 0.18)],
    storm:        () => [water(0.5), wind(0.4)],
    nativity:     () => [shimmer(0.24), drone(110, 0.18), water(0.1)],
    incarnation:  () => [shimmer(0.28), drone(98, 0.16)],
    calm:         () => [water(0.34), wind(0.18)],
  };

  function profileFor(theme) {
    switch (theme) {
      case 'The Passion': return 'passion';
      case 'Resurrection': return 'resurrection';
      case 'Consummation': case 'The Last Things': return 'consummation';
      case 'Nativity': return 'nativity';
      case 'Incarnation': case 'Hidden Life': return 'incarnation';
      case 'Miracles': return 'storm';
      default: return 'calm';
    }
  }

  function stopLayers() {
    layers.forEach(L => L.nodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch (e) {} }));
    layers = [];
  }

  function start(theme) {
    ensure();
    if (ctx.state === 'suspended') ctx.resume();
    const key = profileFor(theme);
    current = key;
    stopLayers();
    layers = (PROFILES[key] || PROFILES.calm)();
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(muted ? 0 : TARGET, t + 2.5);
  }

  function stop() {
    if (!ctx) return;
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(master.gain.value, t);
    master.gain.linearRampToValueAtTime(0, t + 1.2);
    setTimeout(stopLayers, 1400);
  }

  function toggleMute() {
    muted = !muted;
    localStorage.setItem('vc-muted', muted ? '1' : '0');
    if (ctx && master) {
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(muted ? 0 : TARGET, t + 0.4);
    }
    return muted;
  }
  const isMuted = () => muted;

  return { start, stop, toggleMute, isMuted };
})();
