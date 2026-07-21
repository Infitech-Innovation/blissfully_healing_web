import { useQuery } from "@tanstack/react-query";
import { Blog, BlogResponse, Category, FeaturedBlogResponse } from "../types/blogs.definations";
import {
  getBlogDetails,
  getBlogs,
  getCategory,
  getFeaturedBlogs,
} from "../services/blogs.endpoints";

export const CAT_KEYS = ["categories"];
export const F_BLOGS_KEYS = ["fblogs"];

export const BLOGS_KEYS = {
  all: ["blogs"] as const,
  lists: () => [...BLOGS_KEYS.all, "list"] as const,
  list: (category: string, search: string, tag: string, page: number) =>
    [...BLOGS_KEYS.lists(), category, search, tag, page] as const,
  detail: (slug: string) => [...BLOGS_KEYS.all, "detail", slug] as const,
};

// get categories
export const useCategory = () => {
  return useQuery<Category[]>({
    queryKey: CAT_KEYS,
    queryFn: getCategory,
    staleTime: 60 * 60 * 1000,
    retry: 2,
  });
};

//get blogs
export const useBlogs = (
  category = "",
  search = "",
  tag = "",
  page = 1
) => {
  return useQuery<BlogResponse>({
    queryKey: BLOGS_KEYS.list(category, search, tag, page),
    queryFn: () => getBlogs(category, search, tag, page),
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

//get featured blogs
export const useFeaturedBlogs = (page = 1) => {
  return useQuery<FeaturedBlogResponse>({
    queryKey: [...F_BLOGS_KEYS, page],
    queryFn: () => getFeaturedBlogs(page),
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

//get blog by slug
export const useBlogDetails = (slug: string) => {
  return useQuery<Blog>({
    queryKey: BLOGS_KEYS.detail(slug),
    queryFn: () => getBlogDetails(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 10,
  });
};
