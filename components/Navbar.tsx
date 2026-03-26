'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/photos', label: 'Photography' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[color:var(--background)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
            Sohail Chutani
          </p>
          <p className="truncate text-base text-stone-900">
            Engineering + photography portfolio
          </p>
        </Link>

        <ul className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-stone-600">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 transition ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'hover:bg-stone-100 hover:text-stone-900'
                  }`}
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
