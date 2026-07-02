import { Router } from "express";
import { supabase } from "../supabase";

export const contactRouter = Router();

const VALID_BUSINESS = ["hotel", "restaurant", "realestate", "other"] as const;
type BusinessType = (typeof VALID_BUSINESS)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

contactRouter.post("/api/contact", async (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone) || null;
  const business = asString(body.business) as BusinessType;
  const budget = asString(body.budget) || null;
  const message = asString(body.message);
  const consent = body.consent === true;

  if (!name || !email || !VALID_BUSINESS.includes(business) || !message || !consent) {
    res.status(400).json({ ok: false, error: "Please fill in all required fields." });
    return;
  }
  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: "Please enter a valid email address." });
    return;
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone,
    business,
    budget,
    message,
    consent,
  });

  if (error) {
    console.error("Supabase insert error:", error.message);
    res.status(500).json({ ok: false, error: "Something went wrong. Please try again." });
    return;
  }

  res.status(201).json({ ok: true });
});
