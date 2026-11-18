import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard, { ProjectListItem } from "@/components/ProjectCard";
import { otherProjects, projectsWithPages } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Embedded systems, FPGA, and PCB design projects by Sohail Chutani.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Projects" }]} />

      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Projects</h1>
        <p className="mt-4 text-base text-gray-600">
          Hardware and firmware projects from school, an independent study, and the IEEE student
          branch.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsWithPages.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {otherProjects.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-gray-900">Other projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectListItem key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
