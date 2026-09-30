/**
 * EasyA admin-core — works even when app.js is truncated.
 * Key manager, nav switching, Boblox-ready admin helpers.
 */
(function () {
  var CONFIG = window.CONFIG || {
    adminKey: 'SUB-RESTI-1738',
    adminKeys: ['SUB-RESTI-1738', 'DIDDY-AHHH-BLUD-1738'],
    fallbackKeys: ['EASY-A202-6KEY-GEORG','GEOR-GIAH-SKEY-2026','UNBL-OCKD-GAME-EASYA','PROX-YKEY-COMP-LEX1','TEST-KEY1-2345-6789']
  };
  window.CONFIG = CONFIG;

  if (typeof window.state === 'undefined') {
    window.state = {
      authenticated: false,
      isAdmin: false,
      validKeys: [],
      customKeys: [],
      baseKeys: [],
      adminSites: [],
      adminGames: []
    };
  }
  var state = window.state;

  function normalizeKey(k) {
    return String(k || '').replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  }
  window.normalizeKey = normalizeKey;

  function getAllValidKeys() {
    var admins = CONFIG.adminKeys || [CONFIG.adminKey];
    return Array.from(new Set([].concat(admins, state.baseKeys || [], state.customKeys || [], CONFIG.fallbackKeys || [])));
  }
  window.getAllValidKeys = getAllValidKeys;

  function isAdminKey(key) {
    var n = normalizeKey(key);
    var admins = CONFIG.adminKeys || [CONFIG.adminKey];
    return admins.some(function (k) { return normalizeKey(k) === n; });
  }
  window.isAdminKey = isAdminKey;

  function isValidKey(key) {
    var n = normalizeKey(key);
    return getAllValidKeys().some(function (k) { return normalizeKey(k) === n; });
  }
  window.isValidKey = isValidKey;

  function saveCustomKeys() {
    try { localStorage.setItem('easya_custom_keys', JSON.stringify(state.customKeys || [])); } catch (e) {}
  }

  function loadCustomKeys() {
    try {
      state.customKeys = JSON.parse(localStorage.getItem('easya_custom_keys') || '[]');
    } catch (e) { state.customKeys = []; }
  }

  function showAdminNav() {
    var b = document.getElementById('admin-nav-btn');
    if (b) b.classList.remove('hidden');
  }
  window.showAdminNav = showAdminNav;

  function showAdminStatus(msg, type) {
    var el = document.getElementById('admin-add-status');
    if (!el) return;
    el.textContent = msg;
    el.className = 'key-status ' + (type || '');
  }

  function updateAdminStats() {
    var keys = getAllValidKeys();
    var kc = document.getElementById('key-count');
    var cc = document.getElementById('custom-count');
    if (kc) kc.textContent = String(keys.length);
    if (cc) cc.textContent = String((state.customKeys || []).length);
  }
  window.updateAdminStats = updateAdminStats;

  function renderKeysList(filter) {
    filter = (filter || '').toLowerCase();
    var list = document.getElementById('keys-list');
    if (!list) return;
    var keys = getAllValidKeys().filter(function (k) {
      return !filter || k.toLowerCase().indexOf(filter) !== -1;
    });
    if (!keys.length) {
      list.innerHTML = '<p class="admin-empty">No keys found.</p>';
      return;
    }
    list.innerHTML = keys.map(function (k) {
      var admin = isAdminKey(k);
      var custom = (state.customKeys || []).some(function (c) { return normalizeKey(c) === normalizeKey(k); });
      var badge = admin ? '<span class="key-badge admin">ADMIN</span>' : (custom ? '<span class="key-badge custom">CUSTOM</span>' : '<span class="key-badge">BASE</span>');
      var del = custom ? '<button type="button" class="key-del" data-key="' + k + '">✕</button>' : '';
      return '<div class="key-row"><code>' + k + '</code>' + badge + del + '</div>';
    }).join('');
    list.querySelectorAll('.key-del').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = normalizeKey(btn.dataset.key);
        state.customKeys = (state.customKeys || []).filter(function (c) { return normalizeKey(c) !== target; });
        saveCustomKeys();
        renderKeysList(document.getElementById('key-filter') && document.getElementById('key-filter').value);
        updateAdminStats();
      });
    });
  }
  window.renderKeysList = renderKeysList;

  function switchTab(tab) {
    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
    var ab = document.querySelector('[data-tab="' + tab + '"]');
    if (ab) ab.classList.add('active');
    var panel = document.getElementById(tab + '-tab');
    if (panel) panel.classList.add('active');
    if (tab === 'admin') {
      renderKeysList();
      updateAdminStats();
      if (typeof openWinWindow === 'function') {
        try { openWinWindow('win-keys-window'); } catch (e) {}
      }
    }
  }
  window.switchTab = window.switchTab || switchTab;

  function setupAdminPanel() {
    loadCustomKeys();
    state.validKeys = getAllValidKeys();

    var addBtn = document.getElementById('add-key-btn');
    if (!addBtn || addBtn.dataset.bound) return;
    addBtn.dataset.bound = '1';

    var newInput = document.getElementById('new-key-input');
    var genBtn = document.getElementById('gen-key-btn');
    if (genBtn) {
      genBtn.addEventListener('click', function () {
        var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var k = '';
        for (var i = 0; i < 16; i++) {
          if (i > 0 && i % 4 === 0) k += '-';
          k += c[Math.floor(Math.random() * c.length)];
        }
        if (newInput) newInput.value = k;
      });
    }

    addBtn.addEventListener('click', function () {
      var key = (newInput && newInput.value || '').trim().toUpperCase();
      if (!key || normalizeKey(key).length < 8) {
        showAdminStatus('Enter a valid key', 'error');
        return;
      }
      if (isValidKey(key)) {
        showAdminStatus('Key already exists', 'error');
        return;
      }
      state.customKeys = state.customKeys || [];
      state.customKeys.push(key);
      saveCustomKeys();
      state.validKeys = getAllValidKeys();
      if (newInput) newInput.value = '';
      showAdminStatus('✓ Key added: ' + key, 'success');
      renderKeysList();
      updateAdminStats();
    });

    var filter = document.getElementById('key-filter');
    if (filter) filter.addEventListener('input', function (e) { renderKeysList(e.target.value); });

    var exportBtn = document.getElementById('export-keys-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', function () {
        var payload = {
          adminKey: CONFIG.adminKey,
          keys: getAllValidKeys().filter(function (k) { return !isAdminKey(k); }),
          exportedAt: new Date().toISOString()
        };
        var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'easya-keys-export.json';
        a.click();
        showAdminStatus('✓ Exported', 'success');
      });
    }

    var importBtn = document.getElementById('import-keys-btn');
    var importFile = document.getElementById('import-file');
    if (importBtn && importFile) {
      importBtn.addEventListener('click', function () { importFile.click(); });
      importFile.addEventListener('change', function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          try {
            var data = JSON.parse(reader.result);
            var added = 0;
            (data.keys || []).forEach(function (k) {
              var up = String(k).toUpperCase();
              if (!isValidKey(up)) {
                state.customKeys.push(up);
                added++;
              }
            });
            saveCustomKeys();
            state.validKeys = getAllValidKeys();
            renderKeysList();
            updateAdminStats();
            showAdminStatus('✓ Imported ' + added, 'success');
          } catch (err) {
            showAdminStatus('Invalid JSON', 'error');
          }
        };
        reader.readAsText(file);
      });
    }

    var resetBtn = document.getElementById('reset-keys-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (!confirm('Reset custom keys?')) return;
        state.customKeys = [];
        saveCustomKeys();
        renderKeysList();
        updateAdminStats();
        showAdminStatus('✓ Reset', 'success');
      });
    }

    var clearBtn = document.getElementById('clear-custom-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (!confirm('Clear all custom keys?')) return;
        state.customKeys = [];
        saveCustomKeys();
        renderKeysList();
        updateAdminStats();
        showAdminStatus('✓ Cleared custom keys', 'success');
      });
    }

    document.querySelectorAll('.nav-btn[data-tab]').forEach(function (btn) {
      if (btn.dataset.coreBound) return;
      btn.dataset.coreBound = '1';
      btn.addEventListener('click', function () {
        switchTab(btn.dataset.tab);
      });
    });

    var logout = document.getElementById('logout-btn');
    if (logout && !logout.dataset.coreBound) {
      logout.dataset.coreBound = '1';
      logout.addEventListener('click', function () {
        sessionStorage.removeItem('easya_auth');
        sessionStorage.removeItem('easya_admin');
        location.reload();
      });
    }

    updateAdminStats();
  }
  window.setupAdminPanel = setupAdminPanel;

  function boot() {
    loadCustomKeys();
    setupAdminPanel();
    if (sessionStorage.getItem('easya_admin') === 'true') {
      state.isAdmin = true;
      showAdminNav();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
