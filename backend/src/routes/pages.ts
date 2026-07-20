import { Router } from "express";
import { supabase } from "../supabase";
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

pagesRouter.get("/", (req, res) => {
  res.render("index");
});

pagesRouter.get("/about", (req, res) => {
  res.render("about");
});

pagesRouter.get("/contact", (req, res) => {
  res.render("contact");
});

pagesRouter.get("/services", async (req, res) => {
  const [{ data: services, error: svcErr }, { data: tiers, error: tierErr }] = await Promise.all([
    supabase.from("services").select("*").order("sort_order"),
    supabase.from("pricing_tiers").select("*").order("sort_order"),
  ]);
  if (svcErr) console.error("services query error:", svcErr.message);
  if (tierErr) console.error("pricing_tiers query error:", tierErr.message);

  res.render("services", {
    services: (services ?? []).map((s) => ({
      ...s,
      iconPath: ICON_PATHS[s.icon as string] ?? "",
    })),
    tiers: (tiers ?? []).map((t) => ({
      ...t,
      priceLabel: t.price_label,
      priceSuffix: t.price_suffix,
      ctaLabel: t.cta_label,
    })),
  });
});

pagesRouter.get("/portfolio", async (req, res) => {
  const { data: caseStudies, error } = await supabase
    .from("case_studies")
    .select("*")
    .order("sort_order");
  if (error) console.error("case_studies query error:", error.message);

  res.render("portfolio", {
    caseStudies: (caseStudies ?? []).map((c) => ({
      ...c,
      imageSeed: c.image_seed,
      badge: INDUSTRY_BADGE[c.industry as keyof typeof INDUSTRY_BADGE],
      metrics: c.metrics as { value: string; label: string }[],
    })),
  });
});

pagesRouter.get("/blog", async (req, res) => {
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("sort_order");
  if (error) console.error("blog_posts query error:", error.message);

  res.render("blog", {
    posts: (posts ?? []).map((p) => ({
      ...p,
      imageSeed: p.image_seed,
      authorName: p.author_name,
      publishedAt: new Date(p.published_at),
      badge: INDUSTRY_BADGE[p.industry as keyof typeof INDUSTRY_BADGE],
      dateLabel: formatDate(p.published_at),
      readLabel: `${p.read_minutes} min read`,
      authorInitials: initials(p.author_name),
    })),
  });
});
