import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
        <div>
          <img
            src="/images/thumbs/about.jpg"
            alt="A picture of Sohail Chutani in a University of Washington Bothell sweatshirt"
            width={240}
            height={240}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900">About</h1>

          <div className="mt-6 space-y-4 text-base leading-7 text-gray-700">
            <p>
              Hello. My name is <strong>Sohail Chutani</strong> and I&apos;m a{" "}
              <strong>Computer Engineering student</strong> at UW Bothell.
            </p>
            <p>
              This site started as a photography portfolio and is gradually
              becoming a broader personal website for projects, photography, and
              other work I want to share online.
            </p>
            <p>
              I&apos;m interested in software, hardware, and building
              things that are useful and maintainable. Photography is still a
              big part of the site, but I also want this to be a place where I
              can showcase engineering work and build a stronger online
              presence.
            </p>
            <p>
              I&apos;m based in {siteConfig.location}. If you want to reach out,
              email{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-blue-600 underline"
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
              className="text-blue-600 hover:underline"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href="/projects"
              className="text-blue-600 hover:underline"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
