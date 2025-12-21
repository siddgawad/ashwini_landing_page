
export interface Service {
  icon: string; // Icon name from lucide-react
  title: string;
  description: string;
  features: string[];
  color: string;
  caseStudy: string;
}

export interface Testimonial {
  name: string;
  age: string;
  condition: string;
  result: string;
  text: string;
  rating: number;
  image: string;
}

export interface Stat {
  number: string;
  label: string;
  description: string;
}

export interface Credential {
  icon: string; // Icon name from lucide-react
  title: string;
  org: string;
  detail: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  keywords: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
