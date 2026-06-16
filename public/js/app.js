/* Vita Christi — SPA router & views */
const App = (() => {
  let register = [], sessions = [], sessionsById = {}, prayers = [];

  const JOURNEYS = [
    { id:'passion',    title:'The Passion',        sub:'Holy Week, hour by hour',  passion:true,
      desc:'Walk with Christ from Gethsemane to the tomb — meditated on the canonical hours of the day, exactly as Ludolph ordered them.' },
    { id:'risen',      title:'He Is Risen',         sub:'From the empty tomb to Pentecost',
      desc:'The appearances of the risen Lord: to His Mother, to Magdalene, on the road to Emmaus, to Thomas — and the fire of Pentecost.' },
    { id:'storm',      title:'Rest in the Storm',   sub:'For the anxious heart',
      desc:'When the waves rise and Christ seems asleep in the boat. For fear, panic, grief, and unrest.' },
    { id:'humility',   title:'The Way of Humility', sub:'The descent of God',
      desc:'From the manger to the washing of feet — the God who goes lower than us all.' },
    { id:'temptation', title:'Facing Temptation',   sub:'The desert and the garden',
      desc:'Christ fasting, tempted, and sorrowful unto death — that you might learn to stand.' },
    { id:'daily',      title:'Daily Bread',         sub:'A single scene to meet Him today',
      desc:'Stand in one scene from the life of Christ, behold it, and pray.' },
  ];

  const ACTS = {
    1:'Incarnation, Nativity & Infancy', 2:'Baptism, the Desert & the Beginning',
    3:'The Sermon on the Mount', 4:'The Ministry — Miracles & Teaching',
    5:'The Road to Jerusalem', 6:'The Last Things',
    7:'The Passion', 8:'Resurrection, Ascension & Consummation',
  };

  const root = () => document.getElementById('view');

  async function loadData(){
    const get = (u)=>fetch(u).then(r=>r.ok?r.json():null).catch(()=>null);
    register = (await get('data/register.json')) || [];
    sessions = (await get('sessions/index.json')) || [];
    prayers  = (await get('data/prayers.json')) || [];
    sessionsById = {}; sessions.forEach(s=>sessionsById[s.id]=s);
    // map sessions onto register chapters for timeline links
    const liveKey = new Set(sessions.map(s=>s.part+'|'+s.chapter));
    register.forEach(r=>{ r.live = liveKey.has(r.part+'|'+r.chapter);
      r.sessionId = (sessions.find(s=>s.part===r.part&&s.chapter===r.chapter)||{}).id; });
  }

  function nav(active){
    return `<div class="topbar"><div class="wrap">
      <a class="brand" href="#/">Vita <span class="x">Christi</span></a>
      <div class="nav">
        <a href="#/journeys" class="${active==='journeys'?'active':''}">Journeys</a>
        <a href="#/timeline" class="${active==='timeline'?'active':''}">The Life</a>
        <a href="#/prayers" class="${active==='prayers'?'active':''}">Prayers</a>
        <a href="#/about" class="${active==='about'?'active':''}">Ludolph</a>
      </div></div></div>`;
  }
  const footer = () => `<div class="foot-site"><div class="wrap">
      <span class="brand">Vita <span class="x">Christi</span></span>
      Every word drawn from the <em>Vita Jesu Christi</em> of Ludolph of Saxony, 1374.<br>
      Not a meditation app. A way to meet a Person.
    </div></div>`;

  function sessionCard(s){
    return `<a class="card ${s.theme==='The Passion'?'passion':''}" href="#/session/${s.id}">
      <div class="tag">${s.theme||''}</div>
      <h3>${s.title}</h3>
      <p>${s.subtitle||''}</p>
      <div class="emos">${(s.emotions||[]).slice(0,3).map(e=>`<span class="emo">${e}</span>`).join('')}</div>
      <div class="foot"><span>${s.gospelRef||''}</span><span>${s.durationMin||4} min</span></div>
    </a>`;
  }

  // ---------- views ----------
  function home(){
    const featured = sessionsById['gethsemane'] || sessions[0];
    const picks = ['the-nativity','the-storm-stilled','the-resurrection','raising-of-lazarus']
      .map(id=>sessionsById[id]).filter(Boolean);
    return nav('') + `
    <div class="wrap">
      <div class="hero">
        <div class="cross">✝</div>
        <div class="kicker">A 650-year-old way of prayer</div>
        <h1>Meet Him.</h1>
        <div class="latin">Ac si præsens esses.</div>
        <p class="lead">Not mindfulness. Not emptying your mind. The opposite — to stand inside the life of Christ as if you were there, and let it change you. Every word is Ludolph of Saxony's, the book that converted Ignatius of Loyola.</p>
        <div class="btn-row">
          ${featured?`<a class="btn solid" href="#/session/${featured.id}">Begin with Gethsemane</a>`:''}
          <a class="btn ghost" href="#/journeys">Explore the journeys</a>
        </div>
      </div>
      <div class="divider"></div>

      <div class="section">
        <div class="kicker" style="text-align:center;display:block;margin-bottom:8px">How it works</div>
        <h2 style="text-align:center;font-size:2rem;margin-bottom:8px">Ludolph's five movements</h2>
        <p style="text-align:center;color:var(--ink-soft);max-width:520px;margin:0 auto 26px">He does not ask you to read about Christ. He asks you to be present. Each session moves the same way he wrote it, six centuries ago.</p>
        ${[['I','Be still','“Speak with the sublime God with attentive mind and quiet heart.”'],
           ['II','The Gospel','The bare word of Scripture, slowly, one line at a time.'],
           ['III','Behold','“Attend to each thing as if you were present.” The scene built around you.'],
           ['IV','Consider','Ludolph’s own meditation — raw, visceral, unsoftened.'],
           ['V','Pray','His own prayer, that has been prayed for 650 years.']]
          .map(f=>`<div class="feature"><div class="num">${f[0]}</div><div><h3>${f[1]}</h3><p>${f[2]}</p></div></div>`).join('')}
      </div>

      ${picks.length?`<div class="divider"></div><div class="section">
        <div class="kicker" style="display:block;margin-bottom:14px">Where to begin</div>
        <div class="grid two">${picks.map(sessionCard).join('')}</div>
      </div>`:''}

      <div class="divider"></div>
      <div class="section" style="text-align:center">
        <h2 style="font-size:2rem;margin-bottom:10px">The whole life of Christ</h2>
        <p style="color:var(--ink-soft);max-width:520px;margin:0 auto 24px">One hundred and eighty-one scenes, from before time to the Last Judgment. Find a session by where you are — by feeling, by feast, by the moment you need.</p>
        <a class="btn" href="#/timeline">Walk the timeline</a>
      </div>
    </div>` + footer();
  }

  function journeys(){
    return nav('journeys') + `<div class="wrap section">
      <div class="kicker">Curated paths</div>
      <h1 style="font-size:2.6rem;margin:6px 0 8px">Journeys</h1>
      <p style="color:var(--ink-soft);max-width:560px;margin-bottom:30px">Each journey gathers scenes from across the life of Christ around one need. Begin anywhere; return daily.</p>
      <div class="grid two">
        ${JOURNEYS.map(j=>{
          const count = sessions.filter(s=>(s.journeys||[]).includes(j.id)).length;
          return `<a class="card ${j.passion?'passion':''}" href="#/journey/${j.id}">
            <div class="tag">${j.sub}</div>
            <h3>${j.title}</h3>
            <p>${j.desc}</p>
            <div class="foot"><span>${count} session${count===1?'':'s'}</span></div>
          </a>`;
        }).join('')}
      </div>
    </div>` + footer();
  }

  function journey(id){
    const j = JOURNEYS.find(x=>x.id===id); if(!j) return notFound();
    const list = sessions.filter(s=>(s.journeys||[]).includes(id));
    return nav('journeys') + `<div class="wrap section">
      <a href="#/journeys" style="color:var(--muted);font-size:.85rem">← All journeys</a>
      <div class="kicker" style="margin-top:18px">${j.sub}</div>
      <h1 style="font-size:2.8rem;margin:6px 0 10px">${j.title}</h1>
      <p style="color:var(--ink-soft);max-width:580px;margin-bottom:30px">${j.desc}</p>
      ${list.length?`<div class="grid two">${list.map(sessionCard).join('')}</div>`
        :`<p style="color:var(--muted)">Sessions for this journey are being prepared.</p>`}
    </div>` + footer();
  }

  function timeline(){
    const byAct = {};
    register.forEach(r=>{(byAct[r.act]=byAct[r.act]||[]).push(r);});
    let html = nav('timeline') + `<div class="wrap section">
      <div class="kicker">The complete life of Christ</div>
      <h1 style="font-size:2.6rem;margin:6px 0 8px">The Life</h1>
      <p style="color:var(--ink-soft);max-width:580px;margin-bottom:10px">All ${register.length} chapters of the <em>Vita Christi</em>, in order. The lit ones are ready to pray; the rest are being translated.</p>`;
    Object.keys(byAct).sort((a,b)=>a-b).forEach(act=>{
      html += `<div class="act"><div class="act-head"><span class="n">${act}</span><h2>${ACTS[act]||''}</h2></div>`;
      byAct[act].forEach(r=>{
        const live = r.live && r.sessionId;
        html += `<div class="chapter ${live?'live':'soon'}" ${live?`onclick="location.hash='#/session/${r.sessionId}'"`:''}>
          <span class="cn">${r.part}·${r.chapter}</span>
          <span class="ct"><span class="t">${r.title}</span> <span class="s">${(r.emotions||[]).join(' · ')}</span></span>
          <span class="go">${live?'pray →':''}</span>
        </div>`;
      });
      html += `</div>`;
    });
    return html + `</div>` + footer();
  }

  function prayersView(){
    const items = prayers.length?prayers:sessions.map(s=>({ref:s.title, text:(s.prayerPreview||'')})).filter(p=>p.text);
    return nav('prayers') + `<div class="wrap section">
      <div class="kicker">From the Vita Christi</div>
      <h1 style="font-size:2.6rem;margin:6px 0 8px">Prayers</h1>
      <p style="color:var(--ink-soft);max-width:560px;margin-bottom:30px">Ludolph ends every chapter with a prayer he hands directly to the reader: <em>“Say this, or something like it.”</em> Here they are, to pray on their own.</p>
      ${items.map(p=>`<div class="prayer-card"><div class="ref">${p.ref||''}</div><p>${(Array.isArray(p.text)?p.text.join('<br>'):p.text)}</p></div>`).join('')}
    </div>` + footer();
  }

  function about(){
    return nav('about') + `<div class="wrap section" style="max-width:680px">
      <div class="kicker">The guide</div>
      <h1 style="font-size:2.8rem;margin:6px 0 16px">Ludolph of Saxony</h1>
      <p style="margin-bottom:18px;color:var(--ink-soft)">In a silent Carthusian cell, before 1378, a monk set out to do something audacious: to gather the whole life of Christ from the four Gospels and the Church Fathers, and to teach the reader not to <em>read</em> it, but to <em>enter</em> it.</p>
      <p style="margin-bottom:18px;color:var(--ink-soft)">His <em>Vita Jesu Christi</em> became one of the first printed bestsellers of Europe (Strasbourg and Cologne, 1474). Its method — to imagine yourself present in each scene — became the seedbed of Western contemplative prayer.</p>
      <p style="margin-bottom:18px;color:var(--ink-soft)">In 1521, recovering from a cannon-wound, a Spanish soldier named Íñigo read it. He rose a different man. We know him as Ignatius of Loyola; his <em>Spiritual Exercises</em> are Ludolph's method, refined. Teresa of Ávila and Francis de Sales quoted it for the rest of their lives.</p>
      <div class="prayer-card" style="margin:28px 0"><div class="ref">Ludolph, to his reader</div><p>Attend to each thing as if you were present. So shall the Lord Himself be present to you in spirit, as you imagine Him to be present.</p></div>
      <p style="color:var(--ink-soft)">This site changes none of his words. We translate, we select, we set the Gospel first as he did — and we never put into his mouth what he did not write. His intensity is kept on purpose. It is the whole point.</p>
    </div>` + footer();
  }

  function notFound(){ return nav('') + `<div class="wrap section"><h1>Not found</h1><a class="btn" href="#/">Home</a></div>`+footer(); }

  // ---------- router ----------
  async function openSession(id){
    let s = sessionsById[id];
    if (s && !s.movements){ // index entry without full body -> fetch full
      const full = await fetch('sessions/'+id+'.json').then(r=>r.ok?r.json():null).catch(()=>null);
      if (full) s = Object.assign({}, s, full);
    }
    if (s) Player.open(s);
  }

  function route(){
    const h = location.hash.replace(/^#/,'') || '/';
    const parts = h.split('/').filter(Boolean);
    window.scrollTo(0,0);
    if (parts[0]==='session'){ openSession(parts[1]); if(root().dataset.k!=='home'){root().innerHTML=home();root().dataset.k='home';} animate(); return; }
    let html, k=parts[0]||'home';
    switch(parts[0]){
      case undefined: html=home(); k='home'; break;
      case 'journeys': html=journeys(); break;
      case 'journey': html=journey(parts[1]); break;
      case 'timeline': html=timeline(); break;
      case 'prayers': html=prayersView(); break;
      case 'about': html=about(); break;
      default: html=notFound();
    }
    root().innerHTML = html; root().dataset.k=k; animate();
  }

  function animate(){
    document.querySelectorAll('.fade-in').forEach(elm=>{
      new IntersectionObserver((ents,o)=>ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');o.unobserve(e.target);}}),{threshold:.12}).observe(elm);
    });
  }

  async function start(){
    await loadData();
    window.addEventListener('hashchange', route);
    route();
  }
  return { start };
})();
document.addEventListener('DOMContentLoaded', App.start);
