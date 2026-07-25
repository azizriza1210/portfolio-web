# Implementation Plan: Portfolio Web — Mohammad Aziz Riza

## Overview

A personal software-developer portfolio built with Next.js (App Router, TypeScript), Tailwind CSS v4, and Apple-style spring motion. Showcases RAG-themed projects, an MDX blog, an about page, a contact form, dark mode, resume download, and Vercel analytics. Deployed to Vercel on a `*.vercel.app` subdomain.

## Architecture Decisions

- **Next.js App Router + TypeScript** — modern default, best Vercel integration, file-based routing.
- **Tailwind CSS v4 via PostCSS plugin** — no `tailwind.config.js`; theme tokens via `@theme` directive in CSS. Dark mode via `next-themes` (`attribute="class"`).
- **Bun** as package manager — fast installs, single binary. Installed via PowerShell script on Windows.
- **Framer Motion** for Apple-style motion — spring physics (stiffness ~300, damping ~30), gesture support, `useReducedMotion` for accessibility.
- **MDX (next-mdx-remote + gray-matter)** for blog posts and project case studies — file-based, no CMS, git-versioned content.
- **Route Handler + Resend** for contact form — keeps email within the Next.js stack. Resend deferred (account login forgotten); UI + stub route built now, real send wired later.
- **Vercel Analytics + Speed Insights** — built-in, privacy-friendly, zero-config.
- **Inter** font via `next/font` — safe default, optimized loading, no layout shift.

## Scope Boundaries

**In scope:** project scaffold + design system + motion system + all route scaffolds + 1 example per content type + stub contact form + analytics + deploy.

**Out of scope:** final content (real bio, real project details, real posts), custom domain, full Resend integration, advanced SEO strategy, i18n.

## Tech Stack (versions verified at install time)

| Package | Purpose |
|---------|---------|
| next ^16 | Framework |
| react ^19 | UI runtime |
| tailwindcss ^4 + @tailwindcss/postcss | Styling (v4 PostCSS plugin, no config file) |
| next-themes | Dark mode (SSR-safe, no flash) |
| framer-motion | Apple-style spring animations |
| next-mdx-remote + gray-matter | MDX blog + project case studies |
| zod | Contact form validation |
| resend | Email send (deferred — stub for now) |
| @vercel/analytics + @vercel/speed-insights | Analytics |
| Inter (next/font) | Typography |

## Project Structure (target)

```
Website/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx                    # Home
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx                # Projects grid
│   │   │   │   └── [slug]/page.tsx         # Project case study
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx                # Blog list
│   │   │   │   └── [slug]/page.tsx         # Blog post
│   │   │   ├── about/page.tsx              # About
│   │   │   └── contact/page.tsx            # Contact form
│   │   ├── api/contact/route.ts            # Stub route handler
│   │   ├── layout.tsx                      # Root layout + ThemeProvider
│   │   ├── globals.css                     # @import "tailwindcss" + @theme tokens
│   │   ├── sitemap.ts                      # Dynamic sitemap
│   │   ├── robots.ts                       # Robots
│   │   └── opengraph-image.tsx             # OG image
│   ├── components/
│   │   ├── ui/                             # Button, Card, etc.
│   │   ├── motion/                         # SpringDiv, gesture hooks
│   │   └── sections/                       # Hero, ProjectGrid, etc.
│   ├── content/
│   │   ├── blog/*.mdx                      # MDX blog posts
│   │   └── projects/*.mdx                  # MDX project case studies
│   └── lib/                                # MDX loader, utils
├── public/
│   ├── resume.pdf
│   └── images/
├── postcss.config.mjs                      # { plugins: { "@tailwindcss/postcss": {} } }
├── next.config.ts
├── tsconfig.json
└── bun.lock
```

## Dummy RAG Projects (content scaffolding)

- **RAG Chatbot** — Retrieval-augmented chat over custom docs (LangChain + Pinecone)
- **PDF Q&A Pipeline** — Ingest PDFs, chunk, embed, query with cited sources
- **Multi-modal RAG** — Text + image retrieval for mixed-media knowledge base

## Task Phases

### Phase 0: Prerequisites
- Task 0.1: Install Bun on Windows
- **Checkpoint:** `bun --version` returns 1.x

### Phase 1: Scaffold Project
- Task 1.1: Create Next.js app with create-next-app
- Task 1.2: Verify/upgrade Tailwind to v4
- Task 1.3: Add git remote + push to GitHub
- **Checkpoint:** `localhost:3000` renders default page with Tailwind, repo pushed to `azizriza1210/portfolio-web`

### Phase 2: Design Foundation
- Task 2.1: Configure design tokens via `@theme` in globals.css
- Task 2.2: Install next-themes + dark mode provider (no-flash)
- Task 2.3: Inter font via next/font
- **Checkpoint:** Dark mode works without flash, typography consistent, `bun run build` clean

### Phase 3: Motion System (Apple-style)
- Task 3.1: Install framer-motion
- Task 3.2: Motion primitives (SpringDiv, gesture hooks, reduced-motion)
- Task 3.3: Translucent material components
- **Checkpoint:** Animations smooth, respects `prefers-reduced-motion`, no layout shift

### Phase 4: Core Layout
- Task 4.1: Responsive navbar (sticky, material blur, mobile hamburger w/ spring)
- Task 4.2: Footer (socials, copyright)
- **Checkpoint:** Navigation works, responsive, build clean

### Phase 5: Homepage (first vertical slice)
- Task 5.1: Hero section (name: Mohammad Aziz Riza + tagline + CTA)
- Task 5.2: Featured Projects section (3 RAG dummy projects)
- Task 5.3: Latest Posts section (3 blog post previews)
- **Checkpoint:** Homepage complete, animations smooth, responsive

### Phase 6: MDX Content System
- Task 6.1: Setup MDX (next-mdx-remote + gray-matter + lib/mdx.ts loader)
- Task 6.2: Blog pages (/blog list + /blog/[slug] render)
- Task 6.3: Project pages (/projects grid + /projects/[slug] case study)
- **Checkpoint:** 1 blog post + 1 RAG project render correctly with MDX

### Phase 7: About + Resume
- Task 7.1: About page (bio, skills, experience timeline)
- Task 7.2: Resume download (public/resume.pdf + download button)
- **Checkpoint:** About page complete, resume downloads

### Phase 8: Contact Form (stub backend)
- Task 8.1: Contact form UI + zod validation
- Task 8.2: Stub route handler (logs to console, returns 200)
- **Checkpoint:** Form validates, stub returns 200, error states work

### Phase 9: Analytics + SEO
- Task 9.1: Vercel Analytics + Speed Insights
- Task 9.2: Metadata, sitemap.ts, robots.ts, opengraph-image.tsx
- **Checkpoint:** Lighthouse pass, sitemap accessible, OG image generates

### Phase 10: Deployment
- Task 10.1: Push to GitHub, import to Vercel, set env vars, deploy
- Task 10.2: Verify production (routes 200, analytics active, dark mode persist)
- **Checkpoint:** Site live on `*.vercel.app`, all features work

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| create-next-app installs Tailwind v3 not v4 | Medium | Verify after scaffold; if v3, upgrade to v4 + adjust postcss.config + globals.css |
| Bun not in PATH after install on Windows | Medium | Restart terminal; if still failing, manually add `~/.bun/bin` to PATH |
| Resend account login forgotten | Low | Use stub route handler now; recover account + wire real send as follow-up |
| Tailwind v4 dark mode strategy differs from v3 | Low | Use `next-themes` `attribute="class"` + `@custom-variant dark` in globals.css |
| Framer Motion + RSC boundary issues | Medium | Keep motion components client-only (`"use client"`); render in server components via children |

## Open Questions

- [ ] Resend account recovery: reset password at resend.com/login, or create new account?
- [ ] Real content (bio text, actual project details, real blog posts) — deferred to a separate content phase after setup.

## Verification (per-task + final gate)

After each task:
- [ ] `bun run build` succeeds
- [ ] `bun run lint` clean
- [ ] Manual check of the feature
- [ ] No regression in prior phases

Final Definition of Done:
- [ ] Build clean, lint clean
- [ ] All features verified at runtime
- [ ] Site deployed to Vercel, accessible on `*.vercel.app`
- [ ] No uncommitted changes
- [ ] Repo pushed to `azizriza1210/portfolio-web`

## See Also

Acceptance criteria are per-task and answer "did we build the right thing?". They sit on top of the project-wide Definition of Done — the standing bar every task clears before it counts as done.
