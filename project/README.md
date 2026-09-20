# Moatasem Tareq Mohammed Hashem — Network Engineer Portfolio

A professional, bilingual (English/Arabic) portfolio website for a Network Engineer and Technical Support Engineer, built with **HTML5, CSS3, vanilla JavaScript, JSON, and SVG** — no frameworks, no build tools, no dependencies.

## Project Overview

This portfolio presents Moatasem's professional identity as a Network Engineer with Technical Support experience. It features an interactive SVG network topology visualization, a NOC-style terminal, animated network nodes, a troubleshooting diagnostic flow, and full RTL/LTR bilingual support.

All content is sourced strictly from the uploaded CV. No information has been fabricated.

## Folder Structure

```
project/
├── index.html              Main HTML file
├── css/
│   ├── style.css           Core styles, layout, components
│   ├── network.css         Network topology SVG styles
│   ├── animations.css      Keyframe animations + reduced-motion
│   └── responsive.css      Breakpoint overrides (1024 / 768 / 430px)
├── js/
│   ├── main.js             Data loading, content rendering, terminal
│   ├── network-animation.js  SVG topology, packets, tooltips
│   ├── navigation.js       Sticky nav, mobile menu, active section
│   └── language.js         Bilingual i18n system (EN/AR)
├── data/
│   ├── profile.json        Name, title, bio, education, contact, CV path
│   ├── skills.json         Skill groups and items
│   ├── experience.json     Work experience timeline entries
│   └── projects.json       Project/lab nodes
├── assets/
│   ├── icons/              Favicon SVG
│   └── images/             (add images here if needed)
├── public/
│   └── cv/                 CV PDF file
└── README.md               This file
```

## How to Run Locally

### Option 1: VS Code + Live Server (recommended)

1. Download and extract the project folder.
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension (by Ritwick Dey).
4. Right-click `index.html` → **Open with Live Server**.
5. The site opens in your browser at `http://127.0.0.1:5500`.

### Option 2: Any local web server

Because the site loads JSON files via `fetch()`, you need a local server (not just opening the file directly). Examples:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`.

> **Note:** Opening `index.html` directly with `file://` will not work because browsers block `fetch()` of local JSON files. Use a local server.

## How to Edit Content

All editable content lives in the `data/` folder as JSON files. You do not need to touch JavaScript to update content.

### Edit Profile Information

Open `data/profile.json`:

- **Name**: `identity.name.en` and `identity.name.ar`
- **Headline**: `identity.headline.en` / `.ar`
- **Secondary title**: `identity.secondaryTitle.en` / `.ar`
- **Summary**: `identity.summary.en` / `.ar`
- **Contact**: `contact.phone`, `contact.email`, `contact.linkedin`
- **Education**: `education` array — add/remove entries
- **Languages**: `languages` array
- **CV path**: `cv` field

### Edit Skills

Open `data/skills.json`:

Each group has an `id`, a bilingual `title`, and an `items` array. Add or remove items freely.

```json
{
  "id": "networking",
  "title": { "en": "Networking", "ar": "الشبكات" },
  "items": ["LAN/WAN", "VLAN", ...]
}
```

### Edit Experience

Open `data/experience.json` — an array of job objects. Each has:

- `role`, `company`, `location`, `date`, `type` — all bilingual `{ en, ar }`
- `items` — an object with `en` and `ar` arrays of bullet points

### Edit Projects

Open `data/projects.json` — a `nodes` array. Each node has:

- `title`, `type`, `description` — bilingual
- `area` — controls the icon (`network`, `security`, or `support`)

## How to Replace the CV

1. Replace the file at `public/cv/Moatasem_Hashem_CV_Updated.pdf` with your updated CV.
2. If the filename changes, update the `cv` field in `data/profile.json` and the `href` attributes in `index.html`.

## How to Change Colors

All colors are CSS custom properties (variables) at the top of `css/style.css`:

```css
:root {
  --navy-900: #0d1528;    /* Main background */
  --accent-400: #22d3ee;  /* Cyan accent */
  --deep-500: #3b82f6;    /* Blue accent */
  --green: #22c55e;       /* Online/success */
  ...
}
```

Change these values to update the entire site's color scheme.

## How to Change Languages

- The language switcher (EN | ع) is in the navbar.
- Preference is saved in `localStorage` and persists across visits.
- Translation strings are in `js/language.js` under the `I18N` object.
- To add a new language: add a new key (e.g. `fr: { ... }`) and add a button in `index.html`.

Technical terms (Routing, Switching, VLAN, VPN, etc.) are intentionally kept in English in the Arabic version where that is industry standard.

## How to Deploy

This is a static website — deploy it to any static hosting service:

- **Netlify**: Drag and drop the project folder, or connect a Git repo.
- **Vercel**: Import the project folder.
- **GitHub Pages**: Push to a repo, enable Pages in settings.
- **Any web server**: Upload all files via FTP/SFTP.

No build step is required. All files are served as-is.

## Accessibility

- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content link
- ARIA labels on interactive elements
- Keyboard-navigable network nodes (Tab + Enter)
- Focus-visible outlines
- `prefers-reduced-motion` support (disables animations)
- Sufficient color contrast (white text on dark navy)

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses standard HTML5, CSS3, and ES6+ JavaScript.

---

© 2026 Moatasem Tareq Mohammed Hashem. All rights reserved.
