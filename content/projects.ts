import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "photo-portfolio",
    title: "Photo Portfolio Website",
    summary:
      "A Next.js site for photography, personal projects, and future portfolio work.",
    description: [
      "This project started as a photography portfolio and is gradually being expanded into a broader personal website.",
      "It currently uses Next.js, TypeScript, and a local content layer so the structure is easier to maintain and extend later.",
    ],
    year: "2025-2026",
    status: "Active",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Static Export"],
    highlights: [
      "Photo collections are generated from shared content files.",
      "The site builds as a static export.",
      "The structure now supports separate home, projects, photos, and about pages.",
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
