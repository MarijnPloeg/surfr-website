import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { SOCIAL_LINKS, HELP_URL } from "@/lib/constants";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, readonly FooterLink[]> = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pro" },
    { label: "Spots", href: "/spots" },
    { label: "Leaderboard", href: "/leaderboard" },
  ],
  company: [
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  community: [
    { label: "Help Center", href: HELP_URL, external: true },
    { label: "Instagram", href: SOCIAL_LINKS.instagram, external: true },
    { label: "YouTube", href: SOCIAL_LINKS.youtube, external: true },
    { label: "Facebook", href: SOCIAL_LINKS.facebook, external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[var(--color-dark)]"
            >
              surfr
            </Link>
            <p className="mt-3 text-sm text-[var(--color-secondary)]">
              The #1 app for kitesurfers. Track sessions, discover spots, and
              compete worldwide.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-dark)]"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-dark)]"
              >
                <Youtube size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-dark)]"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-dark)]">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-dark)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-dark)]">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-dark)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-dark)]">
              Community
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-dark)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-dark)]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} Surfr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
