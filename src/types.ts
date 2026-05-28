export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'yapay-zeka' | 'otomasyon' | 'video-kurgu' | 'web' | 'diger';
  githubLink?: string;
  demoLink?: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or simple HTML
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'automation' | 'video' | 'design' | 'tools';
}
