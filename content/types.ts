export type Photo = {
  /** File name in public/images/full (thumbnail has the same name in public/images/thumbs). */
  filename: string;
  alt: string;
};

export type PhotoCollection = {
  slug: string;
  title: string;
  description: string;
  /** Year as a string ("2024"); leave out if unknown rather than guessing. */
  year?: string;
  location?: string;
  /** File name of the photo used as the collection cover. */
  cover: string;
  photos: Photo[];
};

export type Figure = {
  /** Path under /public, e.g. "/images/projects/foo/bar.jpg". */
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  figures?: Figure[];
  /** "pair" shows figures side by side on wider screens (e.g. before/after). */
  layout?: "stack" | "pair";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Human-readable dates, e.g. "April – June 2026". */
  period: string;
  /** Course, independent study, organization, etc. */
  context?: string;
  summary: string;
  tags: string[];
  cover?: Figure;
  links?: ProjectLink[];
  /** Projects with sections get their own page; the rest show as a card only. */
  sections?: ProjectSection[];
};

export type SiteConfig = {
  name: string;
  url: string;
  description: string;
  email: string;
  location: string;
  tagline: string;
  intro: string;
  lookingFor: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  featuredProjectSlugs: string[];
  featuredPhotoSlugs: string[];
};

export type ResumeItem = {
  title: string;
  org?: string;
  dates: string;
  href?: string;
  bullets: string[];
};

export type Resume = {
  education: {
    degree: string;
    school: string;
    dates: string;
    notes: string[];
    coursework: string[];
  };
  skills: { label: string; items: string }[];
  projects: ResumeItem[];
  work: ResumeItem[];
  leadership: ResumeItem[];
};
