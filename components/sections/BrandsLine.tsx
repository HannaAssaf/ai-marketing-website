"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";

type BrandLogo = {
  id: string;
  label: string;
  width: number;
  height: number;
};

const brands: BrandLogo[] = [
  { id: "eclipseful-logo", label: "Eclipseful", width: 136, height: 38 },
  { id: "constellation-logo", label: "Constellation", width: 183, height: 38 },
  { id: "luminary-logo", label: "Luminary", width: 138, height: 38 },
  { id: "chromatools-logo", label: "Chromatools", width: 163, height: 38 },
  { id: "odeaolabs-logo", label: "Odeaolabs", width: 149, height: 38 },
  { id: "norsestar-logo", label: "Norsestar", width: 138, height: 38 },
  { id: "florafauna-logo", label: "Florafauna", width: 161, height: 38 },
  { id: "ikig-logo", label: "Ikig", width: 71, height: 38 },
];

export default function BrandsLine() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -150px 0px",
        threshold: 0,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-6 xl:py-10">
      <Container>
        <div className="mx-auto w-full max-w-7xl overflow-hidden">
          <h2 className="sr-only">Trusted by leading brands</h2>
          <div className={`flex w-max ${isActive ? "animate-brandsline-left" : ""}`}>
            {[0, 1].map((copyIndex) => (
              <ul
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                className="flex items-center gap-[30px] pr-[30px]"
              >
                {brands.map((brand) => (
                  <li key={`${brand.id}-${copyIndex}`} className="shrink-0">
                    <svg
                      aria-label={brand.label}
                      className="h-[37.41px]"
                      style={{ width: `${(brand.width / brand.height) * 37.41}px` }}
                      viewBox={`0 0 ${brand.width} ${brand.height}`}
                      fill="none"
                    >
                      <use href={`/sprite.svg#${brand.id}`} />
                    </svg>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
