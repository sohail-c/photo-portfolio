import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      {/* Navbar */}
      <header>
        <nav className="flex justify-center py-4 border-b border-gray-200">
          <ul className="flex gap-6 text-lg font-medium">
            <li><a href="/" className="text-blue-600">home</a></li>
            <li><a href="/collections" className="hover:text-blue-600">collections</a></li>
            <li><a href="/about" className="hover:text-blue-600">about & contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Masonry Gallery */}
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-6 space-y-4">
        {[
          "chicago.jpg", "chicago-2.jpg", "chicago-3.jpg", "chicago-9.jpg",
          "chicago-5.jpg", "chicago-8.jpg", "chicago-4.jpg", "chicago-7.jpg",
          "oregon-2.jpg", "oregon-3.jpg", "oregon.jpg",
          "other.jpg", "other-2.jpg", "other-3.jpg", "other-4.jpg", "other-5.jpg",
          "other-6.jpg", "other-7.jpg", "other-8.jpg", "other-9.jpg", "other-10.jpg",
          "other-11.jpg",
          "road-trip.jpg", "road-trip-2.jpg",
          "san-diego.jpg", "san-diego-2.jpg", "san-diego-3.jpg", "san-diego-4.jpg",
          "san-diego-5.jpg", "san-diego-6.jpg", "san-diego-7.jpg", "san-diego-8.jpg",
          "san-diego-9.jpg", "san-diego-10.jpg",
        ].map((img, i) => (
          <Image
            key={i}
            src={`/images/${img}`} 
            alt={img}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>© nothing to see here</p>
      </footer>
    </main>
  );
}
