import type { ReactNode } from "react";

type SectionHeadingLevel = "h2" | "h3";

type SectionHeadingProps = {
  level?: SectionHeadingLevel;
  children: ReactNode;
  className?: string;
};

const headingClassMap: Record<SectionHeadingLevel, string> = {
  h2: "font-heading text-[52px] leading-[58px] font-bold tracking-[-0.03em] text-primary-50",
  h3: "font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50",
};

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function SectionHeading({
  level = "h2",
  children,
  className,
}: SectionHeadingProps) {
  if (level === "h3") {
    return <h3 className={cx(headingClassMap.h3, className)}>{children}</h3>;
  }

  return <h2 className={cx(headingClassMap.h2, className)}>{children}</h2>;
}
