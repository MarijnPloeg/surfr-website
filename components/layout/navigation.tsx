"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/constants";
import { Wordmark } from "@/components/ui/wordmark";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-200 ${
        scrolled
          ? "border-b border-(--color-divider) bg-(--color-page)/85 backdrop-blur-md backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Wordmark size="md" />

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isCurrent = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  isCurrent
                    ? "text-(--color-cyan-ink)"
                    : "text-(--color-ink-75) hover:text-(--color-ink)"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-(--radius-md) bg-(--color-cyan) px-4 py-2 text-[14px] font-semibold text-black shadow-[var(--shadow-cyan-soft)] transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[var(--shadow-cyan-hard)]"
          >
            Download
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} className="text-(--color-ink)" />
          ) : (
            <Menu size={24} className="text-(--color-ink)" />
          )}
        </button>
      </nav>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="border-t border-(--color-divider) bg-(--color-page) px-6 py-6 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isCurrent = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-(--radius-md) px-3 py-3 text-[16px] font-medium transition-colors ${
                    isCurrent
                      ? "bg-(--color-cyan-15) text-(--color-cyan-ink)"
                      : "text-(--color-ink-75)"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-(--radius-md) bg-(--color-cyan) px-5 py-3 text-center text-[15px] font-semibold text-black shadow-[var(--shadow-cyan-soft)]"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
