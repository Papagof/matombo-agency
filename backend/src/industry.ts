import { Industry } from "@prisma/client";

export const INDUSTRY_BADGE: Record<Industry, { label: string; bg: string; color: string }> = {
  HOTELS: { label: "Hotels & AirBnB", bg: "rgba(194,65,12,0.12)", color: "var(--primary)" },
  RESTAURANT: { label: "Restaurant & lounge", bg: "rgba(245,158,11,0.16)", color: "var(--orange-600)" },
  REAL_ESTATE: { label: "Real estate", bg: "rgba(22,163,74,0.12)", color: "var(--green-600)" },
};
