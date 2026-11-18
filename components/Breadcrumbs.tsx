import Link from "next/link";

export type Crumb = { label: string; href?: string };

/** Breadcrumbs with explicit labels (so pages show real titles, not URL slugs). */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-x-2">
        {all.map((crumb, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {crumb.href && i < all.length - 1 ? (
              <Link href={crumb.href} className="text-gray-700 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-gray-400">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
