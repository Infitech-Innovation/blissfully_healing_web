import { useQuery } from "@tanstack/react-query";
import { Blog, Category } from "./definations";
import {
  getBlogDetails,
  getBlogs,
  getCategory,
  getFeaturedBlogs,
} from "./blogs.endpoints";

export const CAT_KEYS = ["categories"];
export const F_BLOGS_KEYS = ["fblogs"];

export const BLOGS_KEYS = {
  all: ["blogs"] as const,
  lists: () => [...BLOGS_KEYS.all, "list"] as const,
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
export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: BLOGS_KEYS.all,
    queryFn: getBlogs,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

//get featured blogs
export const useFeaturedBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: F_BLOGS_KEYS,
    queryFn: getFeaturedBlogs,
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
