// definitions.ts

export interface Author {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  body: string;
  excerpt: string;
  cover_image: string;
  cover_image_alt: string;
  author: Author;
  category: Category;
  tags: Tag[];
  is_featured: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  seo_title: string;
  seo_description: string;
  view_count: number;
  reading_time: number;
}

export interface BlogCardItem {
  href: string;
  image: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
}
