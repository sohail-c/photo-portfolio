import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-stone-600 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-stone-900">
            {siteConfig.name}
          </p>
          <p>{siteConfig.tagline}</p>
          <p>
            Photographs remain copyrighted and may not be reused without
            permission.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-stone-900">
            Email
          </Link>
          <Link
            href={siteConfig.socialLinks.github}
            target="_blank"
            className="hover:text-stone-900"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            className="hover:text-stone-900"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
