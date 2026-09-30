/* EasyA Windows 10 Admin Desktop */
const WIN_BG_PRESETS = [
  { id:'bloom', name:'Bloom', css:'linear-gradient(135deg,#1a3a5c 0%,#0d2137 40%,#1b4f72 100%)' },
  { id:'hero', name:'Hero', css:'linear-gradient(160deg,#0078d4 0%,#004e8c 50%,#001a33 100%)' },
  { id:'light', name:'Light Bloom', css:'linear-gradient(135deg,#5b9bd5 0%,#9dc3e6 50%,#deeaf6 100%)' },
  { id:'purple', name:'EasyA Night', css:'linear-gradient(135deg,#2e1065 0%,#4c1d95 40%,#7c3aed 100%)' },
  { id:'dark', name:'Dark Mode', css:'linear-gradient(180deg,#0a0a0f 0%,#1a1a25 100%)' },
  { id:'img1', name:'Windows Flow', url:'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80' },
  { id:'img2', name:'Abstract Blue', url:'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80' },
  { id:'img3', name:'Mountain', url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80' }
];
function loadAdminCustom(){
  try{ state.adminSites = JSON.parse(localStorage.getItem('easya_admin_sites')||'[]'); }catch{ state.adminSites=[]; }
  try{ state.adminGames = JSON.parse(localStorage.getItem('easya_admin_games')||'[]'); }catch{ state.adminGames=[]; }
}
function saveAdminSites(){ localStorage.setItem('easya_admin_sites', JSON.stringify(state.adminSites)); }
function saveAdminGames(){ localStorage.setItem('easya_admin_games', JSON.stringify(state.adminGames)); }
function applyWinWallpaper(presetOrUrl){
  const el = document.getElementById('win-wallpaper');
  if(!el) return;
  if(typeof presetOrUrl === 'string' && (presetOrUrl.startsWith('http') || presetOrUrl.startsWith('data:'))){
    el.style.background = 'center/cover no-repeat url('+JSON.stringify(presetOrUrl)+')';
    localStorage.setItem('easya_win_bg', JSON.stringify({ type:'url', value: presetOrUrl }));
  } else {
    const p = WIN_BG_PRESETS.find(x => x.id === presetOrUrl) || WIN_BG_PRESETS[0];
    if(p.url){
      el.style.background = 'center/cover no-repeat url('+JSON.stringify(p.url)+')';
      localStorage.setItem('easya_win_bg', JSON.stringify({ type:'preset', value: p.id }));
    } else {
      el.style.background = p.css;
      localStorage.setItem('easya_win_bg', JSON.stringify({ type:'preset', value: p.id }));
    }
  }
  document.querySelectorAll('.win-bg-preset').forEach(b => {
    b.classList.toggle('active', b.dataset.id === (typeof presetOrUrl === 'string' && !presetOrUrl.startsWith('http') ? presetOrUrl : ''));
  });
}
function restoreWinWallpaper(){
  try{
    const raw = localStorage.getItem('easya_win_bg');
    if(!raw){ applyWinWallpaper('bloom'); return; }
    const data = JSON.parse(raw);
    if(data.type === 'url') applyWinWallpaper(data.value);
    else applyWinWallpaper(data.value || 'bloom');
  }catch{ applyWinWallpaper('bloom'); }
}
function openWinWindow(id){
  document.querySelectorAll('.win-window').forEach(w => w.classList.add('hidden'));
  const w = document.getElementById(id);
  if(w) w.classList.remove('hidden');
  document.getElementById('win-start-menu')?.classList.add('hidden');
  if(id === 'win-keys-window'){ renderKeysList(); updateAdminStats(); }
  if(id === 'win-sites-window') renderAdminSites();
  if(id === 'win-games-window') renderAdminGames();
  if(id === 'win-bg-window') renderBgPresets();
}
function closeWinWindow(id){
  document.getElementById(id)?.classList.add('hidden');
}
function toggleStartMenu(){
  const m = document.getElementById('win-start-menu');
  if(!m) return;
  m.classList.toggle('hidden');
}
function winAction(action){
  if(action === 'keys') openWinWindow('win-keys-window');
  else if(action === 'sites') openWinWindow('win-sites-window');
  else if(action === 'games') openWinWindow('win-games-window');
  else if(action === 'bg') openWinWindow('win-bg-window');
  else if(action === 'shutdown'){
    document.getElementById('win-start-menu')?.classList.add('hidden');
    if(confirm('Shut down EasyA admin session? You will be logged out.')){
      sessionStorage.removeItem('easya_auth');
      sessionStorage.removeItem('easya_admin');
      location.reload();
    }
  }
  else if(action === 'logout'){
    sessionStorage.removeItem('easya_auth');
    sessionStorage.removeItem('easya_admin');
    location.reload();
  }
}
function renderBgPresets(){
  const box = document.getElementById('win-bg-presets');
  if(!box) return;
  box.innerHTML = WIN_BG_PRESETS.map(p => {
    const bg = p.url ? 'url('+p.url+') center/cover' : p.css;
    return '<div class="win-bg-preset" data-id="'+p.id+'" style="background:'+bg+'"><span>'+p.name+'</span></div>';
  }).join('');
  box.querySelectorAll('.win-bg-preset').forEach(el => el.addEventListener('click', () => applyWinWallpaper(el.dataset.id)));
}
function renderAdminSites(){
  const list = document.getElementById('admin-sites-list');
  if(!list) return;
  if(!state.adminSites.length){ list.innerHTML = '<p style="color:var(--text-muted)">No custom sites yet.</p>'; return; }
  list.innerHTML = state.adminSites.map((s,i) =>
    '<div class="admin-custom-row"><span class="open-link" data-i="'+i+'">'+s.name+'</span><button data-del="'+i+'">✕</button></div>'
  ).join('');
  list.querySelectorAll('.open-link').forEach(a => a.addEventListener('click', () => {
    const s = state.adminSites[+a.dataset.i];
    if(!s) return;
    switchTab('proxy');
    document.getElementById('proxy-url').value = s.url;
    if(typeof navigateProxy === 'function') navigateProxy(s.url);
  }));
  list.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
    state.adminSites.splice(+b.dataset.del, 1);
    saveAdminSites();
    renderAdminSites();
  }));
}
function renderAdminGames(){
  const list = document.getElementById('admin-games-list');
  if(!list) return;
  if(!state.adminGames.length){ list.innerHTML = '<p style="color:var(--text-muted)">No custom games yet.</p>'; return; }
  list.innerHTML = state.adminGames.map((g,i) =>
    '<div class="admin-custom-row"><span class="open-link" data-i="'+i+'">'+g.name+'</span><button data-del="'+i+'">✕</button></div>'
  ).join('');
  list.querySelectorAll('.open-link').forEach(a => a.addEventListener('click', () => {
    const g = state.adminGames[+a.dataset.i];
    if(g && typeof openGame === 'function') openGame(g.name, g.url);
  }));
  list.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
    state.adminGames.splice(+b.dataset.del, 1);
    saveAdminGames();
    renderAdminGames();
  }));
}
function setupWinDesktop(){
  loadAdminCustom();
  restoreWinWallpaper();
  const eBtn = document.getElementById('win-e-btn');
  if(eBtn) eBtn.addEventListener('click', (ev) => { ev.stopPropagation(); toggleStartMenu(); });
  document.querySelectorAll('[data-win-action]').forEach(el => {
    el.addEventListener('click', () => winAction(el.dataset.winAction));
  });
  document.querySelectorAll('.win-close').forEach(btn => {
    btn.addEventListener('click', () => closeWinWindow(btn.dataset.close));
  });
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('win-start-menu');
    const ebtn = document.getElementById('win-e-btn');
    if(menu && !menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== ebtn){
      menu.classList.add('hidden');
    }
  });
  document.getElementById('add-admin-site-btn')?.addEventListener('click', () => {
    const name = document.getElementById('admin-site-name')?.value.trim();
    const url = document.getElementById('admin-site-url')?.value.trim();
    if(!name || !url) return;
    state.adminSites.push({ name, url });
    saveAdminSites();
    document.getElementById('admin-site-name').value = '';
    document.getElementById('admin-site-url').value = '';
    renderAdminSites();
  });
  document.getElementById('add-admin-game-btn')?.addEventListener('click', () => {
    const name = document.getElementById('admin-game-name')?.value.trim();
    const url = document.getElementById('admin-game-url')?.value.trim();
    if(!name || !url) return;
    state.adminGames.push({ name, url });
    saveAdminGames();
    document.getElementById('admin-game-name').value = '';
    document.getElementById('admin-game-url').value = '';
    renderAdminGames();
  });
  document.getElementById('win-bg-apply-btn')?.addEventListener('click', () => {
    const url = document.getElementById('win-bg-url')?.value.trim();
    if(url) applyWinWallpaper(url);
  });
  function tickClock(){
    const c = document.getElementById('win-clock');
    if(c) c.textContent = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  }
  tickClock();
  setInterval(tickClock, 15000);
}
