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

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  year: string;
  status: "Active" | "Completed" | "In Progress";
  stack: string[];
  highlights: string[];
  featured?: boolean;
  links?: {
    live?: string;
    github?: string;
  };
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  tagline: string;
  intro: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  featuredProjectSlugs: string[];
  featuredPhotoSlugs: string[];
  homeGalleryPhotos: string[];
};
