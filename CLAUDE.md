# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication

ユーザーとのやり取りは日本語で行ってください。

## Build & Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (outputs to /dist)
npm run preview  # Preview production build locally
```

No lint or test commands are configured.

## Architecture Overview

**Framework:** Astro 5 with React 19 integration, Tailwind CSS 4, Motion (animations), Lucide React (icons)

**Site Structure:** Personal portfolio with dual-theme sections:
- `/` - Terminal-style landing page with path selection
- `/dev` - Technical portfolio (light theme)
- `/me` - Personal interests (dark theme: #0d1117 background, cyan/green accents)

**Key Directories:**
- `src/pages/` - Astro pages (file-based routing)
- `src/components/dev/` - React components for /dev page
- `src/components/me/` - React components for /me page
- `src/data/dev/` - TypeScript data files (profile.ts, skills.ts, works.ts, links.ts)
- `src/layouts/Layout.astro` - Base HTML template

## Component Patterns

- Astro pages import React components with `client:load` directive for client-side hydration
- Section-based composition (HeroSection, SkillsSection, etc.)
- Content stored in typed TypeScript data files, passed to components via props
- Motion library for scroll-triggered animations (`whileInView`)
- Inline style objects for dynamic colors; Tailwind for layout

## Coding Conventions

- PascalCase for React components
- camelCase for data files
- Lowercase for Astro pages
- TypeScript interfaces for all data structures
- Inter font (default) + JetBrains Mono (terminal aesthetic)

## Content Updates

Edit TypeScript files in `src/data/dev/` for static content changes. Maintain existing interfaces for type safety.
