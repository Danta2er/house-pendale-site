export const siteConfig = {
  name: "House Pendale",
  tagline: "The reader is already inside.",
  description:
    "Enter House Pendale, where desire, ritual, and cosmology collide. Start with When Stars Align or step deeper into the world.",
  author: "Liora Pendale",
  canonicalUrl: "https://liorapendale.com",
  amazonUrl: "https://www.amazon.com/dp/B0F6KXSR54",
  substackUrl: "https://liorapendale.substack.com",
  socialLinks: [
    { label: "Threads", href: "https://threads.net/@liorapendale" },
    { label: "Instagram", href: "https://www.instagram.com/liorapendale/" },
    { label: "TikTok", href: "https://www.tiktok.com/@liorapendale" },
    { label: "X", href: "https://x.com/LioraPendale" },
    { label: "Bluesky", href: "https://bsky.app/profile/liorapendale.bsky.social" },
    { label: "Substack", href: "https://liorapendale.substack.com" },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books/" },
    { label: "When Stars Align", href: "/books/when-stars-align/" },
    { label: "Characters", href: "/characters/" },
    { label: "Magic Systems", href: "/magic-systems/" },
    { label: "Read the Notes", href: "https://liorapendale.substack.com", external: true },
  ],
} as const;

export const futureDoorMessages = [
  "The House doesn't reveal every room at once.",
  "The House keeps some doors closed until you're ready to want them properly.",
  "The House reveals herself in stages. She likes to see what you do with wanting.",
  "Some rooms answer quickly. Some make you wait a little and mean it.",
  "The House lets you in by degrees.",
  "The House opens where it wants to open, and she's usually right.",
  "The whole interior never arrives at once. The House prefers to make you ache for the next door.",
  "The House gives you one true door at a time.",
  "Every room has its hour. The House knows which one you're standing in.",
  "The House keeps some thresholds for later. Not out of cruelty. Out of taste.",
] as const;
