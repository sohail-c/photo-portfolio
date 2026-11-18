// Legacy URL: the photo section used to live at /collections. These pages
// render the same content and declare /photos/... as canonical.
export { generateStaticParams, generateMetadata, default } from "@/app/photos/[slug]/page";

export const dynamicParams = false;
