import type { MetadataRoute } from "next";
import { photoCollections } from "@/content/photos";
import { projectsWithPages } from "@/content/projects";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/projects",
    ...projectsWithPages.map((p) => `/projects/${p.slug}`),
    "/resume",
    "/photos",
    ...photoCollections.map((c) => `/photos/${c.slug}`),
    "/about",
  ];
  return paths.map((path) => ({ url: `${siteConfig.url}${path}` }));
}
