import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { resume } from "@/content/resume";
import { siteConfig } from "@/content/site";
import type { ResumeItem } from "@/content/types";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Sohail Chutani: Computer Engineering at UW Bothell (June 2027), embedded systems and FPGA projects.",
  alternates: { canonical: "/resume" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="border-b border-gray-200 pb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h2>
      <div className="mt-4 space-y-6">{children}</div>
    </section>
  );
}

function Item({ item }: { item: ResumeItem }) {
  const title = item.href ? (
    <Link href={item.href} className="text-blue-600 hover:underline">
      {item.title}
    </Link>
  ) : (
    item.title
  );

  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="shrink-0 text-sm text-gray-500">{item.dates}</p>
      </div>
      {item.org ? <p className="text-sm text-gray-600">{item.org}</p> : null}
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  const { education, skills, projects, work, leadership } = resume;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Resume" }]} />

      <header>
        <h1 className="text-4xl font-bold text-gray-900">{siteConfig.name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {siteConfig.location} ·{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">
            {siteConfig.email}
          </a>{" "}
          ·{" "}
          <a href={siteConfig.socialLinks.linkedin} className="text-blue-600 hover:underline">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href={siteConfig.socialLinks.github} className="text-blue-600 hover:underline">
            GitHub
          </a>
        </p>
        <p className="mt-3 text-sm text-gray-500">Email me for a PDF copy.</p>
      </header>

      <Section title="Education">
        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-semibold text-gray-900">{education.degree}</h3>
            <p className="shrink-0 text-sm text-gray-500">{education.dates}</p>
          </div>
          <p className="text-sm text-gray-600">{education.school}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700">
            {education.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            <span className="font-medium">Coursework:</span> {education.coursework.join(", ")}
          </p>
        </div>
      </Section>

      <Section title="Technical skills">
        <dl className="space-y-2 text-sm leading-6 text-gray-700">
          {skills.map((s) => (
            <div key={s.label}>
              <dt className="inline font-medium text-gray-900">{s.label}: </dt>
              <dd className="inline">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Projects">
        {projects.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Section>

      <Section title="Work experience">
        {work.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Section>

      <Section title="Leadership">
        {leadership.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Section>
    </main>
  );
}
