import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © 2025 {siteConfig.name}. Photographs may not be reused without
          permission.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-gray-800">
            Email
          </Link>
          <Link
            href={siteConfig.socialLinks.github}
            target="_blank"
            className="hover:text-gray-800"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            className="hover:text-gray-800"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
