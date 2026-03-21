"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type StatisticItem = {
  id: string;
  title: string;
  description: string;
  /** Target number shown after animation */
  count: number;
  prefix?: string;
  suffix: "%" | "X";
};

const statistics: StatisticItem[] = [
  {
    id: "lead-conversion",
    count: 200,
    prefix: "+",
    suffix: "%",
    title: "Lead Conversion Rate",
    description: "Clients experience over double in just two months.",
  },
  {
    id: "response-times",
    count: 95,
    suffix: "%",
    title: "Faster Response Times",
    description: "Automations cut lead follow-up times by over 90%.",
  },
  {
    id: "revenue-per-client",
    count: 3,
    suffix: "X",
    title: "More Revenue per Client",
    description: "Better nurturing means customers spend more.",
  },
  {
    id: "businesses-trust-us",
    count: 500,
    suffix: "%",
    title: "Businesses Trust Us",
    description: "Our platform fuels growth for businesses of all sizes.",
  },
];

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function AnimatedStatNumber({
  target,
  prefix = "",
  suffix,
  start,
  delayMs,
  durationMs,
  instant,
}: {
  target: number;
  prefix?: string;
  suffix: "%" | "X";
  start: boolean;
  delayMs: number;
  durationMs: number;
  instant: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (instant) {
      setValue(target);
      return;
    }

    let raf = 0;
    const delay = window.setTimeout(() => {
      const t0 = performance.now();

      const tick = (now: number) => {
        const elapsed = now - t0;
        const t = Math.min(1, elapsed / durationMs);
        const eased = easeOutCubic(t);
        setValue(target * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      clearTimeout(delay);
      cancelAnimationFrame(raf);
    };
  }, [start, target, delayMs, durationMs, instant]);

  const text = `${prefix}${Math.round(value)}${suffix}`;

  return (
    <p className="font-heading text-[40px] leading-[44px] font-bold tracking-[-0.03em] text-neutral-50 tabular-nums">
      {text}
    </p>
  );
}

export default function Statistic() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const [e] = entries;
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const durationMs = reducedMotion ? 0 : 2400;
  const staggerMs = reducedMotion ? 0 : 180;

  return (
    <section
      id="statistic"
      ref={sectionRef}
      className="py-16 xl:py-[130px]"
    >
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto w-fit rounded-full border border-[#2A323D] bg-black/80 px-3 py-1">
            <p className="text-body-sm leading-6 font-regular text-neutral-100">
              Our statistics
            </p>
          </div>

          <SectionHeading level="h2" className="mx-auto mt-3 text-center">
            Proven results you can measure
          </SectionHeading>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[10px]">
            {statistics.map((item, index) => (
              <li
                key={item.id}
                className="statistic-card-bg w-full rounded-[16px] border border-[#2A323D] p-6 xl:min-h-[279px] xl:rounded-[14px] xl:px-6 xl:py-6"
              >
                <AnimatedStatNumber
                  target={item.count}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  start={inView}
                  delayMs={index * staggerMs}
                  durationMs={durationMs}
                  instant={reducedMotion}
                />
                <p className="mt-6 text-body-md leading-6 font-medium text-neutral-50">
                  {item.title}
                </p>
                <p className="mt-1 text-body-sm leading-6 font-regular text-neutral-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
