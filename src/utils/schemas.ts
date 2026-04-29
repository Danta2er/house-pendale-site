export const websiteSchema = ({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) => ({
  "@type": "WebSite",
  name,
  url,
  description,
});

export const personSchema = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => ({
  "@type": "Person",
  name,
  url,
});

export const collectionPageSchema = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@type": "CollectionPage",
  name,
  description,
  url,
});

export const bookSchema = ({
  title,
  image,
  description,
  url,
  buyUrl,
}: {
  title: string;
  image: string;
  description: string;
  url: string;
  buyUrl: string;
}) => ({
  "@type": "Book",
  name: title,
  image,
  description,
  url,
  author: {
    "@type": "Person",
    name: "Liora Pendale",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: buyUrl,
    priceCurrency: "USD",
  },
});
