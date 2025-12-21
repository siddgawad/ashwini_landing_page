export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  metaDescription: string;
  metaKeywords: string;
  readTime: string;
  published: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface AdminUser {
  email: string;
  name: string;
}