import Link from "next/link";
import CollectionCard from "@/components/CollectionCard";
import ProjectCard from "@/components/ProjectCard";
import { photoCollectionsBySlug } from "@/content/photos";
import { featuredProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function Home() {
  const featuredProject = featuredProjects[0];
  const featuredCollections = siteConfig.featuredPhotoSlugs
    .map((slug) => photoCollectionsBySlug[slug])
    .filter(Boolean);
  const photoPreview = siteConfig.homeGalleryPhotos.slice(0, 5);

  return (
    <main className="px-4 pb-16">
      <section className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
            {siteConfig.location}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
            Software projects, photography, and the personal site tying them together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            {siteConfig.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Explore projects
            </Link>
            <Link
              href="/photos"
              className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:text-stone-950"
            >
              Browse photography
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-stone-600 transition hover:text-stone-950"
            >
              About me
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-stone-200 bg-white/75 p-4 shadow-[0_24px_80px_-56px_rgba(32,24,16,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Static-first web apps, typed content, and maintainable frontend systems.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-stone-200 bg-white/75 p-4 shadow-[0_24px_80px_-56px_rgba(32,24,16,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Medium
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Engineering work on one side, photography collections on the other.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-stone-200 bg-white/75 p-4 shadow-[0_24px_80px_-56px_rgba(32,24,16,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Direction
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Cloudflare-friendly hosting, easier updates, and a cleaner project archive.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2 rounded-[2rem] border border-stone-200 bg-white/75 p-3 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
            <img
              src="/images/about.jpg"
              alt="Portrait of Sohail Chutani"
              width={900}
              height={700}
              className="h-[22rem] w-full rounded-[1.4rem] object-cover sm:h-[26rem]"
            />
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white/75 p-3 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
            <img
              src="/images/thumbs/san-diego-8.jpg"
              alt="San Diego palm trees"
              width={600}
              height={600}
              className="h-52 w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white/75 p-3 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
            <img
              src="/images/thumbs/chicago-3.jpg"
              alt="Chicago city scene"
              width={600}
              height={600}
              className="h-52 w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 py-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,233,214,0.82))] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
            Featured project
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
            Building the site as both product and proof of work.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
            The current project section starts with the platform you&apos;re
            looking at now: a static-first Next.js site that&apos;s slowly
            turning from a photo archive into a broader personal portfolio.
          </p>
          {featuredProject ? (
            <div className="mt-6">
              <ProjectCard project={featuredProject} />
            </div>
          ) : null}
        </div>

        <aside className="rounded-[2rem] border border-stone-200 bg-white/80 p-7 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
            What this site is becoming
          </p>
          <ul className="mt-5 space-y-4 text-base leading-7 text-stone-700">
            <li>A clearer engineering portfolio with real project writeups.</li>
            <li>A photography section that is easier to update and organize.</li>
            <li>A better public home on the internet than a bare social profile.</li>
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Featured photography
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
              Collections with a bit more intent than a generic gallery feed.
            </h2>
          </div>
          <Link href="/photos" className="text-sm font-semibold text-orange-700 hover:text-orange-800">
            View all photography
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.slug} {...collection} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Preview grid
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">
              A quick look at the image archive behind the collections.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white/70 p-3 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
            <img
              src={`/images/thumbs/${photoPreview[0]}`}
              alt="Featured portfolio preview"
              width={1200}
              height={900}
              className="h-[22rem] w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {photoPreview.slice(1).map((photo) => (
              <div
                key={photo}
                className="rounded-[2rem] border border-stone-200 bg-white/70 p-3 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]"
              >
                <img
                  src={`/images/thumbs/${photo}`}
                  alt={photo}
                  width={600}
                  height={600}
                  className="h-40 w-full rounded-[1.4rem] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
