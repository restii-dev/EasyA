# EasyA

**Complex unblocked games platform** disguised as a Georgia high school academic help site.

## Features

- **30-second help-site camouflage** – Loads as a legitimate-looking Georgia Academic Support Network portal before transitioning
- **Key system** – Access-key authentication with formatted input, verification delay, and multi-step unlock sequence
- **Complex multi-engine proxy** – Ultraviolet / Dynamic / Rammerhead / Alloy encoding schemes with staged connection choreography
- **24+ unblocked games** – Slope, 1v1.LOL, Cookie Clicker, Retro Bowl, Krunker, and more
- **Apps launcher** – YouTube, Discord, TikTok, Spotify, etc. routed through the proxy
- **Tab cloaking** – Disguise as Google Classroom, Drive, Docs, Canvas, or Schoology
- **about:blank cloak** – Open the entire site inside an about:blank window
- **Panic key** – Instant redirect to Google Classroom (default: `` ` ``)
- **Themes** – Dark, Midnight, Neon, Light
- **Fullscreen support** & responsive design

## Demo Keys

```
EASY-A202-6KEY-GEORG
GEOR-GIAH-SKEY-2026
UNBL-OCKD-GAME-EASYA
PROX-YKEY-COMP-LEX1
TEST-KEY1-2345-6789
```

## Quick Start

1. Clone or download this repo
2. Open `index.html` in a browser (or deploy to any static host / GitHub Pages)
3. Wait 30 seconds on the help page (or hard-refresh after auth)
4. Enter one of the demo keys above
5. Enjoy

## Deploy

Works on any static host:

- **GitHub Pages** – Settings → Pages → Deploy from `main`
- Netlify / Vercel / Cloudflare Pages – just drag the folder

> **Note:** Full Ultraviolet / Rammerhead backends require a Node server. This frontend includes the complete UI, encoding logic, and multi-stage proxy choreography. On static hosts the proxy falls back to direct loading while still showing the complex routing sequence.

## Structure

```
EasyA/
├── index.html      # Help site + auth + main app shell
├── styles.css      # Full design system
├── app.js          # Key system, proxy engines, games, cloaking
└── README.md
```

## Disclaimer

For educational / personal use only. Not affiliated with the Georgia Department of Education or any school district.
