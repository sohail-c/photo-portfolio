import Gallery from "@/components/Gallery";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <main className="p-4">
      <Gallery photos={siteConfig.homeGalleryPhotos} />
    </main>
  );
}
