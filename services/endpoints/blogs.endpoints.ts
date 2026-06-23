import { api } from "@/lib/axios";
import { Blog, Category } from "../../types/blogs.definations";

const CAT_URL = "/blog/categories/";
const BLOGS_URL = "/blog/";
const FEATURED_BLOGS_URL = "/blog/featured/";
const BLOG_BY_SLUG_URL = (slug: string) => `/blog/${slug}/`;

// get categories
export const getCategory = async (): Promise<Category[]> => {
  const response = await api.get(CAT_URL);
  return response.data;
};

//get blogs
export const getBlogs = async (): Promise<Blog[]> => {
  const response = await api.get(BLOGS_URL);
  return response.data;
};

//get featured blogs
export const getFeaturedBlogs = async (): Promise<Blog[]> => {
  const response = await api.get(FEATURED_BLOGS_URL);
  return response.data;
};

//get blog by slug
export const getBlogDetails = async (slug: string): Promise<Blog> => {
  const response = await api.get(BLOG_BY_SLUG_URL(slug));
  return response.data;
};
