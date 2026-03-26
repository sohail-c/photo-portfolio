import Link from "next/link";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {project.year}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">
            {project.title}
          </h3>
        </div>
        <span className="rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
          {project.status}
        </span>
      </div>

      <p className="text-sm leading-6 text-gray-700">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium text-gray-900">
        <Link href={`/projects/${project.slug}`} className="hover:text-blue-600">
          View project
        </Link>
        {project.links?.live ? (
          <Link href={project.links.live} className="text-gray-500 hover:text-gray-900">
            Live site
          </Link>
        ) : null}
      </div>
    </article>
  );
}
