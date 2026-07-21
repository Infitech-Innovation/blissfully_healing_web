import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/admin/",
                "/dashboard/",
                "/user/",
                "/api/",
                "/login",
                "/register",
                "/forget-password",
                "/reset-password",
                "/payment/",
                "/*/confirmation",
            ],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
