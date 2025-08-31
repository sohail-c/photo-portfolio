import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const collectionData: Record<string, string[]> = {
  "chicago-2024": [
    "chicago.jpg",
    "chicago-2.jpg",
    "chicago-3.jpg",
    "chicago-4.jpg",
    "chicago-5.jpg",
    "chicago-7.jpg",
    "chicago-8.jpg",
    "chicago-9.jpg",
  ],
  "oregon-2024": [
    "oregon.jpg",
    "oregon-2.jpg",
    "oregon-3.jpg",
  ],
  "wildlife": [
    "other.jpg",
    "other-2.jpg",
    "other-4.jpg",
    "other-5.jpg",
    "other-7.jpg",
    "other-8.jpg",
    "other-9.jpg",
    "other-10.jpg",
  ],
  "san-diego": [
    "san-diego.jpg",
    "san-diego-2.jpg",
    "san-diego-3.jpg",
    "san-diego-4.jpg",
    "san-diego-5.jpg",
    "san-diego-6.jpg",
    "san-diego-7.jpg",
    "san-diego-8.jpg",
    "san-diego-9.jpg",
    "san-diego-10.jpg",
  ],
  "senior-sendoff": [
    "senior-sendoff.jpg",
    "senior-sendoff-2.jpg",
    "senior-sendoff-3.jpg",
    "senior-sendoff-4.jpg",
    "senior-sendoff-5.jpg",
    "senior-sendoff-6.jpg",
    "senior-sendoff-7.jpg",
    "senior-sendoff-8.jpg",
    "senior-sendoff-9.jpg",
    "senior-sendoff-10.jpg",
    "senior-sendoff-11.jpg",
    "senior-sendoff-12.jpg",
    "senior-sendoff-13.jpg",
    "senior-sendoff-14.jpg",
    "senior-sendoff-15.jpg",
    "senior-sendoff-16.jpg",
  ],
};

export default async function CollectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const photos = collectionData[slug];
  
  if (!photos) return notFound();
  
  return (
    <main className="p-6">
      <Breadcrumbs />
      <Gallery photos={photos} />
    </main>
  );
}