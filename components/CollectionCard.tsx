// components/CollectionCard.tsx
import Link from "next/link";
import type { PhotoCollection } from "@/content/types";

type CollectionCardProps = Pick<
  PhotoCollection,
  "title" | "slug" | "image" | "description" | "location" | "date"
>;

export default function CollectionCard({
  title,
  slug,
  image,
  description,
}: CollectionCardProps) {
  return (
    <Link href={`/photos/${slug}`}>
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {description ? (
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          ) : null}
        </div>
      </article>
    </Link>
  );
}
