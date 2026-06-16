# Vita Christi — vitachristi.org

An immersive English contemplation of the life of Christ, drawn **entirely** from the
*Vita Jesu Christi* of Ludolph of Saxony (1374) — the book that converted Ignatius of Loyola.

Positioning: **not mindfulness.** A 650-year-old monastic method to *meet a Person*.

## What's here
- **Immersive sessions** — Ludolph's five movements (Be Still → Gospel → Behold → Consider → Pray),
  revealed one line at a time. His intense medieval voice is kept on purpose.
- **6 journeys** — The Passion (Holy Week on the canonical hours), He Is Risen, Rest in the Storm,
  The Way of Humility, Facing Temptation, Daily Bread.
- **The Life** — all 180 chapters, by act, filterable by feeling. 29 fully authored; the rest scaffolded.
- **Prayers** — Ludolph's actual closing prayers, translated, to pray on their own.
- **Ludolph** — who he was and why he matters.

Every word is translated from the real Latin. Nothing is put in Ludolph's mouth that he did not write.

## Architecture
Pure static site (no DB, no build step) — `public/` is the entire deployable.
- `public/index.html` + `css/app.css` + `js/{app,player}.js`
- `public/data/register.json` — all 180 chapters (title, theme, lens, emotions, act)
- `public/sessions/index.json` + `public/sessions/<id>.json` — the authored sessions
- `public/data/prayers.json` — the prayer collection

## Content pipeline (to add more sessions)
1. `python3 scripts/split_chapters.py` — split the OCR into per-chapter Latin.
2. `python3 scripts/trim_sources.py` — compact prayer-inclusive sources.
3. Edit `scripts/author_sessions.workflow.js` (the CURATED array), run the Workflow.
4. `node scripts/process_sessions.js` — write session JSON + index + prayers.

## Local preview
```
node server.js          # serves public/ on :8099
```

## Deploy to vita.luxperpetua.org (Coolify)
The repo is Docker-based (nginx serving static). On the Coolify server:
1. New Resource → (Git repo, or "Dockerfile") → this project.
2. Build pack: **Dockerfile**. Port: **80**.
3. Domain: `vita.luxperpetua.org` (wildcard `*.luxperpetua.org` already points at the server;
   Traefik + Let's Encrypt issue TLS automatically).
4. Deploy. Later, add `vitachristi.org` as an additional domain (point its DNS at the server).

Local Docker test:
```
docker build -t vitachristi . && docker run -p 8080:80 vitachristi
```
