# rechteradar-landing

Static landing page for RechteRadar (plain HTML/CSS/JS), optimized for mobile-first usage and GitHub Pages deployment.

## Project structure

- `index.html`
- `styles.css`
- `script.js`
- `docs/rechteradar_landing_build.plan.md` (implementation plan)

## Run locally

Because browser features like localStorage and smooth scrolling are best tested via HTTP, use a local static server:

1. Open a terminal in the project root.
2. Start a server:
   - `python3 -m http.server 8080`
3. Open:
   - `http://localhost:8080`
4. If port `8080` is already in use, start with another port:
   - `python3 -m http.server 4173`
   - then open `http://localhost:4173`

Alternative quick check:

- Open `index.html` directly in a browser, but prefer the server method for more realistic behavior.
