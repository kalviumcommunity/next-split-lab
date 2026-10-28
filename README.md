# next-split-lab

A tiny Next.js 15 project that makes **code splitting and lazy loading** visible.

Two routes render the **exact same** heavy chart (built with `recharts`):

| Route | How the chart is imported | Result |
|---|---|---|
| `/dashboard-eager` | `import Chart from "../Chart/Chart"` | Chart ships in the page bundle |
| `/dashboard-lazy` | `dynamic(() => import("../Chart/Chart"), { ssr: false, loading: ... })` | Chart loads on demand in its own chunk |

## See the difference

```bash
npm install
npm run build
```

Look at the **First Load JS** column in the route table. The eager route ships
far more JavaScript up front than the lazy route, even though both show the same
chart. (In our run: `/dashboard-eager` was ~206 kB vs `/dashboard-lazy` ~104 kB.)

Then run it and click around:

```bash
npm start
```

Open `/dashboard-lazy` and watch the `Loading chart...` fallback appear for a
moment while the chart chunk is fetched, something the eager route never needs
because the chart was already in the first load.

## Key files

- `app/Chart/Chart.jsx` — the heavy, browser-only chart (a Client Component).
- `app/dashboard-eager/page.jsx` — normal import.
- `app/dashboard-lazy/page.jsx` — `next/dynamic` with `ssr: false` and a `loading` fallback.

## Notes

- `ssr: false` is only allowed inside a Client Component, which is why
  `dashboard-lazy/page.jsx` starts with `"use client"`.
- Next.js already code-splits **by route** automatically. `next/dynamic` is for
  splitting a heavy component **inside** a single route.
