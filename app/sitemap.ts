import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolioiq.com";

  const staticRoutes = [
    "",
    "/tools",
    "/calculators",
    "/generators",
    "/word-tools",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...toolPages];
}