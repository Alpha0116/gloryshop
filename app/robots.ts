import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || "https://glory-shop.pages.dev";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/__debug"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
