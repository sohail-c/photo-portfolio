import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
import { photoCollections, photoCollectionsBySlug } from "@/content/photos";

export function generateStaticParams() {
  return photoCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const collection = photoCollectionsBySlug[slug];
  
  if (!collection) return notFound();
  
  return (
    <main className="p-6">
      <Breadcrumbs />
      <Gallery photos={collection.photos.map((photo) => photo.filename)} />
    </main>
  );
}
