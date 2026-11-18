"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";

const navItems = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/photos", label: "photos" },
  { href: "/resume", label: "resume" },
  { href: "/about", label: "about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-base font-semibold text-gray-900">
          {siteConfig.name}
        </Link>

        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-gray-700">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={isActive ? "text-blue-600" : "transition hover:text-blue-600"}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
