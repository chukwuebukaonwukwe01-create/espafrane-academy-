import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/source-sans-3";
import "./globals.css";
import { MotionRoot } from "@/components/Motion";

const title = "EspaFrane Academy | Learn French & Spanish Online";
const description =
  "Online French and Spanish lessons for children and adults in Nigeria. CEFR-aligned A1–B2 programmes, DELF exam preparation, live interactive classes and all learning materials included.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "learn French online Nigeria",
    "learn Spanish online Nigeria",
    "French classes Lagos",
    "DELF preparation Nigeria",
    "Spanish classes for kids",
    "EspaFrane Academy",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_NG",
    siteName: "EspaFrane Academy",
    images: [{ url: "/hero-salon.webp", width: 956, height: 436, alt: "EspaFrane Academy live online language class" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/hero-salon.webp"] },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#030D29",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EspaFrane Academy",
  description,
  email: "espafraneacademy@gmail.com",
  telephone: "+2348135762914",
  address: { "@type": "PostalAddress", addressCountry: "NG" },
  knowsLanguage: ["fr", "es", "en"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionRoot>{children}</MotionRoot>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
