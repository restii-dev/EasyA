/**
 * EasyA — type "ridgehigh" or "awesome" → admin + Key Manager window.
 */
(function () {
  var TARGETS = ['ridgehigh', 'awesome'];
  var buffer = '';
  var maxLen = 9;

  function openKeys() {
    function tryOpen() {
      if (typeof openWinWindow === 'function') {
        openWinWindow('win-keys-window');
        return true;
      }
      return false;
    }
    if (!tryOpen()) {
      var n = 0;
      var t = setInterval(function () {
        n++;
        if (tryOpen() || n > 20) clearInterval(t);
      }, 100);
    }
  }

  function goAdmin(via) {
    try {
      sessionStorage.setItem('easya_auth', 'true');
      sessionStorage.setItem('easya_admin', 'true');
    } catch (e) {}

    var help = document.getElementById('help-site');
    var auth = document.getElementById('auth-layer');
    var main = document.getElementById('main-app');
    var adminBtn = document.getElementById('admin-nav-btn');

    if (help) { help.classList.add('hidden'); help.style.display = 'none'; }
    if (auth) { auth.classList.add('hidden'); auth.style.display = 'none'; }
    if (main) { main.classList.remove('hidden'); main.style.display = ''; }

    if (typeof state !== 'undefined') {
      state.isAdmin = true;
      state.authenticated = true;
    }

    document.title = 'EasyA | Admin';
    if (adminBtn) adminBtn.classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
    var adminNav = document.querySelector('[data-tab="admin"]');
    var adminTab = document.getElementById('admin-tab');
    if (adminNav) adminNav.classList.add('active');
    if (adminTab) adminTab.classList.add('active');

    if (typeof showAdminNav === 'function') { try { showAdminNav(); } catch (e) {} }
    if (typeof setupWinDesktop === 'function') { try { setupWinDesktop(); } catch (e) {} }
    if (typeof setupAdminPanel === 'function') { try { setupAdminPanel(); } catch (e) {} }

    openKeys();
    if (typeof renderKeysList === 'function') { try { renderKeysList(); } catch (e) {} }
    if (typeof updateAdminStats === 'function') { try { updateAdminStats(); } catch (e) {} }

    console.log('%c ' + (via || 'code') + ' → Keys / Admin ', 'background:#7c3aed;color:#fff;padding:4px 8px');
  }

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!e.key || e.key.length !== 1) return;
    buffer = (buffer + e.key.toLowerCase()).slice(-maxLen);
    for (var i = 0; i < TARGETS.length; i++) {
      var t = TARGETS[i];
      if (buffer.slice(-t.length) === t) {
        buffer = '';
        e.preventDefault();
        goAdmin(t);
        return;
      }
    }
  }, true);
})();

/* Auto-load core + Boblox + themes */
(function(){
  function add(rel, tag){
    if(document.querySelector(tag==='link'?'link[href="'+rel+'"]':'script[src="'+rel+'"]')) return;
    var el = document.createElement(tag==='link'?'link':'script');
    if(tag==='link'){ el.rel='stylesheet'; el.href=rel; }
    else { el.src=rel; }
    document.head.appendChild(el);
  }
  add('boblox-admin.css','link');
  add('admin-themes.css','link');
  add('admin-core.js','script');
  setTimeout(function(){ add('admin-themes.js','script'); }, 50);
})();
