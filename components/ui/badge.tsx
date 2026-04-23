interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-[var(--color-accent-tint)] px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)] ${className}`}
    >
      {children}
    </span>
  );
}
