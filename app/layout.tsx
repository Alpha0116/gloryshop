import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://glory-shop.pages.dev"),
  title: "Glory Shop | Bijoux & accessoires premium",
  description: "Découvrez les collections femme et homme Glory Shop : colliers, bracelets, bagues, montres, boucles d'oreilles et ensembles. Commandez facilement sur WhatsApp.",
  keywords: ["bijoux Bénin", "bijoux Cotonou", "montres homme", "bijoux femme", "Glory Shop"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Glory Shop — Votre éclat, votre signature",
    description: "Bijoux et accessoires premium pour femme et homme. Livraison au Bénin et à l'international.",
    type: "website",
    locale: "fr_BJ",
    images: [{ url: "/images/brand-banner.png", width: 1664, height: 944, alt: "Glory Shop — Votre éclat. Votre signature." }],
  },
  twitter: { card: "summary_large_image", title: "Glory Shop — Votre éclat, votre signature", description: "Bijoux et accessoires premium avec livraison au Bénin et à l'international.", images: ["/images/brand-banner.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var saved=localStorage.getItem('glory-theme');var theme=saved||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();` }} /></head><body>{children}</body></html>;
}
