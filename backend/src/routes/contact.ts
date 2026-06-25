import { Router } from "express";
import { ContactBusinessType } from "@prisma/client";
import { prisma } from "../db";

export const contactRouter = Router();

const BUSINESS_VALUES: Record<string, ContactBusinessType> = {
  hotel: ContactBusinessType.HOTEL,
  restaurant: ContactBusinessType.RESTAURANT,
  realestate: ContactBusinessType.REAL_ESTATE,
  other: ContactBusinessType.OTHER,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

contactRouter.post("/api/contact", async (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone) || null;
  const business = BUSINESS_VALUES[asString(body.business)];
  const budget = asString(body.budget) || null;
  const message = asString(body.message);
  const consent = body.consent === true;

  if (!name || !email || !business || !message || !consent) {
    res.status(400).json({ ok: false, error: "Please fill in all required fields." });
    return;
  }
  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: "Please enter a valid email address." });
    return;
  }

  await prisma.contactSubmission.create({
    data: { name, email, phone, business, budget, message, consent },
  });

  res.status(201).json({ ok: true });
});
