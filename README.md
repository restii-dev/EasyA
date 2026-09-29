# EasyA

**Complex unblocked games platform** disguised as a Georgia high school academic help site.

## Features

- **30-second help-site camouflage** – Loads as a legitimate-looking Georgia Academic Support Network portal before transitioning
- **Key system** – Access-key authentication with formatted input, verification delay, and multi-step unlock sequence
- **Admin key `SUB-RESTI-1738`** – Full key manager: add, generate, delete, export/import JSON, reset to defaults
- **400+ keys in `keys.json`** – Every combination lives in the repo; admin can expand the list
- **Complex multi-engine proxy** – Ultraviolet / Dynamic / Rammerhead / Alloy encoding schemes with staged connection choreography
- **24+ unblocked games** – Slope, 1v1.LOL, Cookie Clicker, Retro Bowl, Krunker, and more
- **Apps launcher** – YouTube, Discord, TikTok, Spotify, etc. routed through the proxy
- **Tab cloaking** – Disguise as Google Classroom, Drive, Docs, Canvas, or Schoology
- **about:blank cloak** – Open the entire site inside an about:blank window
- **Panic key** – Instant redirect to Google Classroom (default: `` ` ``)
- **Themes** – Dark, Midnight, Neon, Light
- **Fullscreen support** & responsive design

## Keys

### Admin (god mode)
```
SUB-RESTI-1738
```
Unlocks the **Admin** tab → manage every key, generate new ones, export/import JSON that matches `keys.json`.

### Demo user keys (also in keys.json)
```
EASY-A202-6KEY-GEORG
GEOR-GIAH-SKEY-2026
UNBL-OCKD-GAME-EASYA
PROX-YKEY-COMP-LEX1
TEST-KEY1-2345-6789
```
Plus 400+ more combinations in [`keys.json`](./keys.json).

## Quick Start

1. Clone or open the repo
2. Open `index.html` (or enable GitHub Pages)
3. Wait 30s on the help page → enter a key
4. Admin key → red **Admin** tab appears for key management

## Deploy

Works on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

> Full Ultraviolet / Rammerhead backends need a Node server. This frontend includes the complete UI, encoding logic, and multi-stage proxy choreography. On static hosts the proxy falls back to direct loading while still showing the complex routing sequence.

## Structure

```
EasyA/
├── index.html      # Help site + auth + main app + admin panel
├── styles.css      # Full design system
├── app.js          # Key system, admin manager, proxy, games, cloaking
├── keys.json       # Admin key + 400+ valid combinations
└── README.md
```

## Disclaimer

For educational / personal use only. Not affiliated with the Georgia Department of Education or any school district.
