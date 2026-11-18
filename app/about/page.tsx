import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/content/site";
import { imageSize } from "@/content/images";

export const metadata: Metadata = {
  title: "About",
  description: "About Sohail Chutani, Computer Engineering student at UW Bothell.",
  alternates: { canonical: "/about" },
};

const linkClass = "text-blue-600 hover:underline";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
        <img
          src="/images/thumbs/about.jpg"
          alt="Sohail Chutani in a University of Washington Bothell sweatshirt"
          {...imageSize("/images/full/about.jpg")}
          className="h-auto w-full max-w-60 rounded-lg object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-gray-900">About</h1>

          <div className="mt-6 space-y-4 text-base leading-7 text-gray-700">
            <p>
              I&apos;m Sohail, a Computer Engineering student at the University of Washington
              Bothell, graduating in June 2027.
            </p>
            <p>
              Most of my project work is in embedded systems, digital hardware, and PCB design: an{" "}
              <Link href="/projects/capacitance-meter" className={linkClass}>
                ESP32-based capacitance meter
              </Link>{" "}
              and an{" "}
              <Link href="/projects/fpga-processor-system" className={linkClass}>
                FPGA platform for Z80 and 68000-family processor cores
              </Link>
              . I&apos;m most interested in how software and hardware work together.
            </p>
            <p>
              I&apos;m president of our IEEE student branch, a STEM tutor at the Quantitative
              Skills Center, and a grader for the digital circuits and microprocessor courses.
            </p>
            <p>
              I also take photos, mostly while traveling and at events. This site started as a
              place to share them, and the{" "}
              <Link href="/photos" className={linkClass}>
                photography section
              </Link>{" "}
              is still here.
            </p>
            <p>
              I&apos;m based in {siteConfig.location}. The best way to reach me is by email at{" "}
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/resume" className={linkClass}>
              Resume
            </Link>
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
            <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
