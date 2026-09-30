/* EasyA — extended themes, accents, density (loads after admin-win.js) */
(function () {
  var EXTRA_PRESETS = [
    { id:'win11-blue', name:'Win11 Blue', css:'linear-gradient(145deg,#0f3d6e 0%,#1a5f9e 40%,#0a2744 100%)' },
    { id:'win11-dark', name:'Win11 Dark', css:'linear-gradient(160deg,#1a1b26 0%,#2d2e3f 50%,#12131a 100%)' },
    { id:'sunset', name:'Sunset', css:'linear-gradient(135deg,#7c2d12 0%,#c2410c 35%,#f59e0b 70%,#1e1b4b 100%)' },
    { id:'forest', name:'Forest', css:'linear-gradient(160deg,#052e16 0%,#14532d 40%,#166534 70%,#0a1628 100%)' },
    { id:'ocean', name:'Ocean', css:'linear-gradient(180deg,#082f49 0%,#0c4a6e 40%,#0369a1 100%)' },
    { id:'rose', name:'Rose', css:'linear-gradient(135deg,#4a044e 0%,#9d174d 45%,#e11d48 100%)' },
    { id:'mono', name:'Mono', css:'linear-gradient(180deg,#0a0a0a 0%,#262626 100%)' },
    { id:'aurora', name:'Aurora', css:'linear-gradient(125deg,#0f172a 0%,#134e4a 30%,#4c1d95 60%,#0f172a 100%)' },
    { id:'img-city', name:'City Night', url:'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&q=80' },
    { id:'img-space', name:'Space', url:'https://images.unsplash.com/photo-1462331940025-496dfbfc8263?w=1600&q=80' },
    { id:'img-waves', name:'Waves', url:'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1600&q=80' },
    { id:'img-neon', name:'Neon Grid', url:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80' }
  ];

  var ACCENTS = [
    { id:'violet', name:'Violet', color:'#7c3aed' },
    { id:'blue', name:'Blue', color:'#3b82f6' },
    { id:'cyan', name:'Cyan', color:'#06b6d4' },
    { id:'green', name:'Green', color:'#22c55e' },
    { id:'amber', name:'Amber', color:'#f59e0b' },
    { id:'rose', name:'Rose', color:'#f43f5e' },
    { id:'pink', name:'Pink', color:'#ec4899' },
    { id:'orange', name:'Orange', color:'#f97316' }
  ];

  if (typeof WIN_BG_PRESETS !== 'undefined' && Array.isArray(WIN_BG_PRESETS)) {
    EXTRA_PRESETS.forEach(function (p) {
      if (!WIN_BG_PRESETS.some(function (x) { return x.id === p.id; })) WIN_BG_PRESETS.push(p);
    });
  }

  function applyAccent(id) {
    var a = ACCENTS.find(function (x) { return x.id === id; }) || ACCENTS[0];
    var desk = document.getElementById('win-desktop');
    if (desk) desk.style.setProperty('--win-accent', a.color);
    document.documentElement.style.setProperty('--win-accent', a.color);
    localStorage.setItem('easya_win_accent', a.id);
    document.querySelectorAll('.win-accent-swatch').forEach(function (s) {
      s.classList.toggle('active', s.dataset.id === a.id);
    });
    var eBtn = document.getElementById('win-e-btn');
    if (eBtn) eBtn.style.background = 'linear-gradient(145deg,' + a.color + ',' + a.color + ')';
  }

  function applyDensity(mode) {
    var desk = document.getElementById('win-desktop');
    if (!desk) return;
    desk.classList.remove('win-density-compact', 'win-density-cozy', 'win-density-large');
    desk.classList.add('win-density-' + (mode || 'cozy'));
    localStorage.setItem('easya_win_density', mode || 'cozy');
    document.querySelectorAll('[data-density]').forEach(function (b) {
      b.classList.toggle('active', b.dataset.density === mode);
    });
  }

  function enhanceBgWindow() {
    var body = document.querySelector('#win-bg-window .win-window-body');
    if (!body || body.dataset.enhanced) return;
    body.dataset.enhanced = '1';

    var title = document.querySelector('#win-bg-window .win-titlebar span');
    if (title) title.textContent = '🖼️ Themes & Customization';

    var desc = body.querySelector('.admin-desc');
    if (desc) desc.textContent = 'Desktop themes, accent color, density, and custom wallpapers. Saved in this browser.';

    if (!document.getElementById('win-accent-presets')) {
      var h2 = document.createElement('h3');
      h2.className = 'win-section-title';
      h2.style.marginTop = '1.25rem';
      h2.textContent = 'Accent color';
      var accents = document.createElement('div');
      accents.id = 'win-accent-presets';
      accents.className = 'win-accent-presets';
      accents.innerHTML = ACCENTS.map(function (a) {
        return '<button type="button" class="win-accent-swatch" data-id="' + a.id + '" title="' + a.name + '" style="background:' + a.color + '"></button>';
      }).join('');
      body.appendChild(h2);
      body.appendChild(accents);
      accents.querySelectorAll('.win-accent-swatch').forEach(function (el) {
        el.addEventListener('click', function () { applyAccent(el.dataset.id); });
      });
    }

    if (!document.querySelector('[data-density]')) {
      var h3 = document.createElement('h3');
      h3.className = 'win-section-title';
      h3.style.marginTop = '1.25rem';
      h3.textContent = 'Icon density';
      var row = document.createElement('div');
      row.className = 'win-density-row';
      row.innerHTML = '<button type="button" class="btn-secondary" data-density="compact">Compact</button>' +
        '<button type="button" class="btn-secondary" data-density="cozy">Cozy</button>' +
        '<button type="button" class="btn-secondary" data-density="large">Large</button>';
      body.appendChild(h3);
      body.appendChild(row);
      row.querySelectorAll('[data-density]').forEach(function (btn) {
        btn.addEventListener('click', function () { applyDensity(btn.dataset.density); });
      });
    }

    applyAccent(localStorage.getItem('easya_win_accent') || 'violet');
    applyDensity(localStorage.getItem('easya_win_density') || 'cozy');
  }

  var origOpen = window.openWinWindow;
  if (typeof origOpen === 'function') {
    window.openWinWindow = function (id) {
      origOpen(id);
      if (id === 'win-bg-window') setTimeout(enhanceBgWindow, 30);
    };
  }

  document.querySelectorAll('[data-win-action="bg"] span').forEach(function (s) {
    s.textContent = 'Themes';
  });
  document.querySelectorAll('.win-start-item[data-win-action="bg"]').forEach(function (b) {
    b.textContent = '🖼️ Themes';
  });

  document.addEventListener('DOMContentLoaded', function () {
    applyAccent(localStorage.getItem('easya_win_accent') || 'violet');
    applyDensity(localStorage.getItem('easya_win_density') || 'cozy');
  });
  if (document.readyState !== 'loading') {
    applyAccent(localStorage.getItem('easya_win_accent') || 'violet');
    applyDensity(localStorage.getItem('easya_win_density') || 'cozy');
  }
})();
