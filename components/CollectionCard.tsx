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
        <div
          className="
            absolute inset-0 flex items-center justify-center
            bg-black/40
            text-white text-xl font-semibold
            opacity-100
            md:opacity-0 md:group-hover:opacity-100
            transition
          "
        >
          {title}
        </div>
      </div>
    </Link>
  );
}
