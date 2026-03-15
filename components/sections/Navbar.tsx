import Image from "next/image";
import Container from "../ui/Container";

const navSections = [
  {
    label: "Products",
    items: [
      "Automation Builder",
      "AI Workflows",
      "Data Integrations",
      "Analytics",
    ],
  },
];

const topLevelLinks = ["Solutions", "Features", "Company", "Pricing"];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full py-5">
      <Container>
        <div className="py-3">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[14px] bg-black/80 pl-4 pr-0 text-primary-50 backdrop-blur lg:bg-transparent lg:backdrop-blur-0">
          <div className="flex items-center gap-[30px]">
          <a href="/" className="flex items-center gap-1.5 h-11 border rounded-[14px] border-[var(--border)] px-3 py-1">
            {/* <div className="relative grid h-8 w-8 place-items-center">
  <span className="absolute inset-[-6px] -z-10 rounded-full bg-[radial-gradient(circle,#FE02F0_0%,#ED5F00_55%,transparent_75%)] blur-[10px]" />
  <Image src="/logo1.svg" alt="AutoAI logo" width={60} height={53.5} className="h-6 w-7 shrink-0" />
</div> */}
              <Image
              src="/logo1.svg"
              alt="AutoAI logo"
              width={60}
              height={53.5}
              className="h-10 w-9 shrink-0 [text-shadow:0_0_80px_#ED5F00,0_0_20px_rgba(237,95,0,0.12),0_0_40px_#ED5F00,0_0_20px_#FE02F0,0_0_10px_#FE02F0]"
              priority
            />
            <span className="font-body text-md font-bold">AutoAI</span>
          </a>

          <ul className="hidden w-110 items-center gap-8 lg:flex  h-11 border rounded-[14px] border-[var(--border)] px-3 py-2">
            {navSections.map((section) => (
              <li key={section.label} className="group relative">
                <button
                  type="button"
                  className="text-sm font-medium text-primary-50/90 hover:text-primary-50"
                >
                  {section.label}
                </button>

                <ul className="invisible absolute left-0 top-full z-20 mt-3 min-w-[220px] rounded-lg border border-white/10 bg-[#0E1115] p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 ">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block rounded-md px-3 py-2 text-sm text-primary-50/80 hover:bg-white/5 hover:text-primary-50"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {topLevelLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-50/90 hover:text-primary-50"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-1 rounded-[20px] border border-[#4D2608] bg-[#070E18] p-1 shadow-[0_8px_18px_rgba(0,0,0,0.3)]">
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-xl px-5 text-[15px] font-medium leading-none text-[#EDEFF3] transition hover:bg-white/5"
              >
                Book Demo
              </a>
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF4DB8] to-[#FF6A00] px-5 text-[15px] font-semibold leading-none text-white shadow-[0_3px_10px_rgba(255,106,0,0.35)] transition hover:brightness-110"
              >
                Get Started
              </a>
            </div>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-primary-50 lg:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-[11px] w-[18px]"
              viewBox="0 0 18 11"
            >
              <use href="/sprite.svg#burger" />
            </svg>
          </button>
        </nav>
</div>
              </Container>
    </header>
  );
}
