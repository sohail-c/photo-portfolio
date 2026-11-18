import sizes from "@/content/image-sizes.json";
import type { Photo } from "@/content/types";

const sizeMap: Record<string, number[]> = sizes;

/** Width/height for an image under /public, from content/image-sizes.json (run `pnpm images`). */
export function imageSize(src: string): { width?: number; height?: number } {
  const size = sizeMap[src];
  return size ? { width: size[0], height: size[1] } : {};
}

export type GalleryPhoto = {
  thumb: string;
  full: string;
  alt: string;
  width?: number;
  height?: number;
};

export const thumbUrl = (filename: string) => `/images/thumbs/${filename}`;
export const fullUrl = (filename: string) => `/images/full/${filename}`;

export function toGalleryPhoto(photo: Photo): GalleryPhoto {
  const full = fullUrl(photo.filename);
  return { thumb: thumbUrl(photo.filename), full, alt: photo.alt, ...imageSize(full) };
}
