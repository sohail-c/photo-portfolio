// app/collections/page.tsx
import CollectionCard from "@/components/CollectionCard";

const collections = [
  { title: "Chicago 2024", slug: "chicago-2024", image: "/images/chicago.jpg" },
  { title: "Oregon 2024", slug: "oregon-2024", image: "/images/oregon-3.jpg" },
  { title: "Wildlife", slug: "wildlife", image: "/images/other-2.jpg" },
  { title: "San Diego 2024", slug: "san-diego", image: "/images/san-diego-2.jpg" },
];

export default function CollectionsPage() {
  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {collections.map((c) => (
        <CollectionCard key={c.slug} {...c} />
      ))}
    </main>
  );
}
