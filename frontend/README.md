# CodeForge — Frontend

A React + Vite + Tailwind frontend for a coding practice & performance assessment
platform (LeetCode / GeeksForGeeks style), with a dark "IDE" visual identity,
animated hero code editor, problem list with filters, a working mock code
runner, a stats dashboard with charts, and a leaderboard.

## Pages

| Route            | Page                                          |
|-------------------|-----------------------------------------------|
| `/`               | Landing page (hero, features, CTA)            |
| `/problems`       | Problem list with search + difficulty/status filters |
| `/problems/:id`   | Problem detail: statement + code editor + mock judge (Run / Submit) |
| `/dashboard`      | User stats, weekly activity chart, skill radar chart |
| `/leaderboard`    | Ranked leaderboard with podium for top 3       |
| `/login`          | Login screen                                   |
| `/signup`         | Signup screen                                  |

## Tech stack

- React 18 + Vite
- React Router v6
- Tailwind CSS (custom design tokens: colors, fonts, shadows, animations)
- Framer Motion (page transitions, hover/scroll animations)
- Recharts (bar chart + radar chart on the dashboard)
- lucide-react (icons)

All data (problems, leaderboard, activity) is mocked in `src/data/` — swap
these for real API calls when you wire up a backend.

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
frontend/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ CodeEditorPreview.jsx   # animated self-typing hero editor
   │  ├─ ProblemCard.jsx
   │  └─ StatCard.jsx
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ Login.jsx
   │  ├─ Signup.jsx
   │  ├─ Problems.jsx
   │  ├─ ProblemDetail.jsx
   │  ├─ Dashboard.jsx
   │  └─ Leaderboard.jsx
   └─ data/
      ├─ problems.js
      └─ leaderboard.js
```

## Connecting a real backend later

- Replace the arrays in `src/data/problems.js` and `src/data/leaderboard.js`
  with `fetch`/`axios` calls to your API.
- The "Run" / "Submit" buttons in `ProblemDetail.jsx` currently simulate a
  judge with `setTimeout` — swap that block for a real call to your code
  execution/judging service.
- Wire `Login.jsx` / `Signup.jsx` forms up to your auth endpoints and store
  the session (e.g. context + httpOnly cookie or JWT).

## Design notes

- Palette is an "editor/IDE" dark theme: ink background, violet primary
  accent, teal + amber as syntax-inspired secondary accents.
- Fonts: **Space Grotesk** (display/headings), **Inter** (body),
  **JetBrains Mono** (code, stats, timestamps).
- Signature element: the hero's self-typing code editor and the colored
  status-rail on every problem row (solved / attempted / unsolved).
