import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";
import { photoCollections, photoCollectionsBySlug } from "@/content/photos";
import { thumbUrl, toGalleryPhoto } from "@/content/images";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return photoCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const collection = photoCollectionsBySlug[slug];
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.description,
    // /collections/* is a legacy alias of this page; point search engines here.
    alternates: { canonical: `/photos/${slug}` },
    openGraph: {
      title: collection.title,
      description: collection.description,
      images: [thumbUrl(collection.cover)],
    },
  };
}

export default async function PhotoCollectionPage({ params }: Params) {
  const { slug } = await params;
  const collection = photoCollectionsBySlug[slug];
  if (!collection) notFound();

  const meta = [collection.year, collection.location].filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Photography", href: "/photos" }, { label: collection.title }]} />

      <div className="max-w-3xl">
        {meta.length ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {meta.join(" · ")}
          </p>
        ) : null}
        <h1 className="mt-2 text-4xl font-bold text-gray-900">{collection.title}</h1>
        <p className="mt-4 text-base text-gray-600">{collection.description}</p>
      </div>

      <div className="mt-8">
        <Gallery photos={collection.photos.map(toGalleryPhoto)} />
      </div>
    </main>
  );
}
