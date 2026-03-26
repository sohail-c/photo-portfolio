import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { projects, projectsBySlug } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) return notFound();

  return (
    <main className="px-4 py-10">
      <section className="mx-auto max-w-4xl">
        <Breadcrumbs />

        <article className="rounded-[2rem] border border-stone-200 bg-white/85 p-8 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)] sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            <span>{project.year}</span>
            <span>{project.status}</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-stone-700">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base leading-8 text-stone-700">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-7 text-stone-700">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {project.links?.live ? (
            <div className="mt-10">
              <Link
                href={project.links.live}
                className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                View live site
              </Link>
            </div>
          ) : null}
        </article>
      </section>
    </main>
  );
}
