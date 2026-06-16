/* Immersive session player — Ludolph's five movements, revealed slowly. */
const Player = (() => {
  let el, screens = [], idx = 0, session = null;

  const MOVEMENTS = [
    { key:'stillness', name:'Be Still' },
    { key:'gospel',    name:'The Gospel' },
    { key:'behold',    name:'Behold' },
    { key:'consider',  name:'Consider' },
    { key:'jewel',     name:'' },
    { key:'prayer',    name:'Pray' },
  ];

  function buildScreens(s){
    if (s.type === 'voice'){
      const out = [];
      out.push({ name:s.character||'A voice', lines:(s.narration||[]).map(t=>({t,cls:''})) });
      if (s.latinJewel && s.latinJewel.latin)
        out.push({ name:'', lines:[{t:s.latinJewel.latin,cls:'jewel-latin'},{t:s.latinJewel.english,cls:'jewel-en'}] });
      out.push({ name:'Pray', lines:(s.prayer||[]).map(t=>({t,cls:'prayer'})) });
      return out.filter(sc=>sc.lines.length);
    }
    const out = [];
    out.push({ name:'Be Still', lines:(s.movements.stillness||[]).map(t=>({t,cls:''})) });
    const gospel = [];
    if (s.gospelRef) gospel.push({t:s.gospelRef, cls:'gospel-lead'});
    (s.movements.gospel||[]).forEach(t=>gospel.push({t,cls:'gospel'}));
    out.push({ name:'The Gospel', lines:gospel });
    out.push({ name:'Behold', lines:(s.movements.behold||[]).map(t=>({t,cls:''})) });
    out.push({ name:'Consider', lines:(s.movements.consider||[]).map(t=>({t,cls:''})) });
    if (s.latinJewel && s.latinJewel.latin){
      out.push({ name:'', lines:[
        {t:s.latinJewel.latin, cls:'jewel-latin'},
        {t:s.latinJewel.english, cls:'jewel-en'},
      ]});
    }
    out.push({ name:'Pray', lines:(s.movements.prayer||[]).map(t=>({t,cls:'prayer'})) });
    return out.filter(sc=>sc.lines.length);
  }

  function ensure(){
    if (el) return;
    el = document.createElement('div');
    el.className = 'player';
    el.innerHTML = `
      <div class="player-top">
        <span class="label" data-role="mlabel"></span>
        <span class="player-controls">
          <button class="player-sound ${Ambient.isMuted()?'muted':''}" data-role="sound" title="Ambient sound" aria-label="Ambient sound">♪</button>
          <button class="player-close" aria-label="Close">&times;</button>
        </span>
      </div>
      <div class="progress" data-role="progress"></div>
      <div class="stage" data-role="stage"><div class="stage-inner" data-role="inner"></div></div>
      <div class="tap-hint" data-role="hint">tap to continue</div>`;
    document.body.appendChild(el);
    el.querySelector('.player-close').addEventListener('click', close);
    el.querySelector('[data-role=sound]').addEventListener('click', (e)=>{
      e.stopPropagation();
      const muted = Ambient.toggleMute();
      e.currentTarget.classList.toggle('muted', muted);
    });
    el.querySelector('.stage').addEventListener('click', next);
    document.addEventListener('keydown', e=>{
      if(!el.classList.contains('open'))return;
      if(e.key==='Escape')close();
      if(e.key===' '||e.key==='Enter'||e.key==='ArrowRight'){e.preventDefault();next();}
    });
  }

  function renderProgress(){
    const p = el.querySelector('[data-role=progress]');
    p.innerHTML = screens.map((_,i)=>`<span class="seg ${i<idx?'done':''} ${i===idx?'active':''}"><span class="fill"></span></span>`).join('');
  }

  function showIntro(s){
    idx = -1;
    const inner = el.querySelector('[data-role=inner]');
    const isVoice = s.type==='voice';
    el.querySelector('[data-role=mlabel]').textContent = isVoice ? 'A Voice' : `Part ${s.part} · Chapter ${s.chapter}`;
    el.querySelector('[data-role=progress]').innerHTML='';
    el.querySelector('[data-role=hint]').style.visibility='hidden';
    inner.innerHTML = `
      <div class="session-intro">
        <div class="tag">${isVoice ? ('In the voice of '+(s.character||'')) : (s.theme||'')+(s.lens?' · '+s.lens:'')}</div>
        <h1>${s.title}</h1>
        <div class="sub">${isVoice ? (s.scene||'') : (s.subtitle||'')}</div>
        <div class="ref">${s.gospelRef||''} &nbsp;·&nbsp; ${s.durationMin||4} min</div>
        <button class="btn solid" data-role="begin">Begin</button>
        <div style="margin-top:18px"><span class="emos" style="justify-content:center">${(s.emotions||[]).map(e=>`<span class="emo">${e}</span>`).join('')}</span></div>
      </div>`;
    inner.querySelector('[data-role=begin]').addEventListener('click', e=>{e.stopPropagation();goto(0);});
  }

  function goto(i){
    if (idx === -1 && i === 0) { try { Ambient.start(session.theme); } catch(e){} }
    idx = i;
    el.querySelector('[data-role=hint]').style.visibility = 'visible';
    renderProgress();
    const sc = screens[idx];
    el.querySelector('[data-role=mlabel]').textContent = sc.name || '';
    const inner = el.querySelector('[data-role=inner]');
    inner.innerHTML = (sc.name?`<div class="movement-name">${sc.name}</div>`:'') +
      sc.lines.map(l=>`<p class="line ${l.cls}">${l.t}</p>`).join('');
    const lines = [...inner.querySelectorAll('.line')];
    lines.forEach((ln,k)=>{ setTimeout(()=>ln.classList.add('in'), 220*k + 120); });
  }

  function next(){
    if (idx === -1) return; // intro handled by Begin button
    if (idx < screens.length-1){ goto(idx+1); }
    else { showEnd(); }
  }

  function showEnd(){
    el.querySelector('[data-role=mlabel]').textContent='';
    el.querySelector('[data-role=hint]').style.visibility='hidden';
    el.querySelectorAll('.progress .seg').forEach(s=>s.classList.add('done'));
    const inner = el.querySelector('[data-role=inner]');
    inner.innerHTML = `
      <div class="session-end">
        <div class="cross">✝</div>
        <h2>Amen.</h2>
        <p>Ludolph wrote this for you, six hundred years ago.</p>
        <div class="btn-row">
          <button class="btn" data-role="again">Pray again</button>
          <button class="btn ghost" data-role="done">Return</button>
        </div>
      </div>`;
    inner.querySelector('[data-role=again]').addEventListener('click',e=>{e.stopPropagation();goto(0);});
    inner.querySelector('[data-role=done]').addEventListener('click',e=>{e.stopPropagation();close();});
  }

  function open(s){
    ensure();
    session = s;
    screens = buildScreens(s);
    el.classList.toggle('passion', (s.theme==='The Passion'));
    el.classList.add('open');
    requestAnimationFrame(()=>el.classList.add('show'));
    document.body.style.overflow='hidden';
    showIntro(s);
  }
  function close(){
    if(!el)return;
    try { Ambient.stop(); } catch(e){}
    el.classList.remove('show');
    document.body.style.overflow='';
    setTimeout(()=>el.classList.remove('open'),500);
    if(location.hash.startsWith('#/session/')) history.back();
  }

  return { open, close };
})();
