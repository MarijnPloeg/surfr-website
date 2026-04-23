import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
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
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-[var(--shadow-sm)]",
  secondary:
    "bg-white text-[var(--color-dark)] border border-[var(--color-border)] hover:bg-[var(--color-light-bg)]",
  ghost:
    "text-[var(--color-secondary)] hover:text-[var(--color-dark)] hover:bg-[var(--color-light-bg)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-full",
  lg: "px-8 py-3.5 text-base rounded-full",
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
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center font-semibold transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
