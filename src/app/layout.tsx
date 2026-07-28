import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Food Safety Testing & Quality Assurance, Victoria`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "food safety testing Victoria",
    "HACCP consultant Melbourne",
    "microbiological testing",
    "shelf life testing",
    "quality assurance food",
    "FSANZ compliance",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    title: `${site.name} — Food Safety Testing & Quality Assurance`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Food Safety Testing & Quality Assurance`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10382b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalEntity,
  description: site.description,
  url: site.url,
  telephone: "+61487907952",
  email: site.email,
  identifier: { "@type": "PropertyValue", name: "ABN", value: site.abnPlain },
  areaServed: { "@type": "State", name: "Victoria, Australia" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  founder: { "@type": "Person", name: site.ceo, jobTitle: site.ceoTitle },
  openingHours: "Mo-Fr 08:00-17:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${archivo.variable} ${instrument.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll reveals are JS-driven; without JS the content must not
            stay invisible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:bg-petrol focus:px-4 focus:py-3 focus:text-mist"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
