import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://glory-shop.pages.dev"),
  title: "BHZ EMPIRE | Bijoux & accessoires premium",
  description: "Découvrez les collections femme et homme BHZ EMPIRE : colliers, bracelets, bagues, montres, boucles d'oreilles et ensembles. Commandez facilement sur WhatsApp.",
  keywords: ["bijoux Bénin", "bijoux Cotonou", "montres homme", "bijoux femme", "BHZ EMPIRE"],
  icons: { icon: "/images/bhz-logo.png", shortcut: "/images/bhz-logo.png", apple: "/images/bhz-logo.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "BHZ EMPIRE — Votre éclat, votre signature",
    description: "Bijoux et accessoires premium pour femme et homme. Livraison au Bénin et à l'international.",
    type: "website",
    locale: "fr_BJ",
    images: [{ url: "/images/brand-banner.png?v=2", width: 1664, height: 944, alt: "BHZ EMPIRE — Votre éclat. Votre signature." }],
  },
  twitter: { card: "summary_large_image", title: "BHZ EMPIRE — Votre éclat, votre signature", description: "Bijoux et accessoires premium avec livraison au Bénin et à l'international.", images: ["/images/brand-banner.png?v=2"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "BHZ EMPIRE",
  alternateName: "BHZ Empire Bijouterie",
  url: "https://glory-shop.pages.dev",
  logo: "https://glory-shop.pages.dev/images/bhz-logo.png",
  image: "https://glory-shop.pages.dev/images/brand-banner.png?v=2",
  description: "Bijoux et accessoires premium pour femme et homme : colliers, bracelets, bagues, montres, boucles d'oreilles et ensembles. Livraison à Cotonou, au Bénin et à l'international.",
  telephone: "+2290169296243",
  priceRange: "9500 XOF - 38500 XOF",
  currenciesAccepted: "XOF",
  paymentAccepted: "Cash, Mobile Money",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressRegion: "Littoral",
    addressCountry: "BJ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.3654",
    longitude: "2.4183",
  },
  sameAs: [
    "https://www.tiktok.com/@bhzempire?_r=1&_t=ZS-9AionjBdS6P",
    "https://www.instagram.com/bhz_empire?obrf=MWY0YXN6YWx4OHhhZA==",
    "https://www.facebook.com/share/1A6D586Hub/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "210",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('bhz-theme')||localStorage.getItem('glory-theme');var theme=saved||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
