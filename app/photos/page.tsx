import CollectionCard from "@/components/CollectionCard";
import { photoCollections } from "@/content/photos";

export const metadata = {
  title: "Photography",
};

export default function PhotosPage() {
  return (
    <main className="px-4 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
            Photography
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Collections shaped by travel, events, wildlife, and patient observation.
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            This section is the visual side of the site: trips, campus events,
            city studies, and the image sets that still motivated the original
            version of the portfolio.
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
