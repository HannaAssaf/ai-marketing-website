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
  return (
    <section className="py-10">
      <Container>
        <div className="mx-auto w-full max-w-7xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <h2 className="sr-only">Trusted by leading brands</h2>
          <ul className="flex min-w-max items-center gap-[30px]">
            {brands.map((brand) => (
              <li key={brand.id} className="shrink-0">
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
        </div>
      </Container>
    </section>
  );
}
