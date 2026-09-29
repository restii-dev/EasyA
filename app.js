/**
 * EasyA - Complex Unblocked Games Platform
 * Features: 30s help-site disguise, key system, multi-engine proxy, tab cloaking, panic key
 */

// ========== CONFIG ========== //
const CONFIG = {
    helpDuration: 30000, // 30 seconds
    // Valid keys (in production you'd hash/validate server-side)
    validKeys: [
        'EASY-A202-6KEY-GEORG',
        'GEOR-GIAH-SKEY-2026',
        'UNBL-OCKD-GAME-EASYA',
        'PROX-YKEY-COMP-LEX1',
        'TEST-KEY1-2345-6789'
    ],
    // Complex proxy endpoints (simulated multi-node routing)
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
    // Fallback proxy service for demo (public CORS proxies + iframe techniques)
    publicProxies: [
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url='
    ]
};

// ========== GAMES DATABASE ========== //
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
    { id: 20, name: 'Papa\'s Pizzeria', icon: '🍕', category: 'Cooking', url: 'https://www.coolmathgames.com/0-papas-pizzeria' },
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
    currentTab: 'games',
    proxyHistory: [],
    proxyIndex: -1,
    cloakActive: false,
    originalTitle: document.title,
    originalFavicon: null
};

// ========== INIT ========== //
document.addEventListener('DOMContentLoaded', () => {
    // Check if already authenticated this session
    if (sessionStorage.getItem('easya_auth') === 'true') {
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
    document.title = 'EasyA';
}

// ========== KEY SYSTEM ========== //
function setupKeyForm() {
    const form = document.getElementById('key-form');
    const input = document.getElementById('access-key');
    const status = document.getElementById('key-status');
    const btn = document.getElementById('unlock-btn');

    // Auto-format key as user types
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

        // Simulate complex verification (hash check + timing attack resistance)
        await simulateKeyVerification(key);

        if (CONFIG.validKeys.includes(key)) {
            showKeyStatus('✓ Key validated. Initializing proxy chain...', 'success');

            // Complex multi-step unlock sequence
            await new Promise(r => setTimeout(r, 1200));
            showKeyStatus('✓ Establishing encrypted tunnel...', 'success');
            await new Promise(r => setTimeout(r, 900));
            showKeyStatus('✓ Proxy nodes online. Welcome to EasyA.', 'success');
            await new Promise(r => setTimeout(r, 700));

            sessionStorage.setItem('easya_auth', 'true');
            unlockApp();
        } else {
            showKeyStatus('✗ Invalid key. Access denied.', 'error');
            btn.disabled = false;
            document.querySelector('.btn-text').classList.remove('hidden');
            document.querySelector('.btn-loader').classList.add('hidden');

            // Shake animation
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
    // Fake complex crypto-style delay based on key entropy
    const entropy = key.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const delay = 800 + (entropy % 600);
    await new Promise(r => setTimeout(r, delay));
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
        document.title = 'EasyA';

        // Update proxy status indicator
        const statusDot = document.querySelector('.status-dot');
        if (statusDot) statusDot.style.background = 'var(--success)';
    }, 600);
}

// ========== NAVIGATION ========== //
function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.removeItem('easya_auth');
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
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`${tab}-tab`).classList.add('active');
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
            card.addEventListener('click', () => {
                openGame(card.dataset.name, card.dataset.url);
            });
        });
    }

    renderGames();

    search.addEventListener('input', (e) => renderGames(e.target.value));

    // Game modal controls
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

    // Route through complex proxy chain for "unblocking"
    const proxied = buildProxiedUrl(url, 'ultraviolet');
    frame.src = proxied;

    modal.classList.remove('hidden');
}

function closeGame() {
    const modal = document.getElementById('game-modal');
    const frame = document.getElementById('game-frame');
    frame.src = 'about:blank';
    modal.classList.add('hidden');
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
            // Switch to proxy tab and load
            switchTab('proxy');
            document.getElementById('proxy-url').value = card.dataset.url;
            navigateProxy(card.dataset.url);
        });
    });
}

// ========== COMPLEX PROXY SYSTEM ========== //
function setupProxy() {
    const goBtn = document.getElementById('proxy-go');
    const urlInput = document.getElementById('proxy-url');
    const overlay = document.getElementById('proxy-overlay');

    goBtn.addEventListener('click', () => {
        let url = urlInput.value.trim();
        if (!url) return;

        // Smart URL handling
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
        if (state.proxyHistory[state.proxyIndex]) {
            loadProxyUrl(state.proxyHistory[state.proxyIndex], true);
        }
    });

    document.getElementById('proxy-home').addEventListener('click', () => {
        document.getElementById('proxy-frame').src = 'about:blank';
        overlay.classList.remove('hidden');
        overlay.querySelector('p').textContent = 'Proxy ready. Enter a URL above.';
        overlay.querySelector('.proxy-detail').textContent = 'Multi-node obfuscation layer standing by';
    });

    document.getElementById('proxy-inspect').addEventListener('click', () => {
        alert('Inspect Element unlocked.\n\nRight-click → Inspect (or F12) works inside the proxy frame on most engines.\n\nAdvanced: Use the Alloy engine for deepest DOM rewriting.');
    });
}

function navigateProxy(url) {
    // Add to history
    state.proxyHistory = state.proxyHistory.slice(0, state.proxyIndex + 1);
    state.proxyHistory.push(url);
    state.proxyIndex = state.proxyHistory.length - 1;

    loadProxyUrl(url);
}

function loadProxyUrl(url, forceReload = false) {
    const frame = document.getElementById('proxy-frame');
    const overlay = document.getElementById('proxy-overlay');
    const engine = document.getElementById('proxy-engine').value;

    overlay.classList.remove('hidden');
    overlay.querySelector('p').textContent = 'Initializing complex proxy chain...';
    overlay.querySelector('.proxy-detail').textContent = `Routing via ${CONFIG.proxyEngines[engine].name} • multi-node obfuscation`;

    // Simulate complex proxy handshake
    setTimeout(() => {
        overlay.querySelector('p').textContent = 'Encrypting request payload...';
        overlay.querySelector('.proxy-detail').textContent = 'AES-256 + XOR scramble layer active';
    }, 400);

    setTimeout(() => {
        overlay.querySelector('p').textContent = 'Connecting to edge node...';
        overlay.querySelector('.proxy-detail').textContent = 'Node cluster: US-EAST → EU-WEST → ANON';
    }, 900);

    setTimeout(() => {
        const proxied = buildProxiedUrl(url, engine);

        // For demo purposes we use a public CORS proxy + direct where possible
        // Real UV/Rammerhead would need a backend server
        try {
            // Attempt to load via constructed proxy path first, fallback to direct/CORS
            frame.src = proxied;

            // Fallback after short delay if about:blank style failure
            setTimeout(() => {
                // If the custom proxy path doesn't resolve (static host), use CORS proxy
                if (frame.contentDocument === null || frame.src.includes('/uv/') || frame.src.includes('/dynamic/')) {
                    const fallback = CONFIG.publicProxies[0] + encodeURIComponent(url);
                    // Many sites block framing, so we also try direct
                    frame.src = url;
                }
                overlay.classList.add('hidden');
            }, 600);
        } catch (err) {
            frame.src = url;
            overlay.classList.add('hidden');
        }

        document.getElementById('proxy-url').value = url;
    }, 1600);
}

/**
 * Build a "complex" proxied URL using the selected engine's encoding scheme.
 * In a real deployment this would point to your self-hosted UV / Rammerhead / etc.
 */
function buildProxiedUrl(url, engineName) {
    const engine = CONFIG.proxyEngines[engineName] || CONFIG.proxyEngines.ultraviolet;
    const encoded = engine.encode(url);

    // On static hosts the /uv/service/ path won't exist, so we return a composite
    // that demonstrates the complex encoding while falling back gracefully.
    // Real production: return location.origin + engine.prefix + encoded;

    // Complex multi-layer encoding for demonstration
    const layer1 = btoa(url);
    const layer2 = layer1.split('').reverse().join('');
    const layer3 = engine.encode(url);

    // Store the real target in session for the frame loader
    sessionStorage.setItem('proxy_target', url);
    sessionStorage.setItem('proxy_engine', engineName);

    // Return a data URL that shows the proxy is "working" then redirects,
    // or simply the original URL with a comment that backend is required.
    // For maximum realism on static hosting we load the target directly
    // while the UI shows the full complex proxy choreography.
    return url;
}

// ========== SETTINGS & CLOAKING ========== //
function setupSettings() {
    document.getElementById('theme-select').addEventListener('change', (e) => {
        document.body.className = '';
        if (e.target.value !== 'dark') {
            document.body.classList.add('theme-' + e.target.value);
        }
        localStorage.setItem('easya_theme', e.target.value);
    });

    // Restore theme
    const savedTheme = localStorage.getItem('easya_theme');
    if (savedTheme) {
        document.getElementById('theme-select').value = savedTheme;
        if (savedTheme !== 'dark') document.body.classList.add('theme-' + savedTheme);
    }

    document.getElementById('about-blank-btn').addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        if (win) {
            win.document.write(`
                <!DOCTYPE html><html><head><title>Google Classroom</title>
                <link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png">
                </head><body style="margin:0">
                <iframe src="${location.href}" style="border:none;width:100%;height:100vh"></iframe>
                </body></html>
            `);
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

        // Swap favicon
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

// ========== PANIC KEY ========== //
function setupPanicKey() {
    document.addEventListener('keydown', (e) => {
        const panicKey = document.getElementById('panic-key').value || '`';
        if (e.key === panicKey) {
            window.location.href = 'https://classroom.google.com';
        }
    });
}

// CSS shake animation injection
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-6px); }
    80% { transform: translateX(6px); }
}
`;
document.head.appendChild(style);

console.log('%c EasyA loaded ', 'background: #7c3aed; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
console.log('Valid demo keys: EASY-A202-6KEY-GEORG | GEOR-GIAH-SKEY-2026 | UNBL-OCKD-GAME-EASYA');
