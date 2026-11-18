"use client";

import { useEffect, useRef } from "react";
import type { GalleryPhoto } from "@/content/images";

type LightboxProps = {
  photos: GalleryPhoto[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({ photos, index, onIndexChange, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];
  const count = photos.length;
  const prev = () => onIndexChange((index - 1 + count) % count);
  const next = () => onIndexChange((index + 1) % count);

  // Keep the latest handlers for the keydown listener without re-binding it.
  const handlers = useRef({ prev, next, onClose });
  handlers.current = { prev, next, onClose };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handlers.current.onClose();
      else if (e.key === "ArrowLeft") handlers.current.prev();
      else if (e.key === "ArrowRight") handlers.current.next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Preload neighbors so arrowing through a collection feels instant.
  useEffect(() => {
    for (const offset of [1, -1]) {
      const neighbor = photos[(index + offset + count) % count];
      if (neighbor) new Image().src = neighbor.full;
    }
  }, [index, photos, count]);

  const buttonClass =
    "rounded-full bg-black/50 text-white hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${count}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <img
        key={photo.full}
        src={photo.full}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className="max-h-[88vh] max-w-[92vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute top-4 left-4 text-sm text-white/80">
        {index + 1} / {count}
      </div>
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={`${buttonClass} absolute top-3 right-3 h-10 w-10 text-2xl leading-none`}
      >
        &times;
      </button>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className={`${buttonClass} absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 text-2xl`}
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className={`${buttonClass} absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 text-2xl`}
          >
            &#8250;
          </button>
        </>
      ) : null}
    </div>
  );
}
