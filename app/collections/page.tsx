import Link from "next/link";
export default function Collections() {
  return (
    <main className="p-6">
        {/* Navbar */}
      <header>
        <nav className="flex justify-center py-4 border-b border-gray-200">
          <ul className="flex gap-6 text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-600">home</Link></li>
            <li><Link href="/collections" className="text-blue-600">collections</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">about & contact</Link></li>
          </ul>
        </nav>
      </header>
      <h1 className="text-4xl font-bold mb-4">Collections</h1>
      <p className="mb-2">
        TK - Collections of different photos.
      </p>
      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>© nothing to see here</p>
      </footer>
    </main>
  );
}
