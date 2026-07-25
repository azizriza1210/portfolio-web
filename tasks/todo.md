# Todo: Portfolio Web — Mohammad Aziz Riza

## Phase 0: Prerequisites
- [x] Task 0.1: Install Bun on Windows (`powershell -c "irm bun.sh/install.ps1|iex"`)
  - Acceptance: `bun --version` returns 1.x in a new terminal
  - Verify: `bun --version`
  - Files: none

## Phase 1: Scaffold Project
- [x] Task 1.1: Create Next.js app with create-next-app
  - Acceptance: Next.js project exists in current dir with TS, Tailwind, App Router, src dir
  - Verify: `bun run dev` → localhost:3000 renders default page
  - Files: entire scaffolded project
- [x] Task 1.2: Verify Tailwind v4 (upgrade if v3)
  - Acceptance: `package.json` shows `tailwindcss` ^4.x; `postcss.config.mjs` uses `@tailwindcss/postcss`; `globals.css` has `@import "tailwindcss"`
  - Verify: inspect package.json + postcss.config.mjs + globals.css
  - Files: package.json, postcss.config.mjs, src/app/globals.css
- [x] Task 1.3: Add git remote + push to GitHub
  - Acceptance: code pushed to `https://github.com/azizriza1210/portfolio-web` on `main`
  - Verify: `git remote -v` + check repo on GitHub
  - Files: none (git operations only)

## Phase 2: Design Foundation
- [x] Task 2.1: Configure design tokens via `@theme` in globals.css
  - Acceptance: color tokens (light/dark), spacing, radius, shadows defined in CSS
  - Verify: tokens usable in Tailwind classes, build clean
  - Files: src/app/globals.css
- [x] Task 2.2: Install next-themes + dark mode provider
  - Acceptance: dark mode toggle works, no flash on SSR, preference persisted
  - Verify: toggle theme, reload page — no flash, preference retained
  - Files: src/app/layout.tsx, src/components/ui/ThemeToggle.tsx
- [x] Task 2.3: Inter font via next/font
  - Acceptance: Inter loaded via next/font, applied globally, no layout shift
  - Verify: inspect font-family in devtools, no FOUT
  - Files: src/app/layout.tsx, src/app/globals.css

## Phase 3: Motion System (Apple-style)
- [x] Task 3.1: Install framer-motion
  - Acceptance: `framer-motion` in dependencies
  - Verify: `bun pm ls | grep framer-motion`
  - Files: package.json
- [x] Task 3.2: Motion primitives (SpringDiv, gesture hooks, reduced-motion)
  - Acceptance: reusable motion components with Apple-like spring defaults, respects `prefers-reduced-motion`
  - Verify: render SpringDiv with animation, toggle reduced-motion in devtools
  - Files: src/components/motion/SpringDiv.tsx, src/components/motion/hooks.tsx
- [x] Task 3.3: Translucent material components
  - Acceptance: backdrop-blur material component available for navbar/cards
  - Verify: visual check — translucent layer over content
  - Files: src/components/ui/Material.tsx

## Phase 4: Core Layout
- [x] Task 4.1: Responsive navbar (sticky, material blur, mobile hamburger w/ spring)
  - Acceptance: navbar sticky on scroll with blur, mobile menu animates with spring, active route indicator
  - Verify: resize to mobile, toggle menu, scroll page
  - Files: src/components/layout/Navbar.tsx
- [x] Task 4.2: Footer (socials, copyright)
  - Acceptance: footer with GitHub/LinkedIn/social links + copyright
  - Verify: visual check, links work
  - Files: src/components/layout/Footer.tsx

## Phase 5: Homepage (first vertical slice)
- [x] Task 5.1: Hero section
  - Acceptance: "Mohammad Aziz Riza" + tagline + CTA to projects, spring entrance animation
  - Verify: visual check + animation on load
  - Files: src/components/sections/Hero.tsx, src/app/page.tsx
- [x] Task 5.2: Featured Projects section (3 RAG dummy)
  - Acceptance: grid of 3 RAG project cards with hover spring + tilt, link to /projects/[slug]
  - Verify: hover effect, links work
  - Files: src/components/sections/FeaturedProjects.tsx, src/content/projects/*.mdx
- [x] Task 5.3: Latest Posts section (3 previews)
  - Acceptance: 3 latest blog post previews linking to /blog/[slug]
  - Verify: links work, posts sorted by date
  - Files: src/components/sections/LatestPosts.tsx, src/content/blog/*.mdx

## Phase 6: MDX Content System
- [x] Task 6.1: Setup MDX (next-mdx-remote + gray-matter + lib/mdx.ts loader)
  - Acceptance: MDX files parseable, frontmatter extractable, content renderable
  - Verify: import + render a test MDX file
  - Files: src/lib/mdx.ts, package.json
- [x] Task 6.2: Blog pages
  - Acceptance: /blog lists all posts with frontmatter; /blog/[slug] renders MDX with TOC + prev/next
  - Verify: visit both routes, check MDX renders
  - Files: src/app/(routes)/blog/page.tsx, src/app/(routes)/blog/[slug]/page.tsx
- [x] Task 6.3: Project pages
  - Acceptance: /projects shows filterable grid; /projects/[slug] shows case study
  - Verify: visit both routes, check case study renders
  - Files: src/app/(routes)/projects/page.tsx, src/app/(routes)/projects/[slug]/page.tsx

## Phase 7: About + Resume
- [x] Task 7.1: About page (bio, skills, experience timeline)
  - Acceptance: /about shows bio, skills, timeline with scroll-triggered spring animations
  - Verify: visit /about, scroll to trigger animations
  - Files: src/app/(routes)/about/page.tsx
- [x] Task 7.2: Resume download
  - Acceptance: resume.pdf in /public, download button in About + Navbar
  - Verify: click download, file downloads
  - Files: public/resume.pdf, src/components/ui/ResumeButton.tsx

## Phase 8: Contact Form (stub backend)
- [x] Task 8.1: Contact form UI + zod validation
  - Acceptance: form with name/email/message, client-side zod validation, states (idle/submitting/success/error)
  - Verify: submit invalid data → validation errors; submit valid data → success state
  - Files: src/app/(routes)/contact/page.tsx, src/lib/validations/contact.ts
- [x] Task 8.2: Stub route handler
  - Acceptance: POST /api/contact logs payload to console, returns 200, no real email sent
  - Verify: submit form, check server logs, check 200 response
  - Files: src/app/api/contact/route.ts

## Phase 9: Analytics + SEO
- [x] Task 9.1: Vercel Analytics + Speed Insights
  - Acceptance: `<Analytics />` + `<SpeedInsights />` in layout, data visible in Vercel dashboard after deploy
  - Verify: inspect layout, check Vercel dashboard post-deploy
  - Files: src/app/layout.tsx, package.json
- [x] Task 9.2: Metadata, sitemap.ts, robots.ts, opengraph-image.tsx
  - Acceptance: metadata export in root layout, dynamic sitemap at /sitemap.xml, robots at /robots.txt, OG image generates
  - Verify: visit /sitemap.xml, /robots.txt, inspect page source for OG tags
  - Files: src/app/layout.tsx, src/app/sitemap.ts, src/app/robots.ts, src/app/opengraph-image.tsx

## Phase 10: Deployment
- [ ] Task 10.1: Push to GitHub, import to Vercel, set env vars, deploy
  - Acceptance: site deployed to `*.vercel.app`, env vars set (RESEND_API_KEY placeholder)
  - Verify: visit Vercel URL, all routes return 200
  - Files: none (deployment ops)
- [ ] Task 10.2: Verify production
  - Acceptance: all features work in production, analytics active, dark mode persists
  - Verify: manual test of all routes + dark mode + analytics dashboard
  - Files: none (verification only)
