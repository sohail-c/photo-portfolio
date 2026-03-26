// app/collections/page.tsx
import CollectionCard from "@/components/CollectionCard";
import { photoCollections } from "@/content/photos";

export default function CollectionsPage() {
  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {photoCollections.map((c) => (
        <CollectionCard key={c.slug} {...c} />
      ))}
    </main>
  );
}
