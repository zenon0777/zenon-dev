"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gold text-bg-primary hover:bg-gold-light hover:shadow-[0_0_30px_rgba(200,167,78,0.3)] active:bg-gold-dark",
    secondary:
      "bg-bg-tertiary text-white border border-gray-700 hover:border-gold/50 hover:bg-bg-card-hover",
    outline:
      "bg-transparent text-gold border border-gold/50 hover:bg-gold-muted hover:border-gold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
}
