# RealX Public Site

RealX is a lightweight public landing site for Qatar's student rewards ecosystem. This repo is a Vite + React + TypeScript + TanStack Router + Tailwind CSS rebuild of the public site, focused on fast static pages, real assets, and maintainable section-based code.

This is not an app platform, dashboard, backend, or merchant portal.

## Stack

- Vite
- React
- TypeScript
- TanStack Router
- Tailwind CSS
- lucide-react for icons

Use `pnpm` for all scripts.

## Local Development

```bash
pnpm install
pnpm dev
```

The dev server is expected to run on `http://localhost:3000`.

## Scripts

```bash
pnpm dev       # Start Vite on port 3000
pnpm check     # Check Prettier formatting
pnpm lint      # Run ESLint
pnpm test      # Run Vitest, currently passes with no test files
pnpm build     # Build production assets
pnpm preview   # Preview the production build
pnpm format    # Format and apply ESLint fixes
```

Before a commit that changes routes, imports, layout, or public pages, run:

```bash
pnpm check
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Use browser verification for visual changes. If the site is already running on `localhost:3000`, verify against that server instead of starting another one.

## Public Routes

Current public route surface:

- `/`
- `/download`
- `/internships`
- `/support`
- `/privacy-policy`
- `/terms-and-conditions`

Do not add speculative routes like `/app`, `/delete-account`, `/fullstack-dev`, or `/mobile-intern` unless the product scope explicitly changes.

## Project Shape

```txt
src/routes/*                  Thin TanStack route wiring
src/pages/*                   Page composition only
src/components/layout/*       Layout, Header, Footer
src/components/sections/*     Specific page/landing sections
src/components/ui/*           Small reusable UI pieces
src/content/*                 Shared copy, links, legal/support content
public/images/*               RealX visual assets
public/fonts/*                Local font files
```

Pages should look like this: import the layout and sections, then compose them. Keep route files thin and keep section markup out of routes.

```tsx
export function HomePage() {
  return (
    <Layout>
      <Hero />
      <StudentPartners />
      <SavingsFeatures />
    </Layout>
  )
}
```

## Architecture Rules

- Keep this a static public React site until there is a real product requirement for more.
- Prefer simple components and structured content objects over clever abstractions.
- Use direct imports. Avoid broad barrel files.
- Add shared UI only when reuse is real.
- Keep components mostly pure and stateless.
- Do not add global state, effects, client data layers, backend clients, analytics layers, or TanStack Query.
- Do not copy Framer-generated HTML, class names, or component structure into the React app.
- Use TanStack `Link` for internal navigation.
- External links and `mailto:` links can use normal anchors.

## Performance Rules

- Use existing assets first.
- Give images stable `width`/`height` or an aspect-ratio wrapper.
- Eager-load only intentional first-viewport images.
- Lazy-load below-fold images.
- Keep large assets out of tiny UI elements.
- Use `font-display: swap` for local fonts.
- Avoid new dependencies unless the current stack truly cannot solve the problem.

## Content

Most public copy lives in `src/content/*`:

- `siteConfig.ts` for global links, footer text, and app store URL
- `home.ts` for landing sections
- `download.ts` for the download page title
- `internships.ts` for careers content
- `support.ts` for support copy and FAQs
- `legal.ts` for privacy policy and terms content

When copy becomes hard to scan inside a component, move it into content. When content is only a tiny local label, keeping it in the section is fine.

## Commit Checklist

Before pushing:

1. Run `pnpm check`.
2. Run `pnpm lint`.
3. Run `pnpm exec tsc --noEmit`.
4. Run `pnpm build`.
5. Smoke-test affected pages in the browser at mobile and desktop widths.
6. Check for horizontal overflow and console warnings/errors.
7. Review large image additions before committing.

## Important Repo Contract

Read `AGENTS.md` before making changes. It is the source of truth for collaboration, architecture, performance, routing, and verification rules in this repo.
