import { PrismaClient, Industry } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.blogPost.deleteMany();
  await prisma.caseStudy.deleteMany();
  await prisma.service.deleteMany();
  await prisma.pricingTier.deleteMany();

  await prisma.blogPost.createMany({
    data: [
      {
        title: 'How Lagos hotels win the "Hotels Lagos" and "AirBnB Lagos" search race',
        excerpt:
          "Most guests decide where to stay on the first page of results. Here's how to make sure that's your property — and how to convert the click into a direct, commission-free booking.",
        industry: Industry.HOTELS,
        authorName: "Godfrey Omenai",
        readMinutes: 7,
        imageSeed: "hotelsearch",
        featured: true,
        publishedAt: new Date("2026-05-28"),
        sortOrder: 0,
      },
      {
        title: 'Packing your tables: a playbook for "Restaurant and lounge Lagos"',
        excerpt:
          "From reels that travel to a reservation flow that converts — the system we use to fill weeknights and sell out weekends.",
        industry: Industry.RESTAURANT,
        authorName: "Matilda Omenai",
        readMinutes: 6,
        imageSeed: "loungetable",
        featured: false,
        publishedAt: new Date("2026-05-14"),
        sortOrder: 1,
      },
      {
        title: 'Marketing that sells homes: a guide to "real estate Lagos" demand',
        excerpt:
          "Buyer intent is everything. How to attract qualified enquiries — not tyre-kickers — and close them faster with the right funnel.",
        industry: Industry.REAL_ESTATE,
        authorName: "Matana Omenai",
        readMinutes: 8,
        imageSeed: "lagosproperty",
        featured: false,
        publishedAt: new Date("2026-04-30"),
        sortOrder: 2,
      },
    ],
  });

  await prisma.caseStudy.createMany({
    data: [
      {
        title: "Marina Suites doubled direct bookings in one season",
        summary:
          'By owning "Hotels Lagos" and "AirBnB Lagos" search and rebuilding their booking page, we cut platform commissions and put revenue back in their pocket.',
        industry: Industry.HOTELS,
        tags: ["Hotels & AirBnB", "SEO + Paid"],
        imageSeed: "marinahotel",
        metrics: [
          { value: "+148%", label: "direct bookings" },
          { value: "−32%", label: "commission paid" },
          { value: "4.1×", label: "return on ad spend" },
        ],
        featured: true,
        sortOrder: 0,
      },
      {
        title: "Ìjọba Lounge sells out every weekend",
        summary:
          "A reels-led social engine and reservation funnel turned slow weeknights into a waitlist.",
        industry: Industry.RESTAURANT,
        tags: ["Restaurant & lounge"],
        imageSeed: "lekkilounge",
        metrics: [
          { value: "3.4×", label: "reservations" },
          { value: "+92%", label: "weekend covers" },
        ],
        featured: false,
        sortOrder: 1,
      },
      {
        title: "Ọba Realty filled its pipeline in 90 days",
        summary:
          'Intent-led "real estate Lagos" campaigns delivered qualified enquiries, not tyre-kickers.',
        industry: Industry.REAL_ESTATE,
        tags: ["Real estate"],
        imageSeed: "ikoyihome",
        metrics: [
          { value: "₦2.4B", label: "pipeline" },
          { value: "−41%", label: "cost per lead" },
        ],
        featured: false,
        sortOrder: 2,
      },
      {
        title: "Harbour Stays hit 90% occupancy",
        summary:
          "A short-stay portfolio went from patchy weekends to near-full months with smarter targeting.",
        industry: Industry.HOTELS,
        tags: ["Hotels & AirBnB"],
        imageSeed: "harbourstays",
        metrics: [
          { value: "90%", label: "occupancy" },
          { value: "+58%", label: "revenue / night" },
        ],
        featured: false,
        sortOrder: 3,
      },
      {
        title: "A new kitchen became the talk of VI",
        summary:
          "From zero presence to a fully-booked launch month through local search and creators.",
        industry: Industry.RESTAURANT,
        tags: ["Restaurant & lounge"],
        imageSeed: "lagoskitchen",
        metrics: [
          { value: "100%", label: "launch booked" },
          { value: "18k", label: "new followers" },
        ],
        featured: false,
        sortOrder: 4,
      },
      {
        title: "Lekki Heights sold out off-plan",
        summary:
          "A targeted campaign and a high-converting microsite moved units before completion.",
        industry: Industry.REAL_ESTATE,
        tags: ["Real estate"],
        imageSeed: "lekkiheights",
        metrics: [
          { value: "Sold out", label: "off-plan" },
          { value: "6 mo", label: "ahead of plan" },
        ],
        featured: false,
        sortOrder: 5,
      },
      {
        title: "A rooftop bar became a destination",
        summary:
          "Content and reputation work made one hotel's rooftop the booking everyone wanted.",
        industry: Industry.HOTELS,
        tags: ["Hotels & AirBnB"],
        imageSeed: "boutiquehotel",
        metrics: [
          { value: "4.9★", label: "avg rating" },
          { value: "+120%", label: "bar bookings" },
        ],
        featured: false,
        sortOrder: 6,
      },
    ],
  });

  await prisma.service.createMany({
    data: [
      {
        name: "Local SEO",
        description:
          "Rank for Hotels Lagos, AirBnB Lagos and real estate Lagos — and own Google Maps in your area.",
        icon: "search",
        sortOrder: 0,
      },
      {
        name: "Paid acquisition",
        description:
          "Meta and Google campaigns tuned to bookings and enquiries, not clicks. Every naira tracked to revenue.",
        icon: "crosshair",
        sortOrder: 1,
      },
      {
        name: "Social & content",
        description:
          "Scroll-stopping reels, photography direction and a content calendar that makes your venue the one people talk about.",
        icon: "message-circle",
        sortOrder: 2,
      },
      {
        name: "Landing pages",
        description:
          "Fast, mobile-first booking and enquiry pages designed to convert the traffic we send them.",
        icon: "layout",
        sortOrder: 3,
      },
      {
        name: "Reputation",
        description: "Reviews, ratings and responses that build trust before a guest ever books.",
        icon: "star",
        sortOrder: 4,
      },
      {
        name: "Analytics & reporting",
        description:
          "One clear dashboard. You see bookings, cost per booking and return — updated, not buried.",
        icon: "bar-chart",
        sortOrder: 5,
      },
    ],
  });

  await prisma.pricingTier.createMany({
    data: [
      {
        name: "Launch",
        tagline: "For a single venue getting serious",
        priceLabel: "₦450k",
        priceSuffix: "/ month",
        features: ["Local SEO foundation", "One paid channel", "Monthly reporting"],
        ctaLabel: "Get started",
        highlighted: false,
        sortOrder: 0,
      },
      {
        name: "Grow",
        tagline: "For brands ready to dominate their niche",
        priceLabel: "₦950k",
        priceSuffix: "/ month",
        features: [
          "Everything in Launch",
          "Multi-channel paid ads",
          "Social & content production",
          "Landing pages + weekly tuning",
        ],
        ctaLabel: "Book a free call",
        highlighted: true,
        sortOrder: 1,
      },
      {
        name: "Portfolio",
        tagline: "For groups & multi-property owners",
        priceLabel: "Custom",
        priceSuffix: null,
        features: ["Everything in Grow", "Multi-location strategy", "Dedicated account team"],
        ctaLabel: "Talk to us",
        highlighted: false,
        sortOrder: 2,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
