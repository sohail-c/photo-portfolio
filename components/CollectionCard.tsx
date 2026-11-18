import Link from "next/link";
import type { PhotoCollection } from "@/content/types";
import { fullUrl, imageSize, thumbUrl } from "@/content/images";

export default function CollectionCard({ collection }: { collection: PhotoCollection }) {
  const { slug, title, description, cover, photos, year } = collection;
  const coverAlt = photos.find((p) => p.filename === cover)?.alt ?? "";

  return (
    <Link href={`/photos/${slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow group-hover:shadow-md">
        <img
          src={thumbUrl(cover)}
          alt={coverAlt}
          {...imageSize(fullUrl(cover))}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          <p className="mt-3 text-xs text-gray-500">
            {photos.length} photos{year ? ` · ${year}` : ""}
          </p>
        </div>
      </article>
    </Link>
  );
}
