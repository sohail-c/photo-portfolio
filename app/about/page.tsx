import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function About() {
  return (
    <main className="px-4 py-10">
      <section className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
          <img
            src="/images/thumbs/about.jpg"
            alt="A picture of Sohail Chutani in a University of Washington Bothell sweatshirt"
            width={320}
            height={320}
            className="h-auto w-full rounded-[1.5rem] object-cover"
          />
          <div className="mt-6 space-y-2 text-sm text-stone-600">
            <p className="font-semibold uppercase tracking-[0.24em] text-stone-500">
              Based in {siteConfig.location}
            </p>
            <p>Computer Engineering student at UW Bothell.</p>
            <p>Interested in software, systems, and visual storytelling.</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Building a personal site that can hold both engineering work and photography.
          </h1>

          <div className="mt-6 space-y-5 text-lg leading-8 text-stone-700">
            <p>
              I&apos;m <strong>Sohail Chutani</strong>, a <strong>Computer
              Engineering student</strong> at UW Bothell who likes building
              software and carrying a camera whenever there&apos;s a reason to
              slow down and look harder.
            </p>
            <p>
              This project started as a photography portfolio, but I&apos;m now
              reshaping it into a broader personal site. The goal is to make it
              useful both as a place to share image collections and as a way to
              present engineering work, technical interests, and the systems
              thinking behind both.
            </p>
            <p>
              On the engineering side, I&apos;m interested in learning by
              building real things: frontend architecture, deployment tradeoffs,
              typed content systems, and the workflow choices that make a site
              easier to maintain over time.
            </p>
            <p>
              If you want to reach out, email{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-orange-700 underline decoration-orange-300 underline-offset-4"
              >
                {siteConfig.email}
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            >
              LinkedIn
            </Link>
            <Link
              href="/projects"
              className="rounded-full bg-stone-900 px-4 py-2 text-white transition hover:bg-orange-700"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
