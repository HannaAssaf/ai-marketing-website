import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type Props = LinkButtonProps | NativeButtonProps;

const baseClassName =
  "inline-flex items-center justify-center rounded-lg px-[18px] py-[12px] text-sm font-semibold transition-all duration-200 w-full sm:w-auto";

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "h-10 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-8 text-[34px] leading-[42px]",
};

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#ff6a00] to-[#ff4db8] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110",
  secondary:
    "bg-[#0E1115] border border-[#2A323D] text-primary-50 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#121722]",
  light: "bg-primary-50 text-[#111827] hover:bg-white/95",
};

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  const mergedClassName = cx(
    baseClassName,
    sizeClassMap[size],
    variantClassMap[variant],
    className
  );

  const linkHref = (props as LinkButtonProps).href;
  if (typeof linkHref === "string") {
    const { href, ...rest } = props as LinkButtonProps;
    return (
      <a href={href} className={mergedClassName} {...rest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as NativeButtonProps;

  return (
    <button type={type} className={mergedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
