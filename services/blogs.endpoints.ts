import { api } from "@/lib/axios";
import { Blog, BlogResponse, Category, FeaturedBlogResponse } from "../types/blogs.definations";

const CAT_URL = "/blog/categories/";
const BLOGS_URL = "/blog/";
const FEATURED_BLOGS_URL = "/blog/featured/";
const BLOG_BY_SLUG_URL = (slug: string) => `/blog/${slug}/`;

// get categories
export const getCategory = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>(CAT_URL);
  return response.data;
};

//get blogs
export const getBlogs = async (
  category: string,
  search: string,
  tag: string,
  page: number
): Promise<BlogResponse> => {
  const response = await api.get<BlogResponse>(BLOGS_URL, {
    params: {
      category,
      search,
      tag,
      page,
    },
  });

  return response.data;
};

//get featured blogs
export const getFeaturedBlogs = async (page: number): Promise<FeaturedBlogResponse> => {
  const response = await api.get<FeaturedBlogResponse>(FEATURED_BLOGS_URL, {
    params: { page }
  });
  return response.data;
};

//get blog by slug
export const getBlogDetails = async (slug: string): Promise<Blog> => {
  const response = await api.get<Blog>(BLOG_BY_SLUG_URL(slug));
  return response.data;
};
