/* Vita Christi — additional ways to pray (meditation types).
   Re-uses the full-screen .player overlay shell. */
const Practices = (() => {
  let el, timers = [];

  function ensure(){
    if (el) return;
    el = document.createElement('div');
    el.className = 'player';
    el.innerHTML = `
      <div class="player-top">
        <span class="label" data-role="mlabel"></span>
        <span class="player-controls">
          <button class="player-sound ${Ambient.isMuted()?'muted':''}" data-role="sound" title="Ambient sound">♪</button>
          <button class="player-close" aria-label="Close">&times;</button>
        </span>
      </div>
      <div class="stage" data-role="stage"><div class="stage-inner" data-role="inner"></div></div>
      <div class="tap-hint" data-role="hint"></div>`;
    document.body.appendChild(el);
    el.querySelector('.player-close').addEventListener('click', close);
    el.querySelector('[data-role=sound]').addEventListener('click', e=>{
      e.stopPropagation(); const m=Ambient.toggleMute(); e.currentTarget.classList.toggle('muted',m);
    });
    document.addEventListener('keydown', e=>{ if(el.classList.contains('open') && e.key==='Escape') close(); });
  }

  const inner = () => el.querySelector('[data-role=inner]');
  const setLabel = (t) => el.querySelector('[data-role=mlabel]').textContent = t||'';
  const setHint = (t) => { const h=el.querySelector('[data-role=hint]'); h.textContent=t||''; h.style.visibility=t?'visible':'hidden'; };

  function openShell(theme){
    ensure(); clearTimers();
    el.classList.toggle('passion', theme==='The Passion');
    el.classList.add('open');
    requestAnimationFrame(()=>el.classList.add('show'));
    document.body.style.overflow='hidden';
    try { Ambient.start(theme||'calm'); } catch(e){}
  }
  function close(){
    if(!el)return; clearTimers();
    try{ Ambient.stop(); }catch(e){}
    el.classList.remove('show'); document.body.style.overflow='';
    setTimeout(()=>el.classList.remove('open'),500);
    if(location.hash.startsWith('#/pray/')) history.back();
  }
  function clearTimers(){ timers.forEach(t=>clearTimeout(t)||clearInterval(t)); timers=[]; }

  // ---------- 1. The Jesus Prayer (breath) ----------
  function breath(){
    openShell('calm'); setLabel('The Jesus Prayer'); setHint('breathe · tap to leave');
    el.querySelector('.stage').onclick = null;
    inner().innerHTML = `
      <div style="text-align:center">
        <div class="breath-orb"></div>
        <div class="breath-phase" data-role="phase">Breathe in</div>
        <div class="breath-word" data-role="word">Lord Jesus Christ, Son of God,</div>
      </div>`;
    const w = inner().querySelector('[data-role=word]');
    const ph = inner().querySelector('[data-role=phase]');
    const A = 'Lord Jesus Christ, Son of God,';
    const B = 'have mercy on me, a sinner.';
    let on = true;
    const swap = ()=>{ w.style.opacity=0; timers.push(setTimeout(()=>{
      w.textContent = on?A:B; ph.textContent = on?'Breathe in':'Breathe out'; w.style.opacity=1; on=!on;
    }, 700)); };
    swap();
    timers.push(setInterval(swap, 5500));
  }

  // ---------- 2. The Wounds (Ludolph's counting devotion) ----------
  function wounds(){
    openShell('passion'); setLabel('The Five Thousand Wounds'); setHint('');
    el.querySelector('.stage').onclick = null;
    const TARGET = 15;  // Ludolph: 15 a day, a year for all 5,490 wounds
    let n = 0;
    const render = ()=>{
      inner().innerHTML = `
        <div class="count-wrap">
          <p class="count-prayer">Our Father… &nbsp;·&nbsp; Hail Mary…</p>
          <div class="count-num">${n}</div>
          <div class="count-of">of ${TARGET} today</div>
          <div class="beads">${Array.from({length:TARGET},(_,i)=>`<span class="bead ${i<n?'on':''}"></span>`).join('')}</div>
          ${n>=TARGET
            ? `<p style="color:var(--gold-bright);font-family:var(--serif);font-size:1.3rem;font-style:italic">It is enough for today.<br>In a year you will have honoured every wound.</p>
               <div class="btn-row"><button class="btn ghost" data-role="exit">Return</button></div>`
            : `<button class="btn count-tap" data-role="tap">Pray one</button>`}
        </div>`;
      const tap = inner().querySelector('[data-role=tap]');
      if (tap) tap.addEventListener('click', e=>{ e.stopPropagation(); n++; render(); });
      const ex = inner().querySelector('[data-role=exit]');
      if (ex) ex.addEventListener('click', e=>{ e.stopPropagation(); close(); });
    };
    // intro
    inner().innerHTML = `
      <div class="session-intro">
        <div class="tag">A devotion of Ludolph</div>
        <h1>The Wounds</h1>
        <div class="sub">“Five thousand four hundred and ninety wounds were in My body.”</div>
        <p style="color:var(--ink-soft);max-width:460px;margin:0 auto 22px">A voice from heaven told a recluse: pray the Our Father and Hail Mary fifteen times a day in memory of the Passion — and in a year you will have saluted every wound. Begin.</p>
        <button class="btn solid" data-role="begin">Begin</button>
      </div>`;
    inner().querySelector('[data-role=begin]').addEventListener('click', e=>{ e.stopPropagation(); render(); });
  }

  // ---------- 3. Gaze (one Latin jewel, held in silence) ----------
  function gaze(jewels){
    openShell('calm'); setLabel('Gaze'); setHint('tap for another');
    let list = (jewels||[]).filter(j=>j && j.latin);
    if (!list.length) list = [{latin:'Ac si præsens esses.', english:'As if you were present.'}];
    let i = Math.floor((Date.now()/1000) % list.length) || 0;
    const show = ()=>{
      const j = list[i % list.length];
      inner().innerHTML = `
        <div style="text-align:center">
          <div class="gaze-candle">✝</div>
          <p class="gaze-latin">${j.latin}</p>
          <p class="gaze-en">${j.english||''}</p>
        </div>`;
      const lat = inner().querySelector('.gaze-latin'); lat.style.opacity=0; lat.style.transition='opacity 1.4s';
      requestAnimationFrame(()=>lat.style.opacity=1);
    };
    el.querySelector('.stage').onclick = ()=>{ i++; show(); };
    show();
  }

  // ---------- 4. Lectio (slow, repeated reading of the Gospel) ----------
  function lectio(session){
    if(!session||!session.movements){ return; }
    openShell(session.theme); setLabel('Lectio · ' + (session.title||''));
    setHint('tap to continue');
    const lines = session.movements.gospel||[];
    const ref = session.gospelRef||'';
    const passes = [
      'Read it slowly. Let the words settle.',
      'Read it again. Which word shines? Stay there.',
      'Read it a third time. Speak it back to Him.',
    ];
    let p = 0;
    const show = ()=>{
      inner().innerHTML = `
        <div class="stage-inner">
          <div class="movement-name">${ref}</div>
          ${lines.map(l=>`<p class="line gospel">${l}</p>`).join('')}
          <p style="color:var(--gold);font-style:italic;margin-top:26px" class="line">${passes[p]||''}</p>
        </div>`;
      [...inner().querySelectorAll('.line')].forEach((ln,k)=>timers.push(setTimeout(()=>ln.classList.add('in'),260*k+150)));
    };
    el.querySelector('.stage').onclick = ()=>{ p++; if(p>=passes.length){ close(); } else show(); };
    show();
  }

  return { breath, wounds, gaze, lectio, close };
})();
