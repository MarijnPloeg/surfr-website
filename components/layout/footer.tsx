import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { SOCIAL_LINKS, HELP_URL, WIND_GAMES_URL } from "@/lib/constants";
import { Wordmark } from "@/components/ui/wordmark";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, readonly FooterLink[]> = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Spots", href: "/spots" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Pricing", href: "/pro" },
  ],
  company: [
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  community: [
    { label: "Help Center", href: HELP_URL, external: true },
    { label: "Wind Games", href: WIND_GAMES_URL, external: true },
    { label: "Instagram", href: SOCIAL_LINKS.instagram, external: true },
    { label: "YouTube", href: SOCIAL_LINKS.youtube, external: true },
    { label: "Facebook", href: SOCIAL_LINKS.facebook, external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-(--color-divider) bg-(--color-page)">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Wordmark size="lg" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-(--color-ink-60)">
              Every session is worth measuring, and worth sharing with the
              people who get it.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-(--color-ink-50) transition-colors hover:text-(--color-cyan-ink)"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-(--color-ink-50) transition-colors hover:text-(--color-cyan-ink)"
              >
                <Youtube size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-(--color-ink-50) transition-colors hover:text-(--color-cyan-ink)"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {(["product", "company", "community"] as const).map((col) => (
            <div key={col}>
              <h4 className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-ink-60)">
                {col === "product"
                  ? "Product"
                  : col === "company"
                    ? "Company"
                    : "Community"}
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks[col].map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-(--color-ink-75) transition-colors hover:text-(--color-ink)"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-(--color-ink-75) transition-colors hover:text-(--color-ink)"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-(--color-divider) pt-8 text-center text-[12px] text-(--color-ink-50)">
          &copy; {new Date().getFullYear()} Surfr B.V. · Built on the North Sea.
        </div>
      </div>
    </footer>
  );
}
