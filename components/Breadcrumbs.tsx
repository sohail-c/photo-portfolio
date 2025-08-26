"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline text-gray-700">
            Home
          </Link>
        </li>
        {segments.map((segment, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          const isLast = i === segments.length - 1;
          const label =
            segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " ");

          return (
            <li key={i} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-400">{label}</span>
              ) : (
                <Link href={href} className="hover:underline text-gray-700">
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