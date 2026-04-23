import Image from "next/image";

interface WatchMockupProps {
  src?: string;
  alt?: string;
  placeholder?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "w-32 h-32",
  md: "w-40 h-40",
  lg: "w-48 h-48",
} as const;

export function WatchMockup({
  src,
  alt = "Surfr watch app",
  placeholder,
  className = "",
  size = "md",
}: WatchMockupProps) {
  return (
    <div
      className={`relative ${sizeStyles[size]} rounded-full border-[5px] border-[var(--color-dark)] bg-[var(--color-dark)] shadow-[var(--shadow-lg)] ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="192px"
          />
        ) : (
          placeholder ?? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[var(--color-dark-surface)] to-[var(--color-dark)]">
              <span className="text-sm font-bold text-white">surfr</span>
            </div>
          )
        )}
      </div>

      {/* Crown button */}
      <div
        aria-hidden
        className="absolute right-[-8px] top-1/2 h-4 w-2 -translate-y-1/2 rounded-r bg-[var(--color-dark)]"
      />
    </div>
  );
}
