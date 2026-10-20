import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://glory-shop.pages.dev"),
  title: "BHZ EMPIRE | Bijoux & accessoires premium",
  description: "Découvrez les collections femme et homme BHZ EMPIRE : colliers, bracelets, bagues, montres, boucles d'oreilles et ensembles. Commandez facilement sur WhatsApp.",
  keywords: ["bijoux Bénin", "bijoux Cotonou", "montres homme", "bijoux femme", "BHZ EMPIRE"],
  icons: { icon: "/images/bhz-logo.png", shortcut: "/images/bhz-logo.png", apple: "/images/bhz-logo.png" },
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var saved=localStorage.getItem('bhz-theme')||localStorage.getItem('glory-theme');var theme=saved||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();` }} /></head><body>{children}</body></html>;
}
