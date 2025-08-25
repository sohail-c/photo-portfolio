'use client';
import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage("");
  };

  return (
    <main className="p-4">
      {/* Masonry Gallery */}
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-6 space-y-4">
        {[
          "chicago.jpg", "chicago-2.jpg", "chicago-3.jpg", "chicago-9.jpg",
          "chicago-5.jpg", "chicago-8.jpg", "chicago-4.jpg", "chicago-7.jpg",
          "oregon-2.jpg", "oregon-3.jpg", "oregon.jpg",
          "other.jpg", "other-2.jpg", "other-3.jpg", "other-4.jpg", "other-5.jpg",
          "other-6.jpg", "other-7.jpg", "other-8.jpg", "other-9.jpg", "other-10.jpg",
          "other-11.jpg",
          "road-trip.jpg", "road-trip-2.jpg",
          "san-diego.jpg", "san-diego-2.jpg", "san-diego-3.jpg", "san-diego-4.jpg",
          "san-diego-5.jpg", "san-diego-6.jpg", "san-diego-7.jpg", "san-diego-8.jpg",
          "san-diego-9.jpg", "san-diego-10.jpg",
        ].map((img, i) => (
          <Image
            key={i}
            src={`/images/${img}`} 
            alt={img}
            width={600}
            height={400}
            className="w-full h-auto rounded-md cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openLightbox(`/images/${img}`)}
          />
        ))}
      </section>

      <Lightbox 
        isOpen={lightboxOpen}
        imageSrc={selectedImage}
        onClose={closeLightbox}
      />
    </main>
  );
}
