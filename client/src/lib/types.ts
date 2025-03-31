// Project Types
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  detailsLink: string;
  githubLink: string;
  liveLink: string | null;
}

// Blog Post Types
export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

// Experience Types
export interface ExperienceType {
  id: number;
  title: string;
  period: string;
  description: string;
  link?: string;
  linkText?: string;
}

// Education Types
export interface EducationType {
  id: number;
  degree: string;
  institution: string;
  description: string;
}

// Award Types
export interface AwardType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Skill Types
export interface SkillType {
  name: string;
  level: number;
}

// Contact Form Types
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Message Types
export interface MessageType {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
