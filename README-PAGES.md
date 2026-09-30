# Deploy EasyA on Cloudflare Pages

## Option A — Dashboard (Git, recommended)

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select repo **restii-dev/EasyA**
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (project root)
4. Save and Deploy

Every push to `main` will auto-deploy.

## Option B — CLI (direct upload)

```bash
npm install
npx wrangler login
npx wrangler pages deploy . --project-name=easya
```

Or: `npm run pages:deploy`

## Custom domain

Pages project → **Custom domains** → add e.g. `easya.yourdomain.com`

## Note

Cloudflare’s current guidance prefers **Workers + Static Assets** for *new* sites; Pages remains fully supported and is ideal when you already use Git integration like this.
