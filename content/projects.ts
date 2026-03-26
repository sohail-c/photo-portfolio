import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "photo-portfolio",
    title: "Personal Portfolio Platform",
    summary:
      "A static-first Next.js site that combines engineering portfolio work with photography collections.",
    description: [
      "I started this project as a photography portfolio, then expanded it into a broader personal site that can eventually showcase software projects, writing, and a more complete online presence.",
      "The current direction emphasizes a typed local content layer, static export readiness, and a lightweight image workflow that does not depend on platform-specific optimization limits.",
    ],
    year: "2025-2026",
    status: "Active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Static Export"],
    highlights: [
      "Centralized content into shared typed modules for easier future CMS migration.",
      "Added statically generated photo routes that are ready for Cloudflare Pages hosting.",
      "Started reshaping the site from a gallery-first app into a broader personal portfolio.",
    ],
    featured: true,
    links: {
      live: "https://sohailchutani.com",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
);
