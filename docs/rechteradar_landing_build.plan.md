---
name: RechteRadar landing build
overview: Refactor the landing into a conversion-first, distinctly German legal-tech experience with a stronger hero concept and aligned visual narrative across all sections.
todos:
  - id: hero-concept
    content: Redesign hero with stronger German-market differentiation and premium conversion-first layout.
    status: pending
  - id: cross-section-refactor
    content: Refactor downstream sections to match the new hero visual language, hierarchy, and credibility cues.
    status: pending
  - id: localized-messaging
    content: Perform moderate DE/EN copy upgrade for clearer German-first positioning while preserving compliance.
    status: pending
  - id: validation-pass
    content: Validate UI quality, conversion clarity, accessibility, and interaction correctness in browser.
    status: pending
isProject: false
---

# RechteRadar Visual Refactor Plan

## Direction locked

- Visual style: **conversion-first product marketing**.
- Content scope: **moderate rewrite** (same sections, sharper messaging and hierarchy).
- Keep stack unchanged: plain `index.html`, `styles.css`, `script.js`, no frameworks.

## Competitive inspiration (adapted, not copied)

- Borrow from US competitors’ clearer conversion choreography and product-style storytelling, then localize for German trust expectations:
  - [Settlemate](https://www.settlemate.io/)
  - [ClaimMoney](https://claimmoney.com/)
  - [OpenClassActions](https://openclassactions.com/)
- Avoid US-style “money promise” framing; keep neutral legal-tech tone and German compliance guardrails.

## Hero redesign (primary change)

- Build a **two-layer hero**:
  - Layer 1: strong headline + sharper subheadline + dual CTAs.
  - Layer 2: “German rights pulse” product mock panel (deadlines, case status, timeline chips).
- Add trust micro-signals under CTAs (e.g., “Deutschlandfokus”, “Fristenmonitoring”, “Keine Kanzlei” badges).
- Introduce visual spark with modern gradient accents, glassmorphism-lite surfaces, and richer depth while preserving contrast.
- Upgrade motion language (subtle entrance and hover) with reduced-motion fallback.

## Refactor remaining sections to match hero

- Problem/stat section: transform into scannable “why this matters now” block with stronger visual hierarchy.
- Solution steps: convert into premium product cards with clearer sequencing and icon consistency.
- Audience split: improve contrast between consumer vs association pathways using differentiated card emphasis.
- Signup section: increase conversion clarity (headline/support copy/layout rhythm) without changing compliance stance.
- FAQ/footer: align spacing, typography, and component feel with new hero system.

## Localization and messaging update

- Keep German as default and preserve full DE/EN parity for all visible strings.
- Tighten copy for German audience specificity (collective actions in Germany, deadlines, opt-in friction) while avoiding legal advice or compensation promises.
- Preserve existing interaction/analytics behavior (CTA logs, localStorage, form flow, accordion).

## Execution checklist

- Update `index.html` structure/classes for the new hero and adjusted section wrappers.
- Refactor `styles.css` tokens/components/layouts for elevated modern UI and responsiveness.
- Update `script.js` translations for revised copy and any new `data-i18n` keys.
- Run lint checks and browser validation (mobile + desktop + language toggle + form + FAQ + CTA logs).
- Re-run Lighthouse to verify performance/accessibility remain at target quality.

