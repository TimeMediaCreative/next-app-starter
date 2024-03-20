import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy","/studio"],
      },
    ],
    sitemap: process.env.SITE_URL + '/sitemap.xml' || `https://update.me/sitemap.xml`,
  };
}