'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="flex justify-center py-4 border-b border-gray-200">
        <ul className="flex gap-6 text-lg font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className={
                pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'
              }
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/collections"
              className={
                pathname === '/collections'
                  ? 'text-blue-600'
                  : 'hover:text-blue-600'
              }
            >
              collections
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname === '/about' ? 'text-blue-600' : 'hover:text-blue-600'
              }
            >
              about & contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}