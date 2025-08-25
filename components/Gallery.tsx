// components/Gallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery({ photos }: { photos: string[] }) {
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
    <>
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-6 space-y-4">
        {photos.map((img, i) => (
          <Image
            key={i}
            src={`/images/${img}`}
            alt={img}
            width={600}
            height={400}
            className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openLightbox(`/images/${img}`)}
          />
        ))}
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={selectedImage}
        onClose={closeLightbox}
      />
    </>
  );
}