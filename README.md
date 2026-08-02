# PhysioCare

Full-stack physiotherapy platform connecting patients with a clinic.

## Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS + Framer Motion
- **Backend:** Node.js + Express (ES Modules)
- **Database:** MongoDB + Mongoose

## Project Structure

```
physiocare/
├── client/          # React frontend
└── server/          # Express API
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (required from Stage 2 onward)

### Backend

```bash
cd server
cp .env.example .env   # edit secrets as needed
npm install
npm run dev            # http://localhost:5000
```

### Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev            # http://localhost:5173
```

## Environment Variables

See `server/.env.example` and `client/.env.example` for required configuration.

## Build Stages

| Stage | Status |
|-------|--------|
| 1 — Scaffolding + theme system | Done |
| 2 — Layout & navigation | Done |
| 3 — Hero section | Done |
| 4 — Therapy services | Done |
| 5 — Backend foundation | Next |

### Stage 1 checklist

- Monorepo: `client/` (Vite + React + Tailwind v4) + `server/` (Express ES modules)
- CSS variables on `[data-theme="light"|"dark"]` — teal primary, amber secondary
- Zustand `themeStore.js` persists theme to `localStorage` (`physio-theme`)
- Inline script in `index.html` prevents flash of wrong theme on load
- Test page at `/` with animated theme toggle (sun/moon)
