import type { MetadataRoute } from "next";
import { getBlogs } from "@/services/blogs.endpoints";
import { getCourses } from "@/services/courses.endpoints";
import { getEbooks } from "@/services/ebooks.endpoints";
import { getGroups } from "@/services/groups.endpoints";
import { getRetreats } from "@/services/retreats.endpoints";
import { Blog } from "@/types/blogs.definations";
import { Course } from "@/types/course.definations";
import { EBookList } from "@/types/ebooks.definations";
import { PaginatedResponse } from "@/types/generic";
import { SupportGrouplist } from "@/types/groups.definations";
import { RetreatList } from "@/types/retreats.definations";
import { siteUrl } from "./seo";


const publicRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/homepage", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/retreats", priority: 0.9, changeFrequency: "weekly" },
  { path: "/shop", priority: 0.8, changeFrequency: "weekly" },
  { path: "/support-groups", priority: 0.8, changeFrequency: "weekly" },
  { path: "/videos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/temples/belonging", priority: 0.6, changeFrequency: "monthly" },
  { path: "/temples/purification", priority: 0.6, changeFrequency: "monthly" },
  { path: "/temples/remembrance", priority: 0.6, changeFrequency: "monthly" },
  { path: "/temples/return", priority: 0.6, changeFrequency: "monthly" },
  { path: "/temples/stillness", priority: 0.6, changeFrequency: "monthly" },
  { path: "/temples/voyage", priority: 0.7, changeFrequency: "monthly" },
] satisfies SitemapRoute[];

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

async function getAllPages<T>(
  getPage: (page: number) => Promise<PaginatedResponse<T>>,
) {
  const firstPage = await getPage(1);
  const pageSize = Math.max(firstPage.results.length, 1);
  const totalPages = Math.ceil(firstPage.count / pageSize);

  const remainingPages = await Promise.all(
    Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) =>
      getPage(index + 2),
    ),
  );

  return [firstPage, ...remainingPages].flatMap((page) => page.results);
}

async function safeRoutes<T>(
  getItems: () => Promise<T[]>,
  toRoute: (item: T) => SitemapRoute,
) {
  try {
    const items = await getItems();
    return items.map(toRoute);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const [blogRoutes, courseRoutes, ebookRoutes, groupRoutes, retreatRoutes] =
    await Promise.all([
      safeRoutes<Blog>(
        () => getAllPages((page) => getBlogs("", "", "", page)),
        (blog) => ({
          path: `/blogs/${blog.slug}`,
          priority: 0.7,
          changeFrequency: "monthly",
        }),
      ),
      safeRoutes<Course>(
        () => getAllPages(getCourses),
        (course) => ({
          path: `/courses/${course.slug}`,
          priority: 0.8,
          changeFrequency: "monthly",
        }),
      ),
      safeRoutes<EBookList>(
        () => getAllPages(getEbooks),
        (ebook) => ({
          path: `/shop/${ebook.slug}`,
          priority: 0.7,
          changeFrequency: "monthly",
        }),
      ),
      safeRoutes<SupportGrouplist>(
        () => getAllPages(getGroups),
        (group) => ({
          path: `/support-groups/${group.slug}`,
          priority: 0.7,
          changeFrequency: "monthly",
        }),
      ),
      safeRoutes<RetreatList>(
        () => getAllPages(getRetreats),
        (retreat) => ({
          path: `/retreats/${retreat.slug}`,
          priority: 0.8,
          changeFrequency: "monthly",
        }),
      ),
    ]);

  return [
    ...publicRoutes,
    ...blogRoutes,
    ...courseRoutes,
    ...ebookRoutes,
    ...groupRoutes,
    ...retreatRoutes,
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
