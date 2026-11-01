export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const categories: Category[] = [
  {
    slug: "digital-banking",
    name: "Digital Banking",
    description:
      "Online accounts, challenger banks, and banking that lives on your phone.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Person using a banking app on a smartphone",
  },
  {
    slug: "payment-platforms",
    name: "Payment Platforms",
    description:
      "Wallets, checkout rails, and the infra behind every tap to pay.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Contactless card payment at a checkout",
  },
  {
    slug: "trading-crypto",
    name: "Trading and Crypto",
    description:
      "Brokerage apps, crypto exchanges, and investing without the branch visit.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Trading charts on a computer screen",
  },
  {
    slug: "insurtech",
    name: "InsurTech",
    description:
      "Insurance rebuilt as apps — clearer policies and faster claims.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Documents and laptop for insurance work",
  },
  {
    slug: "personal-finance",
    name: "Personal Finance Tools",
    description:
      "Budgeting, savings automation, and dashboards for everyday money.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Coins and plant symbolizing growing savings",
  },
  {
    slug: "lending-tech",
    name: "Lending Tech",
    description:
      "Algorithmic credit, P2P lending, and loans without the awkward meeting.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Business handshake over a deal table",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const siteHeroImage =
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80";
