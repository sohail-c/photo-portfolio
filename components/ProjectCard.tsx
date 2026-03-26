import Link from "next/link";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            {project.year}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-950">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900">
          {project.status}
        </span>
      </div>

      <p className="text-sm leading-6 text-stone-700">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium text-stone-900">
        <Link href={`/projects/${project.slug}`} className="hover:text-orange-700">
          View project
        </Link>
        {project.links?.live ? (
          <Link href={project.links.live} className="text-stone-500 hover:text-stone-900">
            Live site
          </Link>
        ) : null}
      </div>
    </article>
  );
}
