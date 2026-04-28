import type { Metadata } from "next";
import { Outfit, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { SITE_META } from "@/lib/constants";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Roboto is the LOGO font only — used for the surfr. wordmark.
// Loaded with weight 900 so the wordmark gets the proper brand weight.
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["900"],
  display: "swap",
});

// Roboto Condensed for eyebrows and data-dense contexts (forecast pills,
// chart axes, wind chips). Opt-in via the .font-condensed utility.
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesurfr.app"),
  title: {
    default: "Surfr · Every session is worth measuring",
    template: "%s | Surfr",
  },
  description:
    "Every session is worth measuring, and worth sharing with the people who get it. Track every jump, discover spots, and see where you stand.",
  keywords: [
    "kitesurfing",
    "kitesurfing app",
    "kite jump tracker",
    "jump height tracker",
    "kiteboarding",
    "watersports",
    "session tracking",
    "wind forecast",
    "kite spots",
  ],
  openGraph: {
    title: "Surfr · Every session is worth measuring",
    description:
      "Track every jump, discover spots, and see where you stand. Free to download.",
    url: "https://thesurfr.app",
    siteName: "Surfr",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfr · Every session is worth measuring",
    description:
      "Track every jump, discover spots, and see where you stand.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "apple-itunes-app": "app-id=1438498519",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${roboto.variable} ${robotoCondensed.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Surfr",
              applicationCategory: "SportsApplication",
              operatingSystem: "iOS, Android, watchOS, Wear OS, Garmin",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: SITE_META.appStoreRating,
                ratingCount: SITE_META.appStoreRatingCount,
                bestRating: "5",
              },
              description: SITE_META.metaDescription,
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
