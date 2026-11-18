import type { SiteConfig } from "@/content/types";

export const siteConfig: SiteConfig = {
  name: "Sohail Chutani",
  url: "https://www.sohailchutani.com",
  description:
    "Computer Engineering student at UW Bothell. Embedded systems, FPGA, and PCB design projects, plus photography.",
  email: "sohail@chutani.com",
  location: "Seattle, WA",
  tagline: "Computer Engineering student at UW Bothell, graduating June 2027.",
  intro:
    "I work on embedded firmware, digital hardware, and PCB design. This site has write-ups of my main projects, my resume, and some of my photography.",
  lookingFor:
    "I'm looking for full-time roles in embedded systems, FPGA and digital design, or hardware test, starting after I graduate.",
  socialLinks: {
    github: "https://github.com/sohail-c",
    linkedin: "https://www.linkedin.com/in/sohailchutani",
  },
  featuredProjectSlugs: [
    "capacitance-meter",
    "fpga-processor-system",
    "kicad-workshop",
  ],
  featuredPhotoSlugs: ["senior-sendoff", "san-diego", "chicago-2024"],
};
