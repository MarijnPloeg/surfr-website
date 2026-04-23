"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[var(--shadow-sm)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[var(--color-dark)]" : "text-white"
            }`}
          >
            surfr
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            "external" in link ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-[var(--color-secondary)] hover:text-[var(--color-dark)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-[var(--color-secondary)] hover:text-[var(--color-dark)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Download
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} className={scrolled ? "text-[var(--color-dark)]" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-[var(--color-dark)]" : "text-white"} />
          )}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) =>
              "external" in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[var(--color-secondary)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[var(--color-secondary)]"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
