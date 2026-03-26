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
  location,
  date,
}: CollectionCardProps) {
  return (
    <Link href={`/photos/${slug}`}>
      <article className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)] transition-transform duration-300 hover:-translate-y-1">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="space-y-3 p-5">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            <span>{new Date(date).getFullYear()}</span>
            {location ? <span>{location}</span> : null}
          </div>
          <h3 className="text-2xl font-semibold text-stone-950">{title}</h3>
          {description ? (
            <p className="text-sm leading-6 text-stone-700">{description}</p>
          ) : null}
          <p className="text-sm font-medium text-orange-700">Open collection</p>
        </div>
      </article>
    </Link>
  );
}
