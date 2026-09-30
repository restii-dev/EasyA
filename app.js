/**
 * EasyA - Admin SUB-RESTI-1738 | 60 games | Mirror
 */
const CONFIG = {
  helpDuration: 30000,
  adminKey: 'SUB-RESTI-1738', 'DIDDY-AHHH-BLUD-1738'
  fallbackKeys: ['EASY-A202-6KEY-GEORG','GEOR-GIAH-SKEY-2026','UNBL-OCKD-GAME-EASYA','PROX-YKEY-COMP-LEX1','TEST-KEY1-2345-6789'],
  proxyEngines: {
    ultraviolet: { name: 'Ultraviolet' },
    dynamic: { name: 'Dynamic' },
    rammerhead: { name: 'Rammerhead' },
    alloy: { name: 'Alloy' }
  }
};
function normalizeKey(k) { return String(k||'').replace(/[^A-Za-z0-9]/g,'').toUpperCase(); }
const GAMES = [
{id:1,name:'Slope',icon:'🏂',category:'Arcade',url:'https://slopegame.io/'},
{id:2,name:'1v1.LOL',icon:'🔫',category:'Shooter',url:'https://1v1.lol/'},
{id:3,name:'Cookie Clicker',icon:'🍪',category:'Idle',url:'https://orteil.dashnet.org/cookieclicker/'},
{id:4,name:'Geometry Dash',icon:'🔺',category:'Rhythm',url:'https://scratch.mit.edu/projects/105549765/'},
{id:5,name:'Subway Surfers',icon:'🏃',category:'Runner',url:'https://poki.com/en/g/subway-surfers'},
{id:6,name:'Among Us',icon:'🔴',category:'Social',url:'https://amongusplay.online/'},
{id:7,name:'Minecraft Classic',icon:'⛏️',category:'Sandbox',url:'https://classic.minecraft.net/'},
{id:8,name:'Retro Bowl',icon:'🏈',category:'Sports',url:'https://retrobowl.me/'},
{id:9,name:'Drift Boss',icon:'🚗',category:'Driving',url:'https://www.crazygames.com/game/drift-boss'},
{id:10,name:'Basketball Stars',icon:'🏀',category:'Sports',url:'https://www.crazygames.com/game/basketball-stars'},
{id:11,name:'Snake.io',icon:'🐍',category:'IO',url:'https://snake.io/'},
{id:12,name:'Krunker.io',icon:'🎯',category:'FPS',url:'https://krunker.io/'},
{id:13,name:'Shell Shockers',icon:'🥚',category:'FPS',url:'https://shellshock.io/'},
{id:14,name:'Tetris',icon:'🧱',category:'Puzzle',url:'https://tetris.com/play-tetris'},
{id:15,name:'2048',icon:'🔢',category:'Puzzle',url:'https://play2048.co/'},
{id:16,name:'Flappy Bird',icon:'🐦',category:'Arcade',url:'https://flappybird.io/'},
{id:17,name:'Crossy Road',icon:'🐔',category:'Arcade',url:'https://poki.com/en/g/crossy-road'},
{id:18,name:'Temple Run 2',icon:'🏛️',category:'Runner',url:'https://poki.com/en/g/temple-run-2'},
{id:19,name:'Fireboy & Watergirl',icon:'🔥',category:'Puzzle',url:'https://poki.com/en/g/fireboy-and-watergirl-1-forest-temple'},
{id:20,name:"Papa's Pizzeria",icon:'🍕',category:'Cooking',url:'https://www.coolmathgames.com/0-papas-pizzeria'},
{id:21,name:'Run 3',icon:'🏃‍♂️',category:'Runner',url:'https://www.coolmathgames.com/0-run-3'},
{id:22,name:'Moto X3M',icon:'🏍️',category:'Racing',url:'https://www.coolmathgames.com/0-moto-x3m'},
{id:23,name:'Happy Wheels',icon:'🚲',category:'Physics',url:'https://www.totaljerkface.com/happy_wheels.tjf'},
{id:24,name:'Agar.io',icon:'🟢',category:'IO',url:'https://agar.io/'},
{id:25,name:'Vex 5',icon:'🏃',category:'Platformer',url:'https://www.coolmathgames.com/0-vex-5'},
{id:26,name:'Vex 7',icon:'🏃',category:'Platformer',url:'https://www.coolmathgames.com/0-vex-7'},
{id:27,name:'Tunnel Rush',icon:'🌀',category:'Arcade',url:'https://www.crazygames.com/game/tunnel-rush'},
{id:28,name:'Stack Ball',icon:'🏀',category:'Arcade',url:'https://poki.com/en/g/stack-ball'},
{id:29,name:'Doodle Jump',icon:'✏️',category:'Arcade',url:'https://www.crazygames.com/game/doodle-jump'},
{id:30,name:'Fruit Ninja',icon:'🍉',category:'Arcade',url:'https://www.crazygames.com/game/fruit-ninja'},
{id:31,name:'Cut the Rope',icon:'🍬',category:'Puzzle',url:'https://www.crazygames.com/game/cut-the-rope'},
{id:32,name:'Bad Ice Cream',icon:'🍦',category:'Puzzle',url:'https://www.coolmathgames.com/0-bad-ice-cream'},
{id:33,name:'Bloxorz',icon:'🟦',category:'Puzzle',url:'https://www.coolmathgames.com/0-bloxorz'},
{id:34,name:'Duck Life',icon:'🦆',category:'Adventure',url:'https://www.coolmathgames.com/0-duck-life'},
{id:35,name:'Learn to Fly',icon:'🐧',category:'Idle',url:'https://www.coolmathgames.com/0-learn-to-fly'},
{id:36,name:'Worlds Hardest Game',icon:'🔵',category:'Puzzle',url:'https://www.coolmathgames.com/0-worlds-hardest-game'},
{id:37,name:'Stickman Hook',icon:'🪝',category:'Arcade',url:'https://poki.com/en/g/stickman-hook'},
{id:38,name:'Drive Mad',icon:'🛻',category:'Racing',url:'https://poki.com/en/g/drive-mad'},
{id:39,name:'Level Devil',icon:'😈',category:'Platformer',url:'https://www.crazygames.com/game/level-devil'},
{id:40,name:'OvO',icon:'🥚',category:'Platformer',url:'https://www.crazygames.com/game/ovo'},
{id:41,name:'Getaway Shootout',icon:'🔫',category:'Party',url:'https://www.crazygames.com/game/getaway-shootout'},
{id:42,name:'Rooftop Snipers',icon:'🎯',category:'Party',url:'https://www.crazygames.com/game/rooftop-snipers'},
{id:43,name:'Basket Random',icon:'🏀',category:'Sports',url:'https://www.crazygames.com/game/basket-random'},
{id:44,name:'Soccer Random',icon:'⚽',category:'Sports',url:'https://www.crazygames.com/game/soccer-random'},
{id:45,name:'Boxing Random',icon:'🥊',category:'Sports',url:'https://www.crazygames.com/game/boxing-random'},
{id:46,name:'Snow Rider 3D',icon:'🛷',category:'Racing',url:'https://www.crazygames.com/game/snow-rider-3d'},
{id:47,name:'Cluster Rush',icon:'🚚',category:'Arcade',url:'https://www.crazygames.com/game/cluster-rush'},
{id:48,name:'Smash Karts',icon:'🏎️',category:'Racing',url:'https://smashkarts.io/'},
{id:49,name:'Surviv.io',icon:'🔫',category:'Battle Royale',url:'https://surviv.io/'},
{id:50,name:'Diep.io',icon:'🔵',category:'IO',url:'https://diep.io/'},
{id:51,name:'Slither.io',icon:'🐍',category:'IO',url:'https://slither.io/'},
{id:52,name:'Paper.io 2',icon:'📄',category:'IO',url:'https://paper-io.com/'},
{id:53,name:'Hole.io',icon:'⚫',category:'IO',url:'https://hole-io.com/'},
{id:54,name:'Bonk.io',icon:'⚪',category:'Party',url:'https://bonk.io/'},
{id:55,name:'Idle Breakout',icon:'🧱',category:'Idle',url:'https://www.crazygames.com/game/idle-breakout'},
{id:56,name:'Factory Balls',icon:'🎨',category:'Puzzle',url:'https://www.coolmathgames.com/0-factory-balls'},
{id:57,name:'Candy Jump',icon:'🍭',category:'Arcade',url:'https://www.crazygames.com/game/candy-jump'},
{id:58,name:'Crazy Cattle 3D',icon:'🐄',category:'Action',url:'https://www.crazygames.com/game/crazy-cattle-3d'},
{id:59,name:'Tag',icon:'🏷️',category:'Party',url:'https://www.crazygames.com/game/tag'},
{id:60,name:'Merge Round Racers',icon:'🚗',category:'Idle',url:'https://www.crazygames.com/game/merge-round-racers'}
];
const APPS = [
{name:'YouTube',icon:'📺',url:'https://www.youtube.com'},
{name:'Discord',icon:'💬',url:'https://discord.com/app'},
{name:'TikTok',icon:'🎵',url:'https://www.tiktok.com'},
{name:'Spotify',icon:'🎧',url:'https://open.spotify.com'},
{name:'Reddit',icon:'🤖',url:'https://www.reddit.com'},
{name:'Twitch',icon:'🟣',url:'https://www.twitch.tv'},
{name:'Netflix',icon:'🎬',url:'https://www.netflix.com'},
{name:'ChatGPT',icon:'🤖',url:'https://chat.openai.com'},
{name:'Google',icon:'🔍',url:'https://www.google.com'},
{name:'Wikipedia',icon:'📖',url:'https://www.wikipedia.org'},
{name:'GitHub',icon:'💻',url:'https://github.com'},
{name:'Twitter/X',icon:'🐦',url:'https://x.com'}
];
const state = { authenticated:false, isAdmin:false, currentTab:'games', proxyHistory:[], proxyIndex:-1, cloakActive:false, originalTitle:document.title, validKeys:[], customKeys:[], baseKeys:[], mirrorStream:null, btDevice:null };
function loadCustomKeys(){ try{ const r=localStorage.getItem('easya_custom_keys'); return r?JSON.parse(r):[]; }catch{return[];} }
function saveCustomKeys(){ localStorage.setItem('easya_custom_keys', JSON.stringify(state.customKeys)); }
function getAllValidKeys(){ return Array.from(new Set([CONFIG.adminKey, ...state.baseKeys, ...state.customKeys, ...CONFIG.fallbackKeys])); }
function isValidKey(key){ const n=normalizeKey(key); if(n===normalizeKey(CONFIG.adminKey)) return true; return getAllValidKeys().some(k=>normalizeKey(k)===n); }
function isAdminKey(key){ return normalizeKey(key)===normalizeKey(CONFIG.adminKey); }
async function loadKeysFromRepo(){
  try{
    const res=await fetch('keys.json?t='+Date.now());
    if(!res.ok) throw new Error('fail');
    const data=await res.json();
    state.baseKeys=(data.keys||[]).map(k=>String(k).toUpperCase());
    if(data.adminKey) CONFIG.adminKey=String(data.adminKey).toUpperCase();
  }catch(e){ state.baseKeys=[...CONFIG.fallbackKeys]; }
  state.customKeys=loadCustomKeys().map(k=>String(k).toUpperCase());
  state.validKeys=getAllValidKeys();
}
document.addEventListener('DOMContentLoaded', async ()=>{
  await loadKeysFromRepo();
  if(sessionStorage.getItem('easya_auth')==='true'){
    state.isAdmin=sessionStorage.getItem('easya_admin')==='true';
    skipToApp();
  } else startHelpCountdown();
  setupKeyForm(); setupNavigation(); setupGames(); setupApps(); setupProxy();
  setupSettings(); setupPanicKey(); setupCloak(); setupAdminPanel(); setupMirror();
});
function startHelpCountdown(){
  const el=document.getElementById('countdown'); let r=30;
  const i=setInterval(()=>{ r--; if(el) el.textContent=r; if(r<=0){ clearInterval(i); transitionToAuth(); } },1000);
}
function transitionToAuth(){
  const h=document.getElementById('help-site'), a=document.getElementById('auth-layer');
  h.style.transition='opacity 0.8s'; h.style.opacity='0';
  setTimeout(()=>{ h.classList.add('hidden'); a.classList.remove('hidden'); document.title='EasyA | Secure Access'; },800);
}
function skipToApp(){
  document.getElementById('help-site').classList.add('hidden');
  document.getElementById('auth-layer').classList.add('hidden');
  document.getElementById('main-app').classList.remove('hidden');
  state.authenticated=true;
  document.title=state.isAdmin?'EasyA | Admin':'EasyA';
  if(state.isAdmin) showAdminNav();
}
function setupKeyForm(){
  const form=document.getElementById('key-form'), input=document.getElementById('access-key'), btn=document.getElementById('unlock-btn');
  input.addEventListener('input', e=>{
    let raw=e.target.value.toUpperCase();
    if(normalizeKey(raw).startsWith('SUBRESTI') || raw.includes('SUB-RESTI')){
      e.target.value=raw.replace(/[^A-Z0-9-]/g,''); return;
    }
    let val=raw.replace(/[^A-Za-z0-9]/g,''); let f='';
    for(let i=0;i<val.length&&i<16;i++){ if(i>0&&i%4===0) f+='-'; f+=val[i]; }
    e.target.value=f;
  });
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const key=input.value.trim().toUpperCase();
    if(!key){ showKeyStatus('Please enter an access key','error'); return; }
    btn.disabled=true;
    document.querySelector('.btn-text').classList.add('hidden');
    document.querySelector('.btn-loader').classList.remove('hidden');
    await new Promise(r=>setTimeout(r,700));
    const admin=isAdminKey(key), valid=admin||isValidKey(key);
    if(valid){
      if(admin){ showKeyStatus('✓ ADMIN KEY ACCEPTED. Full access granted.','success'); state.isAdmin=true; sessionStorage.setItem('easya_admin','true'); }
      else showKeyStatus('✓ Key validated. Initializing proxy chain...','success');
      await new Promise(r=>setTimeout(r,800));
      showKeyStatus(admin?'✓ Admin panel unlocked. Welcome, Operator.':'✓ Proxy nodes online. Welcome to EasyA.','success');
      await new Promise(r=>setTimeout(r,500));
      sessionStorage.setItem('easya_auth','true');
      unlockApp();
    } else {
      showKeyStatus('✗ Invalid key. Access denied.','error');
      btn.disabled=false;
      document.querySelector('.btn-text').classList.remove('hidden');
      document.querySelector('.btn-loader').classList.add('hidden');
    }
  });
}
function showKeyStatus(msg,type){ const s=document.getElementById('key-status'); s.textContent=msg; s.className='key-status '+type; }
function unlockApp(){
  const a=document.getElementById('auth-layer'), m=document.getElementById('main-app');
  a.style.opacity='0';
  setTimeout(()=>{ a.classList.add('hidden'); m.classList.remove('hidden'); state.authenticated=true;
    document.title=state.isAdmin?'EasyA | Admin':'EasyA';
    const d=document.querySelector('.status-dot'); if(d) d.style.background='var(--success)';
    if(state.isAdmin) showAdminNav();
  },500);
}
function showAdminNav(){ const b=document.getElementById('admin-nav-btn'); if(b) b.classList.remove('hidden'); }
function setupAdminPanel(){
  const addBtn=document.getElementById('add-key-btn'); if(!addBtn) return;
  const newInput=document.getElementById('new-key-input');
  document.getElementById('gen-key-btn').addEventListener('click', ()=>{
    const c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let k='';
    for(let i=0;i<16;i++){ if(i>0&&i%4===0) k+='-'; k+=c[Math.floor(Math.random()*c.length)]; }
    newInput.value=k;
  });
  addBtn.addEventListener('click', ()=>{
    const key=newInput.value.trim().toUpperCase();
    if(!key||normalizeKey(key).length<8){ showAdminStatus('Enter a valid key','error'); return; }
    if(isValidKey(key)){ showAdminStatus('Key already exists','error'); return; }
    state.customKeys.push(key); saveCustomKeys(); state.validKeys=getAllValidKeys();
    newInput.value=''; showAdminStatus('✓ Key added: '+key,'success'); renderKeysList(); updateAdminStats();
  });
  document.getElementById('key-filter').addEventListener('input', e=>renderKeysList(e.target.value));
  document.getElementById('export-keys-btn').addEventListener('click', ()=>{
    const payload={ adminKey:CONFIG.adminKey, keys:getAllValidKeys().filter(k=>!isAdminKey(k)), exportedAt:new Date().toISOString() };
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='easya-keys-export.json'; a.click();
    showAdminStatus('✓ Exported','success');
  });
  document.getElementById('import-keys-btn').addEventListener('click', ()=>document.getElementById('import-file').click());
  document.getElementById('import-file').addEventListener('change', async e=>{
    try{
      const data=JSON.parse(await e.target.files[0].text()); let added=0;
      (data.keys||[]).forEach(k=>{ const up=String(k).toUpperCase(); if(!isValidKey(up)){ state.customKeys.push(up); added++; } });
      saveCustomKeys(); state.validKeys=getAllValidKeys(); renderKeysList(); updateAdminStats();
      showAdminStatus('✓ Imported '+added,'success');
    }catch{ showAdminStatus('Invalid JSON','error'); }
  });
  document.getElementById('reset-keys-btn').addEventListener('click', async ()=>{
    if(!confirm('Reset?')) return; state.customKeys=[]; saveCustomKeys(); await loadKeysFromRepo(); renderKeysList(); updateAdminStats();
  });
  document.getElementById('clear-custom-btn').addEventListener('click', ()=>{
    if(!confirm('Clear custom?')) return; state.customKeys=[]; saveCustomKeys(); state.validKeys=getAllValidKeys(); renderKeysList(); updateAdminStats();
  });
}
function showAdminStatus(msg,type){ const el=document.getElementById('admin-add-status'); if(el){ el.textContent=msg; el.className='key-status '+type; } }
function updateAdminStats(){
  const c=document.getElementById('key-count'), u=document.getElementById('custom-count');
  if(c) c.textContent=getAllValidKeys().length; if(u) u.textContent=state.customKeys.length;
}
function renderKeysList(filter=''){
  const list=document.getElementById('keys-list'); if(!list) return;
  const all=getAllValidKeys();
  const filtered=filter?all.filter(k=>k.toUpperCase().includes(filter.toUpperCase())||normalizeKey(k).includes(normalizeKey(filter))):all;
  list.innerHTML=filtered.map(key=>{
    const adm=isAdminKey(key), cust=state.customKeys.some(c=>normalizeKey(c)===normalizeKey(key));
    let b=''; if(adm) b+='<span class="key-badge admin-badge-sm">ADMIN</span>'; if(cust) b+='<span class="key-badge custom-badge">CUSTOM</span>';
    const del=(cust&&!adm)?`<button class="delete-key-btn" data-key="${key}">✕</button>`:'';
    return `<div class="key-row ${cust?'custom':''}"><span class="key-text">${key}${b}</span>${del}</div>`;
  }).join('')||'<p style="color:var(--text-muted);padding:1rem">No keys</p>';
  list.querySelectorAll('.delete-key-btn').forEach(btn=>btn.addEventListener('click', ()=>{
    state.customKeys=state.customKeys.filter(k=>normalizeKey(k)!==normalizeKey(btn.dataset.key));
    saveCustomKeys(); state.validKeys=getAllValidKeys(); renderKeysList(document.getElementById('key-filter').value); updateAdminStats();
  }));
  updateAdminStats();
}
function setupNavigation(){
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click', ()=>{
    switchTab(btn.dataset.tab);
    if(btn.dataset.tab==='admin'&&state.isAdmin){ renderKeysList(); updateAdminStats(); }
  }));
  document.getElementById('logout-btn').addEventListener('click', ()=>{ sessionStorage.removeItem('easya_auth'); sessionStorage.removeItem('easya_admin'); location.reload(); });
  document.getElementById('fullscreen-btn').addEventListener('click', ()=>{ if(!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen(); });
}
function switchTab(tab){
  state.currentTab=tab;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const ab=document.querySelector(`[data-tab="${tab}"]`); if(ab) ab.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  const panel=document.getElementById(tab+'-tab'); if(panel) panel.classList.add('active');
}
function setupGames(){
  const grid=document.getElementById('games-grid'), search=document.getElementById('game-search');
  function render(f=''){
    const list=GAMES.filter(g=>g.name.toLowerCase().includes(f.toLowerCase())||g.category.toLowerCase().includes(f.toLowerCase()));
    grid.innerHTML=list.map(g=>`<div class="game-card" data-url="${g.url}" data-name="${g.name}"><div class="game-thumb">${g.icon}</div><div class="game-info"><h3>${g.name}</h3><span>${g.category}</span></div></div>`).join('');
    grid.querySelectorAll('.game-card').forEach(c=>c.addEventListener('click', ()=>openGame(c.dataset.name,c.dataset.url)));
  }
  render(); search.addEventListener('input', e=>render(e.target.value));
  document.getElementById('game-close').addEventListener('click', closeGame);
  document.getElementById('game-fullscreen').addEventListener('click', ()=>{ const f=document.getElementById('game-frame'); if(f.requestFullscreen) f.requestFullscreen(); });
}
function openGame(name,url){ document.getElementById('game-title').textContent=name; document.getElementById('game-frame').src=url; document.getElementById('game-modal').classList.remove('hidden'); }
function closeGame(){ document.getElementById('game-frame').src='about:blank'; document.getElementById('game-modal').classList.add('hidden'); }
function setupApps(){
  const grid=document.getElementById('apps-grid');
  grid.innerHTML=APPS.map(a=>`<div class="app-card" data-url="${a.url}"><div class="app-icon">${a.icon}</div><h3>${a.name}</h3></div>`).join('');
  grid.querySelectorAll('.app-card').forEach(c=>c.addEventListener('click', ()=>{ switchTab('proxy'); document.getElementById('proxy-url').value=c.dataset.url; navigateProxy(c.dataset.url); }));
}
function setupProxy(){
  const go=document.getElementById('proxy-go'), input=document.getElementById('proxy-url'), overlay=document.getElementById('proxy-overlay');
  go.addEventListener('click', ()=>{
    let url=input.value.trim(); if(!url) return;
    if(!url.startsWith('http')){ if(url.includes('.')&&!url.includes(' ')) url='https://'+url; else url='https://www.google.com/search?q='+encodeURIComponent(url); }
    navigateProxy(url);
  });
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') go.click(); });
  document.getElementById('proxy-back').addEventListener('click', ()=>{ if(state.proxyIndex>0){ state.proxyIndex--; loadProxyUrl(state.proxyHistory[state.proxyIndex]); } });
  document.getElementById('proxy-forward').addEventListener('click', ()=>{ if(state.proxyIndex<state.proxyHistory.length-1){ state.proxyIndex++; loadProxyUrl(state.proxyHistory[state.proxyIndex]); } });
  document.getElementById('proxy-reload').addEventListener('click', ()=>{ if(state.proxyHistory[state.proxyIndex]) loadProxyUrl(state.proxyHistory[state.proxyIndex]); });
  document.getElementById('proxy-home').addEventListener('click', ()=>{ document.getElementById('proxy-frame').src='about:blank'; overlay.classList.remove('hidden'); });
  document.getElementById('proxy-inspect').addEventListener('click', ()=>alert('Inspect unlocked. F12 or right-click.'));
}
function navigateProxy(url){ state.proxyHistory=state.proxyHistory.slice(0,state.proxyIndex+1); state.proxyHistory.push(url); state.proxyIndex=state.proxyHistory.length-1; loadProxyUrl(url); }
function loadProxyUrl(url){
  const frame=document.getElementById('proxy-frame'), overlay=document.getElementById('proxy-overlay');
  const eng=document.getElementById('proxy-engine').value;
  overlay.classList.remove('hidden');
  overlay.querySelector('p').textContent='Initializing complex proxy chain...';
  overlay.querySelector('.proxy-detail').textContent='Routing via '+(CONFIG.proxyEngines[eng]?.name||eng);
  setTimeout(()=>{ frame.src=url; setTimeout(()=>overlay.classList.add('hidden'),500); document.getElementById('proxy-url').value=url; },1200);
}
function setupMirror(){
  const bt=document.getElementById('bt-connect-btn'); if(!bt) return;
  bt.addEventListener('click', connectBluetooth);
  document.getElementById('cast-screen-btn').addEventListener('click', startScreenCast);
  document.getElementById('stop-mirror-btn').addEventListener('click', stopMirror);
}
function showMirrorStatus(msg,type){ const el=document.getElementById('mirror-status'); if(el){ el.textContent=msg; el.className='key-status '+(type||''); } }
async function connectBluetooth(){
  if(!navigator.bluetooth){ showMirrorStatus('Web Bluetooth not supported. Use Chrome/Edge on desktop or Android.','error'); return; }
  try{
    showMirrorStatus('Requesting Bluetooth device...','');
    const device=await navigator.bluetooth.requestDevice({ acceptAllDevices:true, optionalServices:['battery_service','device_information','generic_access'] });
    state.btDevice=device;
    let info='Device: '+(device.name||'Unnamed')+' · ID: '+device.id;
    try{
      const server=await device.gatt.connect();
      info+=' · GATT connected';
      try{
        const bat=await server.getPrimaryService('battery_service');
        const ch=await bat.getCharacteristic('battery_level');
        const v=await ch.readValue();
        info+=' · Battery: '+v.getUint8(0)+'%';
      }catch(_){}
    }catch(_){ info+=' · paired in browser'; }
    document.getElementById('bt-device-info').textContent=info;
    showMirrorStatus('✓ Bluetooth connected: '+(device.name||'device'),'success');
  }catch(err){
    showMirrorStatus(err.name==='NotFoundError'?'No device selected':'Bluetooth error: '+err.message,'error');
  }
}
async function startScreenCast(){
  try{
    if(!navigator.mediaDevices?.getDisplayMedia){ showMirrorStatus('Screen Capture not supported','error'); return; }
    showMirrorStatus('Select a screen or window...','');
    const stream=await navigator.mediaDevices.getDisplayMedia({ video:{ cursor:'always' }, audio:false });
    state.mirrorStream=stream;
    const video=document.getElementById('mirror-video'), ph=document.getElementById('mirror-placeholder');
    video.srcObject=stream; video.classList.add('active'); if(ph) ph.classList.add('hidden');
    stream.getVideoTracks()[0].addEventListener('ended', stopMirror);
    showMirrorStatus('✓ Screen cast active','success');
  }catch(err){
    showMirrorStatus(err.name==='NotAllowedError'?'Permission denied':'Cast error: '+err.message,'error');
  }
}
function stopMirror(){
  if(state.mirrorStream){ state.mirrorStream.getTracks().forEach(t=>t.stop()); state.mirrorStream=null; }
  const video=document.getElementById('mirror-video');
  if(video){ video.srcObject=null; video.classList.remove('active'); }
  const ph=document.getElementById('mirror-placeholder'); if(ph) ph.classList.remove('hidden');
  showMirrorStatus('Stream stopped','');
}
function setupSettings(){
  document.getElementById('theme-select').addEventListener('change', e=>{ document.body.className=''; if(e.target.value!=='dark') document.body.classList.add('theme-'+e.target.value); localStorage.setItem('easya_theme',e.target.value); });
  const t=localStorage.getItem('easya_theme'); if(t){ document.getElementById('theme-select').value=t; if(t!=='dark') document.body.classList.add('theme-'+t); }
  document.getElementById('about-blank-btn').addEventListener('click', ()=>{
    const w=window.open('about:blank','_blank');
    if(w){ w.document.write('<!DOCTYPE html><html><head><title>Google Classroom</title><link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png"></head><body style="margin:0"><iframe src="'+location.href+'" style="border:none;width:100%;height:100vh"></iframe></body></html>'); w.document.close(); }
  });
}
function setupCloak(){
  document.getElementById('cloak-btn').addEventListener('click', toggleCloak);
  document.getElementById('cloak-title').addEventListener('change', e=>{ if(state.cloakActive) document.title=e.target.value; });
}
function toggleCloak(){
  state.cloakActive=!state.cloakActive;
  if(state.cloakActive){
    state.originalTitle=document.title;
    document.title=document.getElementById('cloak-title').value||'Google Classroom';
    const icons={ classroom:'https://ssl.gstatic.com/classroom/favicon.png', drive:'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png', docs:'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico', canvas:'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico', schoology:'https://www.schoology.com/sites/default/files/favicon_0.ico' };
    setFavicon(icons[document.getElementById('cloak-icon').value]||icons.classroom);
    document.getElementById('cloak-btn').style.color='var(--success)';
  } else {
    document.title=state.originalTitle||'EasyA'; setFavicon(null); document.getElementById('cloak-btn').style.color='';
  }
}
function setFavicon(url){
  let link=document.querySelector("link[rel*='icon']");
  if(!link){ link=document.createElement('link'); link.rel='icon'; document.head.appendChild(link); }
  link.href=url||"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>";
}
function setupPanicKey(){
  document.addEventListener('keydown', e=>{ const k=document.getElementById('panic-key').value||'`'; if(e.key===k) location.href='https://classroom.google.com'; });
}
console.log('%c EasyA ','background:#7c3aed;color:#fff;padding:4px 8px');
console.log('%c Admin: SUB-RESTI-1738 ','background:#dc2626;color:#fff;padding:2px 6px');
