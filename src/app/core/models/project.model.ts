export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectVideo {
  type: 'youtube' | 'self-hosted';
  url: string;
  poster?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  placeholderIcon?: string;
  placeholderGradient?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;

  // Detail page fields
  longDescription?: string;
  video?: ProjectVideo;
  gallery?: ProjectImage[];
  features?: string[];
  role?: string;
  duration?: string;
}
