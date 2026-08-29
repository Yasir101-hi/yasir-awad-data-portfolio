export interface Project {
  id: string;
  title: string;
  description: string; // Short description for card
  
  // Structured Detail Sections
  overview: string;
  objective: string;
  technologies: string[];
  outcomes: string[];

  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string; // New field for Research Papers/PDFs
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'drill' | 'chart';
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  details?: string;
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
    credentialUrl: string;
}