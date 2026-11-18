import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CollectionCard from "@/components/CollectionCard";
import { photoCollections } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photo collections from trips, events, and wildlife.",
  alternates: { canonical: "/photos" },
};

export default function PhotosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Photography" }]} />

      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Photography</h1>
        <p className="mt-4 text-base text-gray-600">
          Collections from trips, events, and wildlife.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photoCollections.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </div>
    </main>
  );
}
