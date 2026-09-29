# ByteSpace — Landing Page

A responsive, marketing landing page for **ByteSpace**, an online learning platform, built as part of a technical assessment. The project is a statically-driven React application with client-side routing, typed content models, and a component-based architecture.

> **Status:** Feature-complete for the landing-page scope. `npm run build` (type-check + bundle) and `npm run lint` both pass cleanly.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [Content & Data Management](#content--data-management)
- [Styling Conventions](#styling-conventions)
- [Linting & Type Checking](#linting--type-checking)
- [Build & Deployment](#build--deployment)
- [Testing](#testing)
- [Known Limitations](#known-limitations)
- [License](#license)

---

## Overview

ByteSpace is a single-page marketing site for an online course platform. All copy, course cards, categories, testimonials, and footer links are centralized in a typed data module, so content can be updated without touching component code. The app also ships with `/login` and `/signup` screens wired into React Router as entry points for a future authentication flow.

### Why this architecture

| Decision | Rationale |
|---|---|
| Vite + React 19 + TypeScript (strict) | Fast dev server/HMR, modern React, compile-time safety across content models and component props. |
| Content separated from presentation (`src/data` + `src/types`) | Copy and layout data are editable independently of components; types enforce the contract at compile time. |
| Presentational component split (`layout` / `sections` / `ui`) | Clear reuse boundaries: page structure, page-specific sections, and generic primitives. |
| No runtime data fetching | The page is fully static, keeping the bundle small and rendering deterministic. |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.9 (`strict: true`) |
| Build tool / dev server | Vite 8 |
| Routing | React Router DOM 7 |
| Icons | lucide-react |
| Linting | ESLint 10 (flat config) + `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |
| Styling | Plain CSS (global stylesheet + component layer), Google Fonts (Figtree, Poppins) |

---

## Features

- **Hero section** with headline, CTA, and supporting imagery.
- **Partner logo strip** and **course discovery** sections (category chips, course cards with rating/level/price metadata).
- **Creator path** and **course-management** highlights.
- **Testimonials** from learners and creators.
- **Call-to-action** and **newsletter** sections.
- **Footer** with multi-column navigation.
- **Authentication screens** — `/login` and `/signup` with validated forms (client-side only) and cross-links between them.
- **Responsive layout** across mobile, tablet, and desktop breakpoints.
- **SEO/meta basics** — description, theme color, and title set in `index.html`.

---

## Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0` (required by Vite 8; verified against `node_modules/vite/package.json` engines)
- **npm** `>=10` (developed with npm 11)

Check your versions:

```bash
node -v   # v20.19+ or v22.12+
npm -v
```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/T14Z-x/bytespace-landing-page.git
cd bytespace-landing-page

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

The dev server runs with Hot Module Replacement (HMR) enabled. Edits to components, styles, or data hot-reload without a full refresh.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR (default: `http://localhost:5173`). |
| `npm run build` | Type-check with `tsc --noEmit`, then produce an optimized production bundle in `dist/`. |
| `npm run preview` | Serve the production build locally for verification (default: `http://localhost:4173`). |
| `npm run lint` | Run ESLint across the repository (flat config, ignores `dist/`). |

### Typical verification loop

```bash
npm run lint && npm run build && npm run preview
```

---

## Project Structure

```
.
├── index.html                     # App shell, fonts, meta tags
├── vite.config.ts                 # Vite + React plugin config
├── eslint.config.js               # Flat ESLint config (TS, React hooks, refresh)
├── tsconfig.json                  # Strict TS config for src/
├── tsconfig.node.json             # TS config for build tooling files
├── public/
│   ├── favicon.svg
│   ├── icons.svg                  # Sprite sheet for icons
│   └── images/reference-*.jpg     # Static imagery referenced by content data
└── src/
    ├── main.tsx                   # Entry point — mounts <App /> in StrictMode
    ├── App.tsx                    # Renders the application router
    ├── App.css                    # Component/section styles
    ├── index.css                  # Global styles, CSS variables, resets
    ├── routes/
    │   └── AppRouter.tsx          # Route table (/ , /login, /signup)
    ├── pages/
    │   ├── LandingPage.tsx        # Composes landing sections + footer
    │   ├── LoginPage.tsx          # Sign-in form
    │   └── SignupPage.tsx         # Registration form
    ├── components/
    │   ├── layout/                # Navbar, Footer, Brand, Container
    │   ├── sections/              # Hero, Partners, Features, CreatorPath, CTA, Testimonials
    │   └── ui/                    # Button, Card, Input, Badge, Modal, CourseCard, Icons, …
    ├── data/
    │   └── landingData.ts         # All copy, courses, categories, testimonials, nav labels
    ├── types/
    │   ├── index.ts               # Barrel re-exports
    │   ├── landing.ts             # Course, Category, Testimonial, layout props
    │   ├── content.ts             # LandingCopy, AuthPageCopy
    │   └── ui.ts                  # ButtonProps, InputProps, ModalProps, …
    └── assets/
        └── index.ts               # imageAsset() helper → /images/reference-*.jpg
```

### Conventions

- **Named exports** for components/pages (`export function Navbar()`), default export only for the `App` root.
- **Type-only imports** (`import type { … }`) everywhere to keep runtime bundles clean.
- **Props interfaces** are declared in `src/types` (shared) or colocated for layout primitives.
- Barrel files (`types/index.ts`) provide a single import surface for consumers.

---

## Routing

Defined in `src/routes/AppRouter.tsx` using `BrowserRouter`:

| Path | Page | Description |
|---|---|---|
| `/` | `LandingPage` | Full marketing landing page. |
| `/login` | `LoginPage` | Email/password sign-in form (client-side validation only). |
| `/signup` | `SignupPage` | Name/email/password registration form (min. 8 characters). |

> **Deployment note:** Because routing is client-side (`BrowserRouter`), the hosting provider must rewrite all paths to `index.html` (e.g., Netlify `_redirects` → `/* /index.html 200`, Vercel rewrites, or equivalent SPA fallback on nginx / S3 + CloudFront).

---

## Content & Data Management

All user-facing content lives in **`src/data/landingData.ts`** and is typed by interfaces in **`src/types/`**:

- `landingCopy` — headings, paragraphs, and CTA text (`LandingCopy`).
- `authCopy` — labels and microcopy for login/signup (`AuthPageCopy`).
- `courses`, `categories`, `logos`, `testimonials`, `footerColumns` — structured content arrays.
- `navigationLabels` — navbar link labels.

Images are resolved through the `imageAsset()` helper in `src/assets/index.ts`, which maps an identifier to `/images/reference-<id>.jpg` under `public/images/`.

**To update content:** edit the relevant export in `landingData.ts`. TypeScript will fail the build if a field is missing or mistyped — no component changes required.

---

## Styling Conventions

- **`src/index.css`** — global reset, design tokens/CSS variables, typography, and shared utility classes.
- **`src/App.css`** — component- and section-specific styles keyed by descriptive class names.
- **Fonts** are loaded in `index.html` (Figtree for body, Poppins for headings) via Google Fonts with `preconnect`.
- **Responsive behavior** is handled with media queries; layouts use a centered container (`components/layout/Container.tsx`) and data-driven positioning where the design requires pixel-exact placement.

---

## Linting & Type Checking

```bash
npm run lint        # ESLint (flat config)
npx tsc --noEmit    # Standalone type check (also runs inside npm run build)
```

ESLint covers `**/*.{js,jsx,ts,tsx}` with:

- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` (Rules of Hooks / exhaustive deps)
- `eslint-plugin-react-refresh`
- `dist/` is ignored globally

TypeScript is configured with `strict: true`, `noEmit: true`, `isolatedModules: true`, and `moduleResolution: "Bundler"`.

---

## Build & Deployment

```bash
npm run build     # → dist/
npm run preview   # verify the production bundle locally
```

The build emits a fully static bundle:

```
dist/
├── index.html
├── favicon.svg
├── icons.svg
├── images/…
└── assets/
    ├── index-<hash>.css
    └── index-<hash>.js
```

Deploy the `dist/` directory to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, nginx). Remember the SPA rewrite rule noted in [Routing](#routing).

Suggested CI pipeline:

```yaml
- npm ci
- npm run lint
- npm run build
- deploy dist/
```

---

## Testing

No automated test suite is currently configured. Given the current scope (static presentational content), verification is performed via:

1. `npm run lint` — static analysis
2. `npm run build` — strict type-checking + bundling
3. `npm run preview` — manual/visual QA of the production build

**Recommended next step:** introduce Vitest + React Testing Library for component and route smoke tests, and Playwright for end-to-end coverage of the landing/auth flows.

---

## Known Limitations

- **Authentication is UI-only.** The login/signup forms validate client-side and do not call a backend; submitting has no effect.
- **No automated tests** (see [Testing](#testing)).
- **Content is hard-coded** in `landingData.ts`; there is no CMS or API integration yet.
- **No environment variable usage** (no `.env` files or `import.meta.env` references).
- **`BrowserRouter` requires host-side SPA fallback** for deep links.
- **No LICENSE file** has been declared for this repository.

---

## License

This repository is part of a technical assessment and does not currently ship an open-source license. All rights reserved unless otherwise specified by the author.

