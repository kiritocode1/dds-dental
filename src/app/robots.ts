import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://dentsspa.in/sitemap.xml",
    host: "https://dentsspa.in",
  };
}
