# FeastCraft — Catering Company for Events HTML Template

**Version:** 1.0.0
**Author:** FeastCraft Studio
**Built with:** HTML5 · Bootstrap 5.3 · CSS3 · Vanilla JavaScript

FeastCraft is a premium, production-ready static HTML template for catering companies, wedding caterers, corporate event caterers, luxury banquet services, and hospitality businesses.

---

## 1. Installation

1. Extract the ZIP.
2. Open `pages/index.html` directly in a browser, OR host the entire `feastcraft/` folder on any static web server (Apache, Nginx, Netlify, GitHub Pages, Vercel, etc.).
3. No build step required — everything is plain HTML/CSS/JS.

---

## 2. Folder Structure

```
feastcraft/
├── assets/
│   ├── css/
│   │   ├── style.css          # Core design system + components
│   │   ├── components.css     # Extra reusable UI components
│   │   ├── dark-mode.css      # Dark theme overrides
│   │   ├── rtl.css            # Right-to-left layout support
│   │   └── responsive.css     # Breakpoint fine-tuning
│   ├── js/
│   │   ├── main.js            # Navbar, accordion, tabs, counters, toast
│   │   ├── theme.js           # Dark mode + RTL toggling
│   │   ├── animations.js      # AOS-lite scroll animations
│   │   ├── gallery.js         # Lightbox gallery
│   │   └── forms.js           # Client-side validation
│   └── images/                # All template imagery
├── pages/
│   ├── index.html             # Home (3 hero variants included)
│   ├── about.html
│   ├── menus.html
│   ├── menu-details.html
│   ├── events.html
│   ├── gallery.html
│   ├── packages.html
│   ├── quote.html
│   ├── pricing.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── team.html
│   ├── faq.html
│   ├── contact.html
│   ├── 404.html
│   └── coming-soon.html
├── documentation/
│   └── README.md              # This file
├── robots.txt
└── sitemap.xml
```

---

## 3. Customization Guide

### CSS Variables
All design tokens live under `:root` in `assets/css/style.css`. Update once and the entire theme changes.

```css
:root {
  --fc-primary: #8A3B5D;       /* Mulberry Wine */
  --fc-secondary: #8FA88A;     /* Dusty Sage */
  --fc-accent: #F6B48F;        /* Peach Nectar */
  --fc-highlight: #F9E9C8;     /* Vanilla Cream */
  --fc-bg: #FFFDF8;            /* Ivory Silk */
  --fc-surface: #F4EFE8;       /* Linen Beige */
  --fc-text: #3E332E;          /* Dark Mocha */
  /* ...spacing, radius, shadows */
}
```

### Typography
Two Google Fonts, loaded per page:

* Headings: **Cormorant Garamond**
* Body: **DM Sans**

Icons: **Remix Icons** (v4) via CDN.

### 8px spacing
`--fc-space-1` through `--fc-space-8` follow an 8-pixel grid (8, 16, 24, 32, 48, 64, 96, 128).

---

## 4. Components

Reusable classes documented in `style.css`:

* `.btn-fc` variants — `btn-fc-primary`, `btn-fc-outline`, `btn-fc-ghost`, `btn-fc-accent`
* `.fc-card` — menu / event / food cards
* `.fc-chef` — team cards
* `.fc-feature` — icon + heading + text block
* `.fc-pack` — pricing / package card (with `.featured` variant)
* `.fc-quote` — testimonial card
* `.fc-accordion` — FAQ accordion
* `.fc-tabs` — filter tabs (add `data-tabs` for programmatic switching)
* `.fc-timeline` — vertical company timeline
* `.fc-stats` / `.fc-stat` — animated counter blocks
* `.fc-masonry` — CSS columns gallery
* `.fc-pagination`, `.fc-badge`, `.fc-tooltip`, `.fc-modal-overlay`

Forms use `.fc-form` with `.fc-input`, `.fc-select`, `.fc-textarea`, and `.field` wrappers.

---

## 5. JavaScript Modules

| File | Responsibility |
|------|----------------|
| `main.js` | Sticky nav, mobile menu, ripple, accordion, tabs, counter animation, countdown, toast |
| `theme.js` | Dark/light toggle & RTL toggle (persisted in `localStorage`) |
| `animations.js` | Intersection-observer scroll reveals (`[data-aos]`) |
| `gallery.js` | Lightbox for any `[data-lightbox]` element |
| `forms.js` | Client-side validation for `<form data-validate>` |

Global helper: `window.fcToast(message, 'success' | 'error')`.

---

## 6. Dark Mode

Toggled via the moon icon in the navbar. Persists via `localStorage['fc-theme']`.
Add `data-theme="dark"` on `<html>` to force dark mode by default.

---

## 7. RTL Support

Toggled via the translate icon. Persists via `localStorage['fc-dir']`.
Add `dir="rtl"` on `<html>` to load RTL by default.
Overrides live in `assets/css/rtl.css`.

---

## 8. Home Page Hero Variants

The home page ships **three hero designs** stacked, so you can preview all and choose:

1. **Editorial Split** — image + copy grid with floating badges
2. **Cinematic Full-bleed** — dark overlay on food photography
3. **Split Panel Editorial** — brand-color panel + image

Delete the two you don't want.

---

## 9. SEO

Every page includes:
* Unique `<title>` and `<meta name="description">`
* Canonical URL
* Open Graph & Twitter Card tags
* Schema.org JSON-LD (`FoodEstablishment` on home, `FAQPage` on faq)
* Semantic HTML5 landmarks
* Responsive viewport
* `robots.txt` + `sitemap.xml`

---

## 10. Accessibility (WCAG 2.1 AA)

* Skip-to-content link on home
* Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
* ARIA labels on icon buttons and social links
* Visible focus states via native browser
* Accordion supports Enter/Space keyboard toggling
* Form errors announced via `aria-invalid` styling

---

## 11. Performance

* Fonts preconnected
* Hero image uses `fetchpriority="high"`; all others `loading="lazy"`
* CSS/JS ready for minification (no build required)
* Total dependencies: Bootstrap 5 CSS/JS + Remix Icons + 2 Google Font families

Google Lighthouse target: 90+.

---

## 12. Credits

* **Framework:** Bootstrap 5.3
* **Icons:** Remix Icons (Apache 2.0)
* **Fonts:** Cormorant Garamond & DM Sans (SIL Open Font License)
* **Imagery:** AI-generated for demo purposes — replace with your own before launch.

---

## 13. Changelog

### 1.0.0 — Initial release
* 16 pages, full design system, dark/RTL modes, lightbox gallery, animated counters, quote form.

---

## 14. Support

For customization requests or support enquiries, contact **support@feastcraft.co**.
