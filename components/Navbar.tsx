'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/photos", label: "photos" },
    { href: "/about", label: "about" },
  ];

  return (
    <header>
      <nav className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-base font-semibold text-gray-900">
            Sohail Chutani
          </Link>

          <ul className="flex flex-wrap gap-5 text-sm font-medium text-gray-700">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
