# TuneCore Support Assistant — Powered by Intuitio Labs

An AI-powered support chatbot for TuneCore artists, songwriters, and labels. Answers questions about music distribution, publishing administration, YouTube Content ID, royalties, releases, and more — grounded in TuneCore's official Knowledge Base.

---

## Deploy to Vercel (5 minutes)

### Option A: GitHub → Vercel (recommended)

1. **Push this folder to a new GitHub repo**
   - Go to github.com → New repository → name it `tunecore-support-chatbot`
   - Upload all these files (or use `git push`)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (free)
   - Click "Add New Project"
   - Import your GitHub repo
   - Framework: **Create React App** (auto-detected)
   - Click "Deploy" — first deploy may fail without the API key, that's fine

3. **Add your Anthropic API key**
   - In your Vercel project → Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = `sk-ant-...` (from console.anthropic.com)
   - Click Save

4. **Redeploy**
   - Go to Deployments tab → click the three dots on latest → Redeploy
   - Your chatbot is now live at `https://tunecore-support-chatbot.vercel.app`

---

### Option B: Vercel CLI

```bash
npm install -g vercel
cd tunecore-support-chatbot
npm install
vercel
# Follow prompts, then:
vercel env add ANTHROPIC_API_KEY
vercel --prod
```

---

## Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY
vercel dev        # runs both React + serverless API locally
# Opens at http://localhost:3000
```

> **Note:** Use `vercel dev` (not `npm start`) for local development so the `api/chat.js` serverless function runs alongside the React app.

---

## File Structure

```
tunecore-support-chatbot/
├── api/
│   └── chat.js          ← Vercel serverless function (Anthropic proxy)
├── public/
│   ├── index.html       ← HTML shell (title + meta)
│   └── intuitio_logo_white.svg
├── src/
│   ├── index.js         ← React entry point
│   └── App.js           ← Chatbot UI + TuneCore Knowledge Base context
├── .env.example         ← Environment variables template
├── package.json
└── README.md
```

---

## How It Works

1. User types a question in the chat UI (`src/App.js`)
2. Frontend POSTs to `/api/chat` with the conversation history + system prompt
3. Vercel serverless function (`api/chat.js`) adds the API key and proxies to Anthropic
4. Claude responds using the embedded TuneCore Knowledge Base context
5. Response is displayed in the chat UI

The API key never touches the browser — it lives only in Vercel's environment variables.

---

## Knowledge Base Coverage

The chatbot's `PROJECT_CONTEXT` in `src/App.js` covers:

- **Music Distribution** — stores, audio specs, cover art, UPC/ISRC, pricing, renewals
- **Release Types** — Single/EP/Album definitions per iTunes and Spotify
- **Publishing Administration** — royalties, PROs, commission rates (15% general, 50% sync)
- **YouTube Content ID** — monetization, opt-out, eligibility
- **Cover Songs & Samples** — mechanical licenses, soundalike policy, remix rules
- **Payments** — quarterly payout schedule, first payment timeline (9–12 months)
- **Changes After Distribution** — what's locked (UPC, track order, dates)
- **Account Management** — 2FA, renewals, contact info
- **Policies** — Hate Content, Hebrew/Chinese language restrictions, audiobook policy

---

## Getting Your Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign in or create an account
3. API Keys → Create Key
4. Copy the `sk-ant-...` key and add it to Vercel

Estimated cost: ~$0.003–0.005 per conversation (Claude Sonnet).
