// components/CollectionCard.tsx
import Link from "next/link";

interface CollectionCardProps {
  title: string;
  slug: string;
  image: string;
}

export default function CollectionCard({ title, slug, image }: CollectionCardProps) {
  return (
    <Link href={`/collections/${slug}`}>
      <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-xl font-semibold">{title}</p>
        </div>
      </div>
    </Link>
  );
}
