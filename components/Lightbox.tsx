// components/Lightbox.tsx
"use client";

import Image from "next/image";

type LightboxProps = {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
};

export default function Lightbox({ isOpen, imageSrc, onClose }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-6 -right-6 bg-black/50 text-white text-2xl font-bold hover:bg-black/70 w-8 h-8 rounded-full flex items-center justify-center z-10"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt="Lightbox Image"
          width={800}
          height={600}
          className="max-w-full max-h-[92vh] object-contain"
        />
      </div>
    </div>
  );
}