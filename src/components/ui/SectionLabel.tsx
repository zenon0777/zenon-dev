"use client";

interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-muted px-4 py-1.5 text-xs font-semibold tracking-wider text-gold uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow-pulse" />
      {text}
    </span>
  );
}
