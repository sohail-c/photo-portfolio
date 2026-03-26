"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const labels: Record<string, string> = {
    photos: "Photography",
    projects: "Projects",
    about: "About",
  };

  const toLabel = (segment: string) =>
    labels[segment] ??
    segment
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

  return (
    <nav className="mb-6 text-sm text-stone-500">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-stone-700 hover:underline">
            Home
          </Link>
        </li>
        {segments.map((segment, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          const isLast = i === segments.length - 1;
          const label = toLabel(segment);

          return (
            <li key={i} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-stone-400">{label}</span>
              ) : (
                <Link href={href} className="text-stone-700 hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
