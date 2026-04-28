import Link from "next/link";

interface WordmarkProps {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  className?: string;
}

const sizes = {
  sm: "text-[20px]",
  md: "text-[26px]",
  lg: "text-[40px]",
} as const;

export function Wordmark({ size = "md", asLink = true, className = "" }: WordmarkProps) {
  const content = (
    <span
      className={`font-[family-name:var(--font-roboto)] font-black tracking-[-0.04em] leading-none text-(--color-ink) ${sizes[size]} ${className}`}
    >
      surfr
      <span
        className="text-(--color-cyan)"
        style={{
          textShadow: "0 0 14px rgba(1,188,215,0.55)",
        }}
      >
        .
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label="Surfr home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
