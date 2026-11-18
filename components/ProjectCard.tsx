import Link from "next/link";
import type { Project } from "@/content/types";
import { imageSize } from "@/content/images";
import TagList from "./TagList";

/** Card for a project with its own page: cover image, summary, tags. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow group-hover:shadow-md">
        {project.cover ? (
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            {...imageSize(project.cover.src)}
            loading="lazy"
            decoding="async"
            className="h-52 w-full object-cover"
          />
        ) : null}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {project.period}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-gray-700">{project.summary}</p>
          <TagList tags={project.tags} className="mt-4" />
        </div>
      </article>
    </Link>
  );
}

/** Compact entry for smaller projects that don't have a page. */
export function ProjectListItem({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {project.period}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-gray-900">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-700">{project.summary}</p>
      <TagList tags={project.tags} className="mt-4" />
      {project.links?.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          {link.label}
        </a>
      ))}
    </article>
  );
}
