/**
 * EasyA — type "ridgehigh" or "awesome" anywhere to open the admin portal.
 * Works on the shell site even if app.js is incomplete.
 */
(function () {
  var TARGETS = ['ridgehigh', 'awesome'];
  var buffer = '';
  var maxLen = Math.max.apply(null, TARGETS.map(function (t) { return t.length; }));

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

    if (typeof openWinWindow === 'function') { try { openWinWindow('win-keys-window'); } catch (e) {} }
    if (typeof renderKeysList === 'function') { try { renderKeysList(); } catch (e) {} }
    if (typeof updateAdminStats === 'function') { try { updateAdminStats(); } catch (e) {} }
    if (typeof showAdminNav === 'function') { try { showAdminNav(); } catch (e) {} }

    console.log('%c ' + (via || 'code') + ' → Admin portal ', 'background:#7c3aed;color:#fff;padding:4px 8px');
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
