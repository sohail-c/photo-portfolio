import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectFigure from "@/components/ProjectFigure";
import TagList from "@/components/TagList";
import { projectsBySlug, projectsWithPages } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsWithPages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover ? [project.cover.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project?.sections) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />

      <article>
        <header>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {project.period}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">{project.title}</h1>
          {project.context ? <p className="mt-2 text-sm text-gray-600">{project.context}</p> : null}
          <p className="mt-5 text-lg leading-8 text-gray-700">{project.summary}</p>
          <TagList tags={project.tags} className="mt-5" />
          {project.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </header>

        {project.cover ? (
          <div className="mt-8">
            <ProjectFigure figure={project.cover} eager />
          </div>
        ) : null}

        {project.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-gray-700">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul className="list-disc space-y-3 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {section.figures?.length ? (
              <div className="mt-6 space-y-8">
                {section.figures.map((figure) => (
                  <ProjectFigure key={figure.src} figure={figure} />
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
