<div align="center">
  <a href="https://benjamin-nnaemeka.dev" target="_blank">
    <img src="./public/logo.svg" alt="Benjamin Nnaemeka Logo" width="76" height="88" />
  </a>

# Benjamin Nnaemeka

  <p>
    <strong>Software Engineer & Founder of <a href="https://getapexly.com">APEXLY</a></strong>
  </p>

  <p>
    A sleek, responsive personal portfolio engineered with <strong>Next.js 15 (App Router)</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, inspired & designed by the Brittany Chiang v4 design aesthetic.
  </p>

  <p>
    <a href="https://benjamin-nnaemeka.dev">
      <img src="https://img.shields.io/badge/Status-Live-64ffda?style=for-the-badge&logo=googlechrome&logoColor=0a192f&labelColor=0a192f" alt="Live Site" />
    </a>
    <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://kotlinlang.org/">
      <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
    </a>
    <a href="https://www.postgresql.org/">
      <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-233554?style=for-the-badge&logoColor=white" alt="MIT License" />
    </a>
  </p>

  <p>
    <a href="https://benjamin-nnaemeka.dev"><strong>Explore Live Portfolio »</strong></a>
  </p>
</div>

<br />

---

## Overview

This repository contains the source code for my personal developer portfolio, highlighting engineering projects, production deployments, and career experience across native Android development, full-stack web platforms, and automated workflow pipelines.

### Key Highlights

- **Authentic Duotone & Overlapping Grid:** Custom CSS mix-blend modes with pixel-aligned image cards, 16:10 screenshot preservation, and interactive micro-animations.
- **Strict Architectural Separation:** All personal data, projects, work history, and socials are centralized in typed modules under `lib/data/`, keeping presentation components decoupled and maintainable.
- **Performance & SEO First:** Next.js App Router metadata, preloaded typography (Calibre & SF Mono), and zero layout shifts.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** Custom SVG path components (zero runtime overhead)
- **Typography:** Self-hosted Calibre and SF Mono fonts

---

## Architecture & Project Structure

```
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Core styles, utilities & theme tokens
│   ├── layout.tsx           # Root layout, metadata & font preloads
│   ├── page.tsx             # Main single-page application orchestrator
│   └── robots.txt
├── components/              # Presentation layer (strictly decoupled)
│   ├── About.tsx            # About Me section with signature offset duotone frame
│   ├── Contact.tsx          # Get In Touch section with copy-to-clipboard email
│   ├── EmailSidebar.tsx     # Fixed right vertical email link
│   ├── Footer.tsx           # Mobile socials & credits
│   ├── Hero.tsx             # Intro section with animated staggered entrance
│   ├── Icons.tsx            # Lightweight custom SVG icon set
│   ├── Jobs.tsx             # Interactive tabbed work experience component
│   ├── Loader.tsx           # Initial branded loading sequence
│   ├── Navbar.tsx           # Responsive header with scroll-hide behavior
│   ├── Projects.tsx         # Featured overlapping project showcases & grid
│   └── SocialSidebar.tsx    # Fixed left vertical social links
├── lib/
│   ├── data/                # Single source of truth (typed data layer)
│   │   ├── jobs.ts          # Career roles & responsibilities
│   │   ├── profile.ts       # Bio, skills, socials & contact details
│   │   └── projects.ts      # Featured & other engineering projects
│   └── utils.ts             # Tailwind class merging helper
└── public/
    ├── fonts/               # Self-hosted Calibre and SF Mono web fonts
    ├── profile/             # Profile avatar image
    ├── projects/            # 16:10 high-resolution project screenshots
    └── logo.svg             # Hexagonal brand vector asset
```

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (or npm / yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/benjamin-nnaemeka-dev/benjamin.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Content Management

All content is decoupled from presentation components. To update any text, experience, or projects, edit the corresponding file in `lib/data/`:

- **Profile & Bio:** [`lib/data/profile.ts`](lib/data/profile.ts)
- **Work Experience:** [`lib/data/jobs.ts`](lib/data/jobs.ts)
- **Featured Projects:** [`lib/data/projects.ts`](lib/data/projects.ts)

---

## Connect

- **Website:** [benjamin-nnaemeka.dev](https://benjamin-nnaemeka.dev)
- **GitHub:** [@benjamin-nnaemeka-dev](https://github.com/benjamin-nnaemeka-dev)
- **LinkedIn:** [benjamin-nnaemeka](https://linkedin.com/in/benjamin-nnaemeka)
- **Email:** [hi@benjamin-nnaemeka.dev](mailto:hi@benjamin-nnaemeka.dev)

---

## Credits & Attribution

This portfolio is built as an open source template and derivative work.

- **Original Visual Design:** [Brittany Chiang](https://brittanychiang.com) (v4 Portfolio)
- **Next.js 15 Engineering & Refinements:** [Benjamin Nnaemeka](https://benjamin-nnaemeka.dev)

### Usage & Forks

If you fork, copy, or adapt this Next.js 15 template for your own portfolio, please maintain open source community standards by keeping the attribution footer links active and crediting both **Brittany Chiang** (for the design) and **Benjamin Nnaemeka** (for this Next.js implementation and architecture).

---

## License

This project is open source and available under the [MIT License](LICENSE).
