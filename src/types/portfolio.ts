export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  portfolio: string;
  website: string;
  resume: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  summary: string;
  profileImage: string;
  contact: ContactInfo;
  social: SocialLinks;
  services: string[];
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  categories: string[];
  tags: string[];
  roles: string[];
  results: string[];
  technologies: string[];
  images: string[];
  featuredImage: string;
  projectUrl: string;
  notionUrl: string;
}

export interface ToolCategory {
  id: string;
  category: string;
  tools: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  tools: ToolCategory[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  navigation: NavItem[];
  gains: string[];
}