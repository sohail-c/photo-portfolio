import CollectionCard from "@/components/CollectionCard";
import { photoCollections } from "@/content/photos";

export const metadata = {
  title: "Photography",
};

export default function PhotosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Photography
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Collections from travel, events, and wildlife photography.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {photoCollections.map((collection) => (
            <CollectionCard key={collection.slug} {...collection} />
          ))}
        </div>
      </section>
    </main>
  );
}
