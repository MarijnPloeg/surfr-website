import Image from "next/image";

interface PhoneMockupProps {
  src?: string;
  alt?: string;
  placeholder?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "w-44",
  md: "w-56",
  lg: "w-64",
} as const;

export function PhoneMockup({
  src,
  alt = "Surfr app screenshot",
  placeholder,
  className = "",
  size = "md",
}: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] ${sizeStyles[size]} rounded-[2.5rem] border-[6px] border-[var(--color-dark)] bg-[var(--color-dark)] shadow-[var(--shadow-lg)] ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 256px"
          />
        ) : (
          placeholder ?? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[var(--color-primary)] to-[#0d8fa8]">
              <span className="text-2xl font-bold text-white">surfr</span>
            </div>
          )
        )}
      </div>

      {/* Notch */}
      <div
        aria-hidden
        className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-[var(--color-dark)]"
      />
    </div>
  );
}
