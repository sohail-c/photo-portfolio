import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import ProjectCard from "@/components/ProjectCard";
import { photoCollectionsBySlug } from "@/content/photos";
import { projectsBySlug } from "@/content/projects";
import { siteConfig } from "@/content/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const linkClass = "text-blue-600 hover:underline";

export default function Home() {
  const featuredProjects = siteConfig.featuredProjectSlugs
    .map((slug) => projectsBySlug[slug])
    .filter(Boolean);
  const featuredCollections = siteConfig.featuredPhotoSlugs
    .map((slug) => photoCollectionsBySlug[slug])
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{siteConfig.name}</h1>
        <p className="mt-4 text-lg text-gray-700">{siteConfig.tagline}</p>
        <p className="mt-4 text-base leading-7 text-gray-600">{siteConfig.intro}</p>
        <p className="mt-3 text-base leading-7 text-gray-600">{siteConfig.lookingFor}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <Link href="/projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/resume" className={linkClass}>
            Resume
          </Link>
          <Link href="/photos" className={linkClass}>
            Photography
          </Link>
          <a href={`mailto:${siteConfig.email}`} className={linkClass}>
            Email
          </a>
          <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
          <Link href="/projects" className="text-sm font-medium text-blue-600 hover:underline">
            All projects
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">Photography</h2>
          <Link href="/photos" className="text-sm font-medium text-blue-600 hover:underline">
            All collections
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>
    </main>
  );
}
