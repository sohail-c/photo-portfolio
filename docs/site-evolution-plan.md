# Site Evolution Plan

## Goal

Evolve this project from a simple photo portfolio into a broader personal site that:

- showcases engineering projects and skills
- keeps photography as a major section
- is easy to update
- can be hosted cheaply without worrying about Vercel image limits
- can start with local content and later move to a CMS

## Recommended Direction

- Keep `Next.js`
- Make the site mostly static
- Stop depending on platform-managed image optimization
- Target `Cloudflare Pages` first
- Keep content local and typed first
- Add a CMS later once the content model stabilizes

## Proposed Site Structure

### Pages

- `/`
  - personal landing page
  - short intro
  - featured projects
  - featured photo collection
  - quick links
- `/projects`
  - all engineering/software projects
- `/projects/[slug]`
  - project detail page
- `/photos`
  - photography landing page
  - featured collections
  - optional tags / categories
- `/photos/[slug]`
  - collection detail page
- `/about`
  - bio, interests, background, current focus
- `/resume`
  - either embedded PDF or structured HTML resume
- `/contact`
  - email, LinkedIn, GitHub, optional contact form
- optional `/writing`
  - notes, project writeups, technical posts, trip notes

### Navigation

- Home
- Projects
- Photography
- About
- Resume
- Contact

## Homepage Structure

The homepage should answer four questions quickly:

1. Who are you?
2. What do you build?
3. What do you photograph?
4. Where should someone go next?

### Recommended sections

1. Hero
   - name
   - short title
   - 1-2 sentence positioning statement
   - CTA links to Projects / Photography / Resume
2. Featured Projects
   - 2-4 strongest projects
3. Featured Photography
   - 1-3 collections or a curated image grid
4. Short About section
   - student background
   - areas of interest
5. Contact / social links

## Content Model

Use one typed content layer as the source of truth.

### Suggested folder layout

```text
src/
  content/
    site.ts
    projects.ts
    collections.ts
    types.ts
public/
  images/
    projects/
    photos/
      thumbs/
      full/
```

If you want to stay close to the current repo shape, `src/content` can also just be `content/` at the root.

### Types

```ts
export type SiteConfig = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
  featuredProjectSlugs: string[];
  featuredCollectionSlugs: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role?: string;
  stack: string[];
  status: "active" | "completed" | "archived";
  featured: boolean;
  date: string;
  heroImage?: string;
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
};

export type Photo = {
  srcThumb: string;
  srcFull: string;
  alt: string;
  caption?: string;
  takenAt?: string;
  location?: string;
  tags?: string[];
};

export type Collection = {
  slug: string;
  title: string;
  description?: string;
  coverImage: string;
  featured: boolean;
  location?: string;
  date: string;
  tags?: string[];
  photos: Photo[];
};
```

### Why this matters

This removes the current duplication between:

- [`app/page.tsx`](/Users/sohailchutani/photo-portfolio/app/page.tsx)
- [`app/collections/page.tsx`](/Users/sohailchutani/photo-portfolio/app/collections/page.tsx)
- [`app/collections/[slug]/page.tsx`](/Users/sohailchutani/photo-portfolio/app/collections/[slug]/page.tsx)

All pages should derive from the same content source.

## Proposed Content Strategy

### Projects

Start with 3-5 projects that show range, not volume.

For each project, include:

- problem / goal
- what you built
- stack
- your role
- screenshots
- links
- what you learned

### Photography

Collections should have:

- title
- cover image
- short description
- location
- date
- optional tags
- photo list

Optional later metadata:

- gear used
- captions
- favorites / featured shots

## Routing Migration

### Rename collections to photos

Current:

- `/collections`
- `/collections/[slug]`

Recommended:

- `/photos`
- `/photos/[slug]`

This is more natural for visitors once the site becomes broader than photography.

## Image Strategy

Do not design the app around Vercel image optimization.

### Recommended approach

- Keep pre-generated image sizes
- Serve thumbnails and full-size images as static assets
- Use `next/image` only if you later decide it provides value without tying you to platform limits
- Consider adding an offline image pipeline script later

### Suggested asset structure

```text
public/images/photos/thumbs/
public/images/photos/full/
public/images/projects/
public/images/profile/
```

### Future image pipeline

Add a script later that:

- reads source images from a private source folder
- generates `thumbs/` and `full/`
- optionally writes metadata

Possible command shape:

```bash
pnpm images:build
```

That gives you a repeatable workflow instead of manually creating variants forever.

## Cloudflare Migration Path

## Recommended hosting path

### Phase A: static export on Cloudflare Pages

This is the best fit for the current app.

Why:

- current app is almost fully static
- no backend features are being used
- local images already exist
- static asset delivery is the main need

### What needs to change first

1. Add `generateStaticParams()` for dynamic pages
2. Move route data into a shared content file
3. Configure Next static export
4. Verify all routes build statically

### Likely `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Note:

- `output: "export"` is the key static-hosting change
- `images.unoptimized` avoids relying on a runtime image optimizer if you still use `next/image`

### Dynamic route requirement

For static export, dynamic routes like [`app/collections/[slug]/page.tsx`](/Users/sohailchutani/photo-portfolio/app/collections/[slug]/page.tsx) need `generateStaticParams()`.

Example shape:

```ts
export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}
```

### Cloudflare deploy shape

- build command: `pnpm build`
- output directory: `out`

## Future hosting path

### Phase B: Next.js on Cloudflare Workers

Only do this if later you need:

- CMS preview
- server-side auth
- draft mode
- request-time rendering
- ISR / advanced caching logic

If those features become important, move to the Workers/OpenNext path later. Do not start there unless the product actually needs it.

## CMS Strategy

Do not adopt a CMS immediately.

### Recommended sequence

1. Local typed content
2. Stable schema
3. CMS migration

### Best-fit CMS direction

`Sanity` is likely the best later fit for this project because:

- mixed content works well
- image-heavy content is a first-class use case
- strong editor UX
- good fit for projects + photography + personal-site copy

## Concrete Refactor Plan

## Phase 1: Content consolidation

Goal: remove duplication and make content easier to update.

### Create

- `src/content/types.ts`
- `src/content/site.ts`
- `src/content/projects.ts`
- `src/content/collections.ts`

### Update

- [`app/page.tsx`](/Users/sohailchutani/photo-portfolio/app/page.tsx)
- [`app/collections/page.tsx`](/Users/sohailchutani/photo-portfolio/app/collections/page.tsx)
- [`app/collections/[slug]/page.tsx`](/Users/sohailchutani/photo-portfolio/app/collections/[slug]/page.tsx)

### Result

- one source of truth
- easier to add collections
- easier to feature content on homepage

## Phase 2: Information architecture shift

Goal: turn site into a broader personal portfolio.

### Create

- `app/projects/page.tsx`
- `app/projects/[slug]/page.tsx`
- `app/resume/page.tsx`
- `app/contact/page.tsx`

### Rename

- `app/collections` -> `app/photos`

### Update

- [`components/Navbar.tsx`](/Users/sohailchutani/photo-portfolio/components/Navbar.tsx)
- [`components/Breadcrumbs.tsx`](/Users/sohailchutani/photo-portfolio/components/Breadcrumbs.tsx)
- [`app/about/page.tsx`](/Users/sohailchutani/photo-portfolio/app/about/page.tsx)

### Result

- clearer personal brand
- broader online presence
- room for both engineering and photography

## Phase 3: Static hosting readiness

Goal: deploy cleanly to Cloudflare Pages.

### Update

- [`next.config.ts`](/Users/sohailchutani/photo-portfolio/next.config.ts)
- dynamic routes to include `generateStaticParams`
- metadata in [`app/layout.tsx`](/Users/sohailchutani/photo-portfolio/app/layout.tsx)

### Verify

- `pnpm lint`
- `pnpm build`
- confirm `out/` is generated
- confirm no route requires runtime rendering

## Phase 4: Visual redesign

Goal: make the site feel intentional and professional.

### Update

- homepage layout
- typography
- navigation
- project cards
- photography landing page
- about page copy

### Result

- stronger first impression
- more useful as a personal website
- better separation between engineering and photography

## Phase 5: CMS migration later

Goal: improve update workflow once content patterns are stable.

### Likely content to move first

- projects
- homepage featured content
- about page text
- collection metadata

### Likely content to keep out of CMS initially

- raw image files
- generated thumbnails
- layout and UI configuration

## Concrete First Sprint

If doing this incrementally, the first sprint should be:

1. Create shared typed content files
2. Refactor current collection pages to read from shared content
3. Add `generateStaticParams()`
4. Configure static export
5. Rename `collections` to `photos`
6. Add a simple `/projects` page with placeholder entries
7. Rewrite homepage to include intro + featured projects + featured photos

## Definition of Done for the next major version

- site has Home / Projects / Photography / About / Resume / Contact
- photography content is driven from one source of truth
- new collection can be added in one place
- app builds as static export
- app is ready for Cloudflare Pages
- homepage communicates both engineering and photography identity

## Non-goals right now

- building a custom admin panel
- adding a database
- adding AWS services just for the sake of moving off Vercel
- introducing request-time infrastructure before it is needed
