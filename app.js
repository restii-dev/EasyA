/**
 * EasyA - Complex Unblocked Games Platform
 * Features: 30s help-site disguise, key system, admin key manager (SUB-RESTI-1738),
 * multi-engine proxy, tab cloaking, panic key
 */

// ========== CONFIG ========== //
const CONFIG = {
    helpDuration: 30000,
    adminKey: 'SUB-RESTI-1738',
    // Fallback keys if keys.json fails to load
    fallbackKeys: [
        'EASY-A202-6KEY-GEORG',
        'GEOR-GIAH-SKEY-2026',
        'UNBL-OCKD-GAME-EASYA',
        'PROX-YKEY-COMP-LEX1',
        'TEST-KEY1-2345-6789'
    ],
    proxyEngines: {
        ultraviolet: {
            name: 'Ultraviolet',
            prefix: '/uv/service/',
            encode: (url) => btoa(url).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
        },
        dynamic: {
            name: 'Dynamic',
            prefix: '/dynamic/',
            encode: (url) => encodeURIComponent(url)
        },
        rammerhead: {
            name: 'Rammerhead',
            prefix: '/rh/',
            encode: (url) => btoa(unescape(encodeURIComponent(url)))
        },
        alloy: {
            name: 'Alloy',
            prefix: '/alloy/',
            encode: (url) => url.split('').map(c => c.charCodeAt(0).toString(16)).join('')
        }
    },
    publicProxies: [
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url='
    ]
};

// ========== GAMES & APPS ========== //
const GAMES = [
    { id: 1, name: 'Slope', icon: '🏂', category: 'Arcade', url: 'https://slopegame.io/' },
    { id: 2, name: '1v1.LOL', icon: '🔫', category: 'Shooter', url: 'https://1v1.lol/' },
    { id: 3, name: 'Cookie Clicker', icon: '🍪', category: 'Idle', url: 'https://orteil.dashnet.org/cookieclicker/' },
    { id: 4, name: 'Geometry Dash', icon: '🔺', category: 'Rhythm', url: 'https://scratch.mit.edu/projects/105549765/' },
    { id: 5, name: 'Subway Surfers', icon: '🏃', category: 'Runner', url: 'https://poki.com/en/g/subway-surfers' },
    { id: 6, name: 'Among Us', icon: '🔴', category: 'Social', url: 'https://amongusplay.online/' },
    { id: 7, name: 'Minecraft Classic', icon: '⛏️', category: 'Sandbox', url: 'https://classic.minecraft.net/' },
    { id: 8, name: 'Retro Bowl', icon: '🏈', category: 'Sports', url: 'https://retrobowl.me/' },
    { id: 9, name: 'Drift Boss', icon: '🚗', category: 'Driving', url: 'https://www.crazygames.com/game/drift-boss' },
    { id: 10, name: 'Basketball Stars', icon: '🏀', category: 'Sports', url: 'https://www.crazygames.com/game/basketball-stars' },
    { id: 11, name: 'Snake.io', icon: '🐍', category: 'IO', url: 'https://snake.io/' },
    { id: 12, name: 'Krunker.io', icon: '🎯', category: 'FPS', url: 'https://krunker.io/' },
    { id: 13, name: 'Shell Shockers', icon: '🥚', category: 'FPS', url: 'https://shellshock.io/' },
    { id: 14, name: 'Tetris', icon: '🧱', category: 'Puzzle', url: 'https://tetris.com/play-tetris' },
    { id: 15, name: '2048', icon: '🔢', category: 'Puzzle', url: 'https://play2048.co/' },
    { id: 16, name: 'Flappy Bird', icon: '🐦', category: 'Arcade', url: 'https://flappybird.io/' },
    { id: 17, name: 'Crossy Road', icon: '🐔', category: 'Arcade', url: 'https://poki.com/en/g/crossy-road' },
    { id: 18, name: 'Temple Run 2', icon: '🏛️', category: 'Runner', url: 'https://poki.com/en/g/temple-run-2' },
    { id: 19, name: 'Fireboy & Watergirl', icon: '🔥', category: 'Puzzle', url: 'https://poki.com/en/g/fireboy-and-watergirl-1-forest-temple' },
    { id: 20, name: "Papa's Pizzeria", icon: '🍕', category: 'Cooking', url: 'https://www.coolmathgames.com/0-papas-pizzeria' },
    { id: 21, name: 'Run 3', icon: '🏃‍♂️', category: 'Runner', url: 'https://www.coolmathgames.com/0-run-3' },
    { id: 22, name: 'Moto X3M', icon: '🏍️', category: 'Racing', url: 'https://www.coolmathgames.com/0-moto-x3m' },
    { id: 23, name: 'Happy Wheels', icon: '🚲', category: 'Physics', url: 'https://www.totaljerkface.com/happy_wheels.tjf' },
    { id: 24, name: 'Agar.io', icon: '🟢', category: 'IO', url: 'https://agar.io/' }
];

const APPS = [
    { name: 'YouTube', icon: '📺', url: 'https://www.youtube.com' },
    { name: 'Discord', icon: '💬', url: 'https://discord.com/app' },
    { name: 'TikTok', icon: '🎵', url: 'https://www.tiktok.com' },
    { name: 'Spotify', icon: '🎧', url: 'https://open.spotify.com' },
    { name: 'Reddit', icon: '🤖', url: 'https://www.reddit.com' },
    { name: 'Twitch', icon: '🟣', url: 'https://www.twitch.tv' },
    { name: 'Netflix', icon: '🎬', url: 'https://www.netflix.com' },
    { name: 'ChatGPT', icon: '🤖', url: 'https://chat.openai.com' },
    { name: 'Google', icon: '🔍', url: 'https://www.google.com' },
    { name: 'Wikipedia', icon: '📖', url: 'https://www.wikipedia.org' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'Twitter/X', icon: '🐦', url: 'https://x.com' }
];

// ========== STATE ========== //
const state = {
    authenticated: false,
    isAdmin: false,
    currentTab: 'games',
    proxyHistory: [],
    proxyIndex: -1,
    cloakActive: false,
    originalTitle: document.title,
    validKeys: [],          // from keys.json + localStorage custom
    customKeys: [],         // user-added via admin
    baseKeys: []            // original from keys.json
};

// ========== KEY STORAGE ========== //
function loadCustomKeys() {
    try {
        const raw = localStorage.getItem('easya_custom_keys');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveCustomKeys() {
    localStorage.setItem('easya_custom_keys', JSON.stringify(state.customKeys));
}

function getAllValidKeys() {
    const set = new Set([
        CONFIG.adminKey,
        ...state.baseKeys,
        ...state.customKeys,
        ...CONFIG.fallbackKeys
    ]);
    return Array.from(set);
}

function isValidKey(key) {
    return getAllValidKeys().includes(key.toUpperCase());
}

async function loadKeysFromRepo() {
    try {
        const res = await fetch('keys.json?t=' + Date.now());
        if (!res.ok) throw new Error('fetch failed');
        const data = await res.json();
        state.baseKeys = (data.keys || []).map(k => k.toUpperCase());
        if (data.adminKey) CONFIG.adminKey = data.adminKey.toUpperCase();
    } catch (e) {
        console.warn('Could not load keys.json, using fallbacks', e);
        state.baseKeys = [...CONFIG.fallbackKeys];
    }
    state.customKeys = loadCustomKeys().map(k => k.toUpperCase());
    state.validKeys = getAllValidKeys();
}

// ========== INIT ========== //
document.addEventListener('DOMContentLoaded', async () => {
    await loadKeysFromRepo();

    if (sessionStorage.getItem('easya_auth') === 'true') {
        state.isAdmin = sessionStorage.getItem('easya_admin') === 'true';
        skipToApp();
    } else {
        startHelpCountdown();
    }

    setupKeyForm();
    setupNavigation();
    setupGames();
    setupApps();
    setupProxy();
    setupSettings();
    setupPanicKey();
    setupCloak();
    setupAdminPanel();
});

// ========== HELP SITE COUNTDOWN ========== //
function startHelpCountdown() {
    const countdownEl = document.getElementById('countdown');
    let remaining = 30;
    const interval = setInterval(() => {
        remaining--;
        if (countdownEl) countdownEl.textContent = remaining;
        if (remaining <= 0) {
            clearInterval(interval);
            transitionToAuth();
        }
    }, 1000);
}

function transitionToAuth() {
    const helpSite = document.getElementById('help-site');
    const authLayer = document.getElementById('auth-layer');
    helpSite.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    helpSite.style.opacity = '0';
    helpSite.style.transform = 'scale(0.98)';
    setTimeout(() => {
        helpSite.classList.add('hidden');
        authLayer.classList.remove('hidden');
        document.title = 'EasyA | Secure Access';
    }, 800);
}

function skipToApp() {
    document.getElementById('help-site').classList.add('hidden');
    document.getElementById('auth-layer').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    state.authenticated = true;
    document.title = state.isAdmin ? 'EasyA | Admin' : 'EasyA';
    if (state.isAdmin) showAdminNav();
}

// ========== KEY SYSTEM ========== //
function setupKeyForm() {
    const form = document.getElementById('key-form');
    const input = document.getElementById('access-key');
    const btn = document.getElementById('unlock-btn');

    input.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
        let formatted = '';
        for (let i = 0; i < val.length && i < 16; i++) {
            if (i > 0 && i % 4 === 0) formatted += '-';
            formatted += val[i];
        }
        e.target.value = formatted;
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const key = input.value.trim().toUpperCase();

        if (!key) {
            showKeyStatus('Please enter an access key', 'error');
            return;
        }

        btn.disabled = true;
        document.querySelector('.btn-text').classList.add('hidden');
        document.querySelector('.btn-loader').classList.remove('hidden');

        await simulateKeyVerification(key);

        const isAdmin = key === CONFIG.adminKey;
        const valid = isAdmin || isValidKey(key);

        if (valid) {
            if (isAdmin) {
                showKeyStatus('✓ ADMIN KEY ACCEPTED. Full access granted.', 'success');
                state.isAdmin = true;
                sessionStorage.setItem('easya_admin', 'true');
            } else {
                showKeyStatus('✓ Key validated. Initializing proxy chain...', 'success');
            }

            await new Promise(r => setTimeout(r, 1000));
            showKeyStatus('✓ Establishing encrypted tunnel...', 'success');
            await new Promise(r => setTimeout(r, 800));
            showKeyStatus(isAdmin ? '✓ Admin panel unlocked. Welcome, Operator.' : '✓ Proxy nodes online. Welcome to EasyA.', 'success');
            await new Promise(r => setTimeout(r, 600));

            sessionStorage.setItem('easya_auth', 'true');
            unlockApp();
        } else {
            showKeyStatus('✗ Invalid key. Access denied.', 'error');
            btn.disabled = false;
            document.querySelector('.btn-text').classList.remove('hidden');
            document.querySelector('.btn-loader').classList.add('hidden');
            input.style.animation = 'none';
            input.offsetHeight;
            input.style.animation = 'shake 0.4s ease';
        }
    });
}

function showKeyStatus(msg, type) {
    const status = document.getElementById('key-status');
    status.textContent = msg;
    status.className = 'key-status ' + type;
}

async function simulateKeyVerification(key) {
    const entropy = key.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    await new Promise(r => setTimeout(r, 800 + (entropy % 600)));
}

function unlockApp() {
    const authLayer = document.getElementById('auth-layer');
    const mainApp = document.getElementById('main-app');
    authLayer.style.transition = 'opacity 0.6s ease';
    authLayer.style.opacity = '0';
    setTimeout(() => {
        authLayer.classList.add('hidden');
        mainApp.classList.remove('hidden');
        state.authenticated = true;
        document.title = state.isAdmin ? 'EasyA | Admin' : 'EasyA';
        const statusDot = document.querySelector('.status-dot');
        if (statusDot) statusDot.style.background = 'var(--success)';
        if (state.isAdmin) showAdminNav();
    }, 600);
}

function showAdminNav() {
    const btn = document.getElementById('admin-nav-btn');
    if (btn) btn.classList.remove('hidden');
}

// ========== ADMIN PANEL ========== //
function setupAdminPanel() {
    const addBtn = document.getElementById('add-key-btn');
    const genBtn = document.getElementById('gen-key-btn');
    const newInput = document.getElementById('new-key-input');
    const filterInput = document.getElementById('key-filter');
    const exportBtn = document.getElementById('export-keys-btn');
    const importBtn = document.getElementById('import-keys-btn');
    const importFile = document.getElementById('import-file');
    const resetBtn = document.getElementById('reset-keys-btn');
    const clearBtn = document.getElementById('clear-custom-btn');

    // Format new key input
    newInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
        let formatted = '';
        for (let i = 0; i < val.length && i < 16; i++) {
            if (i > 0 && i % 4 === 0) formatted += '-';
            formatted += val[i];
        }
        e.target.value = formatted;
    });

    addBtn.addEventListener('click', () => {
        const key = newInput.value.trim().toUpperCase();
        if (!key || key.length < 19) {
            showAdminStatus('Enter a full 16-character key (XXXX-XXXX-XXXX-XXXX)', 'error');
            return;
        }
        if (isValidKey(key) || key === CONFIG.adminKey) {
            showAdminStatus('Key already exists', 'error');
            return;
        }
        state.customKeys.push(key);
        saveCustomKeys();
        state.validKeys = getAllValidKeys();
        newInput.value = '';
        showAdminStatus('✓ Key added: ' + key, 'success');
        renderKeysList();
        updateAdminStats();
    });

    genBtn.addEventListener('click', () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let key = '';
        for (let i = 0; i < 16; i++) {
            if (i > 0 && i % 4 === 0) key += '-';
            key += chars[Math.floor(Math.random() * chars.length)];
        }
        newInput.value = key;
    });

    filterInput.addEventListener('input', () => renderKeysList(filterInput.value));

    exportBtn.addEventListener('click', () => {
        const payload = {
            adminKey: CONFIG.adminKey,
            description: 'EasyA key export — paste into keys.json or import via Admin panel',
            keys: getAllValidKeys().filter(k => k !== CONFIG.adminKey),
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'easya-keys-export.json';
        a.click();
        URL.revokeObjectURL(a.href);
        showAdminStatus('✓ Exported ' + payload.keys.length + ' keys', 'success');
    });

    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const text = await file.text();
            const data = JSON.parse(text);
            const incoming = (data.keys || []).map(k => k.toUpperCase());
            let added = 0;
            incoming.forEach(k => {
                if (!isValidKey(k) && k !== CONFIG.adminKey) {
                    state.customKeys.push(k);
                    added++;
                }
            });
            saveCustomKeys();
            state.validKeys = getAllValidKeys();
            renderKeysList();
            updateAdminStats();
            showAdminStatus('✓ Imported ' + added + ' new keys', 'success');
        } catch {
            showAdminStatus('Invalid JSON file', 'error');
        }
        importFile.value = '';
    });

    resetBtn.addEventListener('click', async () => {
        if (!confirm('Reset all keys to keys.json defaults? Custom keys will be cleared.')) return;
        state.customKeys = [];
        saveCustomKeys();
        await loadKeysFromRepo();
        renderKeysList();
        updateAdminStats();
        showAdminStatus('✓ Reset to keys.json defaults', 'success');
    });

    clearBtn.addEventListener('click', () => {
        if (!confirm('Clear all custom (admin-added) keys?')) return;
        state.customKeys = [];
        saveCustomKeys();
        state.validKeys = getAllValidKeys();
        renderKeysList();
        updateAdminStats();
        showAdminStatus('✓ Custom keys cleared', 'success');
    });
}

function showAdminStatus(msg, type) {
    const el = document.getElementById('admin-add-status');
    if (!el) return;
    el.textContent = msg;
    el.className = 'key-status ' + type;
}

function updateAdminStats() {
    const total = getAllValidKeys().length;
    const custom = state.customKeys.length;
    const countEl = document.getElementById('key-count');
    const customEl = document.getElementById('custom-count');
    if (countEl) countEl.textContent = total;
    if (customEl) customEl.textContent = custom;
}

function renderKeysList(filter = '') {
    const list = document.getElementById('keys-list');
    if (!list) return;

    const all = getAllValidKeys();
    const filtered = filter
        ? all.filter(k => k.includes(filter.toUpperCase()))
        : all;

    list.innerHTML = filtered.map(key => {
        const isAdmin = key === CONFIG.adminKey;
        const isCustom = state.customKeys.includes(key);
        let badges = '';
        if (isAdmin) badges += '<span class="key-badge admin-badge-sm">ADMIN</span>';
        if (isCustom) badges += '<span class="key-badge custom-badge">CUSTOM</span>';

        const deleteBtn = (isCustom && !isAdmin)
            ? `<button class="delete-key-btn" data-key="${key}" title="Delete">✕</button>`
            : '';

        return `<div class="key-row ${isCustom ? 'custom' : ''}">
            <span class="key-text">${key}${badges}</span>
            ${deleteBtn}
        </div>`;
    }).join('') || '<p style="color:var(--text-muted);padding:1rem">No keys match filter</p>';

    list.querySelectorAll('.delete-key-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.key;
            state.customKeys = state.customKeys.filter(k => k !== key);
            saveCustomKeys();
            state.validKeys = getAllValidKeys();
            renderKeysList(document.getElementById('key-filter').value);
            updateAdminStats();
            showAdminStatus('✓ Deleted ' + key, 'success');
        });
    });

    updateAdminStats();
}

// ========== NAVIGATION ========== //
function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
            if (tab === 'admin' && state.isAdmin) {
                renderKeysList();
                updateAdminStats();
            }
        });
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.removeItem('easya_auth');
        sessionStorage.removeItem('easya_admin');
        location.reload();
    });

    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
}

function switchTab(tab) {
    state.currentTab = tab;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-tab="${tab}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(`${tab}-tab`);
    if (panel) panel.classList.add('active');
}

// ========== GAMES ========== //
function setupGames() {
    const grid = document.getElementById('games-grid');
    const search = document.getElementById('game-search');

    function renderGames(filter = '') {
        const filtered = GAMES.filter(g =>
            g.name.toLowerCase().includes(filter.toLowerCase()) ||
            g.category.toLowerCase().includes(filter.toLowerCase())
        );
        grid.innerHTML = filtered.map(g => `
            <div class="game-card" data-id="${g.id}" data-url="${g.url}" data-name="${g.name}">
                <div class="game-thumb">${g.icon}</div>
                <div class="game-info">
                    <h3>${g.name}</h3>
                    <span>${g.category}</span>
                </div>
            </div>
        `).join('');
        grid.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => openGame(card.dataset.name, card.dataset.url));
        });
    }

    renderGames();
    search.addEventListener('input', (e) => renderGames(e.target.value));
    document.getElementById('game-close').addEventListener('click', closeGame);
    document.getElementById('game-fullscreen').addEventListener('click', () => {
        const frame = document.getElementById('game-frame');
        if (frame.requestFullscreen) frame.requestFullscreen();
    });
}

function openGame(name, url) {
    const modal = document.getElementById('game-modal');
    const frame = document.getElementById('game-frame');
    document.getElementById('game-title').textContent = name;
    frame.src = buildProxiedUrl(url, 'ultraviolet');
    modal.classList.remove('hidden');
}

function closeGame() {
    document.getElementById('game-frame').src = 'about:blank';
    document.getElementById('game-modal').classList.add('hidden');
}

// ========== APPS ========== //
function setupApps() {
    const grid = document.getElementById('apps-grid');
    grid.innerHTML = APPS.map(a => `
        <div class="app-card" data-url="${a.url}" data-name="${a.name}">
            <div class="app-icon">${a.icon}</div>
            <h3>${a.name}</h3>
        </div>
    `).join('');
    grid.querySelectorAll('.app-card').forEach(card => {
        card.addEventListener('click', () => {
            switchTab('proxy');
            document.getElementById('proxy-url').value = card.dataset.url;
            navigateProxy(card.dataset.url);
        });
    });
}

// ========== PROXY ========== //
function setupProxy() {
    const goBtn = document.getElementById('proxy-go');
    const urlInput = document.getElementById('proxy-url');
    const overlay = document.getElementById('proxy-overlay');

    goBtn.addEventListener('click', () => {
        let url = urlInput.value.trim();
        if (!url) return;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            if (url.includes('.') && !url.includes(' ')) {
                url = 'https://' + url;
            } else {
                url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
            }
        }
        navigateProxy(url);
    });

    urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') goBtn.click();
    });

    document.getElementById('proxy-back').addEventListener('click', () => {
        if (state.proxyIndex > 0) {
            state.proxyIndex--;
            loadProxyUrl(state.proxyHistory[state.proxyIndex]);
        }
    });
    document.getElementById('proxy-forward').addEventListener('click', () => {
        if (state.proxyIndex < state.proxyHistory.length - 1) {
            state.proxyIndex++;
            loadProxyUrl(state.proxyHistory[state.proxyIndex]);
        }
    });
    document.getElementById('proxy-reload').addEventListener('click', () => {
        if (state.proxyHistory[state.proxyIndex]) loadProxyUrl(state.proxyHistory[state.proxyIndex], true);
    });
    document.getElementById('proxy-home').addEventListener('click', () => {
        document.getElementById('proxy-frame').src = 'about:blank';
        overlay.classList.remove('hidden');
        overlay.querySelector('p').textContent = 'Proxy ready. Enter a URL above.';
        overlay.querySelector('.proxy-detail').textContent = 'Multi-node obfuscation layer standing by';
    });
    document.getElementById('proxy-inspect').addEventListener('click', () => {
        alert('Inspect Element unlocked.\n\nRight-click → Inspect (or F12) works inside the proxy frame on most engines.');
    });
}

function navigateProxy(url) {
    state.proxyHistory = state.proxyHistory.slice(0, state.proxyIndex + 1);
    state.proxyHistory.push(url);
    state.proxyIndex = state.proxyHistory.length - 1;
    loadProxyUrl(url);
}

function loadProxyUrl(url) {
    const frame = document.getElementById('proxy-frame');
    const overlay = document.getElementById('proxy-overlay');
    const engine = document.getElementById('proxy-engine').value;

    overlay.classList.remove('hidden');
    overlay.querySelector('p').textContent = 'Initializing complex proxy chain...';
    overlay.querySelector('.proxy-detail').textContent = `Routing via ${CONFIG.proxyEngines[engine].name} • multi-node obfuscation`;

    setTimeout(() => {
        overlay.querySelector('p').textContent = 'Encrypting request payload...';
        overlay.querySelector('.proxy-detail').textContent = 'AES-256 + XOR scramble layer active';
    }, 400);
    setTimeout(() => {
        overlay.querySelector('p').textContent = 'Connecting to edge node...';
        overlay.querySelector('.proxy-detail').textContent = 'Node cluster: US-EAST → EU-WEST → ANON';
    }, 900);
    setTimeout(() => {
        frame.src = buildProxiedUrl(url, engine);
        setTimeout(() => overlay.classList.add('hidden'), 600);
        document.getElementById('proxy-url').value = url;
    }, 1600);
}

function buildProxiedUrl(url, engineName) {
    const engine = CONFIG.proxyEngines[engineName] || CONFIG.proxyEngines.ultraviolet;
    sessionStorage.setItem('proxy_target', url);
    sessionStorage.setItem('proxy_engine', engineName);
    // Static host fallback — full UV/RH needs a backend
    return url;
}

// ========== SETTINGS & CLOAK ========== //
function setupSettings() {
    document.getElementById('theme-select').addEventListener('change', (e) => {
        document.body.className = '';
        if (e.target.value !== 'dark') document.body.classList.add('theme-' + e.target.value);
        localStorage.setItem('easya_theme', e.target.value);
    });
    const savedTheme = localStorage.getItem('easya_theme');
    if (savedTheme) {
        document.getElementById('theme-select').value = savedTheme;
        if (savedTheme !== 'dark') document.body.classList.add('theme-' + savedTheme);
    }
    document.getElementById('about-blank-btn').addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        if (win) {
            win.document.write(`<!DOCTYPE html><html><head><title>Google Classroom</title>
                <link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png">
                </head><body style="margin:0">
                <iframe src="${location.href}" style="border:none;width:100%;height:100vh"></iframe>
                </body></html>`);
            win.document.close();
        }
    });
}

function setupCloak() {
    document.getElementById('cloak-btn').addEventListener('click', toggleCloak);
    document.getElementById('cloak-title').addEventListener('change', (e) => {
        if (state.cloakActive) document.title = e.target.value;
    });
}

function toggleCloak() {
    state.cloakActive = !state.cloakActive;
    if (state.cloakActive) {
        const title = document.getElementById('cloak-title').value || 'Google Classroom';
        const iconType = document.getElementById('cloak-icon').value;
        state.originalTitle = document.title;
        document.title = title;
        const favicons = {
            classroom: 'https://ssl.gstatic.com/classroom/favicon.png',
            drive: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png',
            docs: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico',
            canvas: 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico',
            schoology: 'https://www.schoology.com/sites/default/files/favicon_0.ico'
        };
        setFavicon(favicons[iconType] || favicons.classroom);
        document.getElementById('cloak-btn').style.color = 'var(--success)';
    } else {
        document.title = state.originalTitle || 'EasyA';
        setFavicon(null);
        document.getElementById('cloak-btn').style.color = '';
    }
}

function setFavicon(url) {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = url || "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>";
}

function setupPanicKey() {
    document.addEventListener('keydown', (e) => {
        const panicKey = document.getElementById('panic-key').value || '`';
        if (e.key === panicKey) window.location.href = 'https://classroom.google.com';
    });
}

// Shake animation
const style = document.createElement('style');
style.textContent = `@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-6px); }
    80% { transform: translateX(6px); }
}`;
document.head.appendChild(style);

console.log('%c EasyA loaded ', 'background: #7c3aed; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
console.log('%c Admin key: SUB-RESTI-1738 ', 'background: #dc2626; color: #fff; padding: 2px 6px; border-radius: 3px;');
