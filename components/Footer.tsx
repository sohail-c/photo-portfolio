import { siteConfig } from "@/content/site";

export default function Footer() {
  // Static export: this is the year of the last build, which is fine for a footer.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. Photographs may not be reused without permission.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-gray-800">
            Email
          </a>
          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
