import type { Figure } from "@/content/types";
import { imageSize } from "@/content/images";

/** Image with caption. Clicking opens the full-size file so diagrams can be zoomed. */
export default function ProjectFigure({ figure, eager = false }: { figure: Figure; eager?: boolean }) {
  return (
    <figure>
      <a href={figure.src} target="_blank" rel="noopener" className="block">
        <img
          src={figure.src}
          alt={figure.alt}
          {...imageSize(figure.src)}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-auto w-full rounded-lg border border-gray-200 bg-white"
        />
      </a>
      {figure.caption ? (
        <figcaption className="mt-2 text-sm text-gray-500">{figure.caption}</figcaption>
      ) : null}
    </figure>
  );
}
