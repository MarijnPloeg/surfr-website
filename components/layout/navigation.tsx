"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/constants";
import { Wordmark } from "@/components/ui/wordmark";

type NavItem = (typeof NAV_LINKS)[number];

function hasChildren(
  item: NavItem,
): item is Extract<NavItem, { children: readonly unknown[] }> {
  return "children" in item;
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile + dropdowns on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click or Escape.
  useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openDropdown]);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-200 ${
        scrolled
          ? "border-b border-(--color-divider) bg-(--color-page)/85 backdrop-blur-md backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Wordmark size="md" />

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            if (hasChildren(link)) {
              const childActive = link.children.some((c) => isActive(c.href));
              const open = openDropdown === link.label;
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(open ? null : link.label)
                    }
                    className={`flex items-center gap-1 text-[14px] font-medium transition-colors ${
                      childActive || open
                        ? "text-(--color-cyan-ink)"
                        : "text-(--color-ink-75) hover:text-(--color-ink)"
                    }`}
                    aria-expanded={open}
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-150 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div
                      role="menu"
                      className="absolute left-1/2 top-full mt-3 min-w-[180px] -translate-x-1/2 rounded-(--radius-md) border border-(--color-divider) bg-(--color-page) p-1.5 shadow-[0_12px_32px_-8px_rgba(10,25,41,0.18)]"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`block rounded-(--radius-sm) px-3 py-2.5 text-[14px] font-medium transition-colors ${
                            isActive(child.href)
                              ? "bg-(--color-cyan-15) text-(--color-cyan-ink)"
                              : "text-(--color-ink-75) hover:bg-(--color-ink-15) hover:text-(--color-ink)"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${
                  isActive(link.href)
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
              if (hasChildren(link)) {
                return (
                  <div key={link.label} className="mt-2 first:mt-0">
                    <div className="px-3 py-2 font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-50)">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded-(--radius-md) px-3 py-3 text-[16px] font-medium transition-colors ${
                          isActive(child.href)
                            ? "bg-(--color-cyan-15) text-(--color-cyan-ink)"
                            : "text-(--color-ink-75)"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-(--radius-md) px-3 py-3 text-[16px] font-medium transition-colors ${
                    isActive(link.href)
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
