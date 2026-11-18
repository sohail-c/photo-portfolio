"use client";

import { useRef, useState } from "react";
import Lightbox from "./Lightbox";
import type { GalleryPhoto } from "@/content/images";

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = () => {
    // Return focus to the thumbnail that was open, for keyboard users.
    if (openIndex !== null) buttonRefs.current[openIndex]?.focus();
    setOpenIndex(null);
  };

  return (
    <>
      <ul className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {photos.map((photo, i) => (
          <li key={photo.full} className="mb-4 break-inside-avoid">
            <button
              ref={(el) => {
                buttonRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              aria-label={`Open photo: ${photo.alt}`}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading={i < 8 ? "eager" : "lazy"}
                decoding="async"
                className="h-auto w-full transition-opacity hover:opacity-80"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null ? (
        <Lightbox
          photos={photos}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={close}
        />
      ) : null}
    </>
  );
}
