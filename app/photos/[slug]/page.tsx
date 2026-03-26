import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";
import { photoCollections, photoCollectionsBySlug } from "@/content/photos";

export function generateStaticParams() {
  return photoCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function PhotoCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = photoCollectionsBySlug[slug];

  if (!collection) return notFound();

  return (
    <main className="px-4 py-8">
      <section className="mx-auto max-w-6xl">
        <Breadcrumbs />

        <div className="max-w-3xl rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-[0_24px_80px_-48px_rgba(32,24,16,0.45)]">
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            <span>{new Date(collection.date).getFullYear()}</span>
            {collection.location ? <span>{collection.location}</span> : null}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
            {collection.title}
          </h1>
          {collection.description ? (
            <p className="mt-4 text-lg leading-8 text-stone-700">
              {collection.description}
            </p>
          ) : null}
        </div>

        <div className="mt-8">
          <Gallery photos={collection.photos.map((photo) => photo.filename)} />
        </div>
      </section>
    </main>
  );
}
