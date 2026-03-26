import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="mx-auto max-w-6xl">
        <Breadcrumbs />

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Projects I want to document more clearly over time.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
