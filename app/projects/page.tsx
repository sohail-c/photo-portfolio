import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="px-4 py-10">
      <section className="mx-auto max-w-6xl">
        <Breadcrumbs />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Projects
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Software work that supports a broader engineering portfolio.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
              This archive is starting small and will grow over time. The goal
              is to turn the site into a place where projects are explained
              clearly, not just listed.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
              Current focus
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
              <li>Building a stronger personal site and project archive.</li>
              <li>Keeping the stack static-first and Cloudflare-friendly.</li>
              <li>Improving the photo workflow so new work is easier to publish.</li>
            </ul>
          </aside>
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
