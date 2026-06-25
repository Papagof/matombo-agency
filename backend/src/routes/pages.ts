import { Router } from "express";
import { prisma } from "../db";
import { ICON_PATHS } from "../icons";
import { INDUSTRY_BADGE } from "../industry";

export const pagesRouter = Router();

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

pagesRouter.get("/services.dc.html", async (req, res) => {
  const [services, tiers] = await Promise.all([
    prisma.service.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.pricingTier.findMany({ orderBy: { sortOrder: "asc" } }),
  ]);

  res.render("services", {
    services: services.map((s) => ({ ...s, iconPath: ICON_PATHS[s.icon] ?? "" })),
    tiers,
  });
});

pagesRouter.get("/portfolio.dc.html", async (req, res) => {
  const caseStudies = await prisma.caseStudy.findMany({ orderBy: { sortOrder: "asc" } });

  res.render("portfolio", {
    caseStudies: caseStudies.map((c) => ({
      ...c,
      badge: INDUSTRY_BADGE[c.industry],
      metrics: c.metrics as { value: string; label: string }[],
    })),
  });
});

pagesRouter.get("/blog.dc.html", async (req, res) => {
  const posts = await prisma.blogPost.findMany({ orderBy: { sortOrder: "asc" } });

  res.render("blog", {
    posts: posts.map((p) => ({
      ...p,
      badge: INDUSTRY_BADGE[p.industry],
      dateLabel: formatDate(p.publishedAt),
      readLabel: `${p.readMinutes} min read`,
      authorInitials: initials(p.authorName),
    })),
  });
});
