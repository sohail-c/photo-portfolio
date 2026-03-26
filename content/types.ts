export type PhotoFile = {
  filename: string;
  alt?: string;
  caption?: string;
};

export type PhotoCollection = {
  title: string;
  slug: string;
  image: string;
  description?: string;
  date: string;
  location?: string;
  featured?: boolean;
  photos: PhotoFile[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  email: string;
  homeGalleryPhotos: string[];
};
