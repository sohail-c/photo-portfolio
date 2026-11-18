# sohailchutani.com

Personal site: engineering projects, resume, and photography. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**, exported as a fully static site (`output: "export"`) and deployed on **Vercel**.

**Live:** [sohailchutani.com](https://www.sohailchutani.com)

## Structure

| Route | What |
|---|---|
| `/` | Intro, featured projects, featured photo collections |
| `/projects`, `/projects/[slug]` | Project write-ups (only projects with `sections` get a page) |
| `/resume` | HTML resume (mirrors the one-page PDF, without phone number) |
| `/photos`, `/photos/[slug]` | Photo collections with a lightbox |
| `/about` | Bio and contact |
| `/collections/*` | Legacy URLs; same pages with a canonical tag pointing to `/photos/*` |

All content lives in typed files under `content/`:

- `site.ts`: name, intro, links, which projects/collections are featured on the homepage
- `projects.ts`: project cards and write-ups (sections, figures, links)
- `photos.ts`: photo collections (each photo has alt text)
- `resume.ts`: resume content
- `image-sizes.json`: generated, don't edit by hand

## Adding photos

1. Put full-size JPEGs (long edge ≤ 2600px) in `public/images/full/`.
2. Run `pnpm images` to generate 640px thumbnails in `public/images/thumbs/` and refresh `content/image-sizes.json`.
3. Add the photos to a collection in `content/photos.ts`.

## Adding a project

1. Put images in `public/images/projects/<slug>/` and run `pnpm images` so their sizes are recorded.
2. Add an entry to `content/projects.ts`. Add `sections` to give it its own page; to feature it on the homepage, add its slug to `featuredProjectSlugs` in `content/site.ts`.

## Commands

```bash
pnpm dev      # local dev server
pnpm build    # static export to out/
pnpm lint
pnpm images   # thumbnails + image size manifest (add --force to rebuild all)
```

## License

- **Code**: MIT License
- **Photography**: All photographs in `/public/images` are © Sohail Chutani. All rights reserved. They may not be used, copied, or distributed without explicit written permission.
