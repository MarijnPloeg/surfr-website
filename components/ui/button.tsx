import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "subtle";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

/**
 * Primary CTA — cyan fill + BLACK ink + cyan-soft glow.
 * Cyan + black is the brand-distinctive combination, not cyan + white.
 * Hover: lift 1px + glow intensifies.
 *
 * Ghost — transparent with ink-25 border, hover firms the border.
 * Subtle — quiet text link with chevron pattern (no bg).
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-cyan) text-black shadow-[var(--shadow-cyan-soft)] hover:shadow-[var(--shadow-cyan-hard)] hover:-translate-y-px",
  ghost:
    "bg-transparent text-(--color-ink) border border-(--color-ink-25) hover:border-(--color-ink) hover:-translate-y-px",
  subtle:
    "bg-transparent text-(--color-ink-75) hover:text-(--color-ink)",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-7 py-4 text-[15px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center gap-[10px] rounded-(--radius-md) font-semibold whitespace-nowrap transition-[transform,box-shadow,background,border-color] duration-150 ease-out ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
