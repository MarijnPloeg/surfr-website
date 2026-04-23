import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesurfr.app"),
  title: {
    default: "Surfr — The #1 Kitesurfing App",
    template: "%s | Surfr",
  },
  description:
    "Track every jump, discover 5000+ spots, compete on global leaderboards, and connect with 100K+ riders worldwide. The #1 app for kitesurfers.",
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
    "kitesurfing leaderboard",
  ],
  openGraph: {
    title: "Surfr — The #1 Kitesurfing App",
    description:
      "Track every jump, discover spots, and compete with riders worldwide. 100K+ active riders. Free to download.",
    url: "https://thesurfr.app",
    siteName: "Surfr",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfr — The #1 Kitesurfing App",
    description:
      "Track every jump, discover spots, and compete with riders worldwide.",
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
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Surfr",
              applicationCategory: "SportsApplication",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "25000",
                bestRating: "5",
              },
              description:
                "The #1 kitesurfing app. Track jumps, discover spots, and compete worldwide.",
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-outfit)] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
