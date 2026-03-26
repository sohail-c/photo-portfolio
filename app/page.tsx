import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import ProjectCard from "@/components/ProjectCard";
import { photoCollectionsBySlug } from "@/content/photos";
import { featuredProjects } from "@/content/projects";
import Gallery from "@/components/Gallery";
import { siteConfig } from "@/content/site";

export default function Home() {
  const featuredProject = featuredProjects[0];
  const featuredCollections = siteConfig.featuredPhotoSlugs
    .map((slug) => photoCollectionsBySlug[slug])
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg text-gray-700">{siteConfig.tagline}</p>
        <p className="mt-4 text-base text-gray-600">{siteConfig.intro}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/projects" className="text-blue-600 hover:underline">
            View projects
          </Link>
          <Link href="/photos" className="text-blue-600 hover:underline">
            View photography
          </Link>
          <Link href="/about" className="text-blue-600 hover:underline">
            About
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
        <p className="mt-2 text-gray-600">
          A place for software work, experiments, and ongoing portfolio
          updates.
        </p>
        {featuredProject ? (
          <div className="mt-6 max-w-3xl">
            <ProjectCard project={featuredProject} />
          </div>
        ) : null}
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Photography</h2>
            <p className="mt-2 text-gray-600">
              A selection of photo collections from trips, events, and wildlife.
            </p>
          </div>
          <Link href="/photos" className="text-sm font-medium text-blue-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.slug} {...collection} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900">Recent images</h2>
        <p className="mt-2 text-gray-600">
          A broader mix from across the portfolio.
        </p>
        <div className="mt-4">
          <Gallery photos={siteConfig.homeGalleryPhotos} />
        </div>
      </section>
    </main>
  );
}
