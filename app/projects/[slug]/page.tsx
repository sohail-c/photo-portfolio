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
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="mx-auto max-w-4xl">
        <Breadcrumbs />

        <article className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <span>{project.year}</span>
            <span>{project.status}</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 text-base text-gray-700">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base leading-7 text-gray-700">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Highlights
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {project.links?.live ? (
            <div className="mt-10">
              <Link
                href={project.links.live}
                className="inline-flex text-sm font-medium text-blue-600 hover:underline"
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
