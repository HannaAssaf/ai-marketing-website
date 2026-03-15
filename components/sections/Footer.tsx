import Image from "next/image";
import Container from "../ui/Container";

const mainPages = ["Home", "About", "Features", "Pricing", "Contact"];
const utilityPages = ["404", "License", "Style Guide", "Instructions", "Change-Log"];

const socialLinks = [
  { label: "Facebook", iconId: "facebook", href: "#" },
  { label: "LinkedIn", iconId: "linkedin", href: "#" },
  { label: "X", iconId: "x", href: "#" },
  { label: "Threads", iconId: "treds", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-40 bg-black pb-8 pt-[100px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 overflow-hidden">
        <div className="absolute inset-x-0 top-[18px] h-[2px] bg-[linear-gradient(90deg,rgba(255,117,212,0)_0%,rgba(255,117,212,1)_50%,rgba(255,117,212,0)_100%)]" />
        <div className="absolute left-1/2 top-0 h-10 w-[480px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(182,56,255,0.58)_0%,rgba(115,80,255,0.35)_38%,rgba(115,80,255,0)_78%)] blur-[8px]" />
      </div>

      <Container>
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-8 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1fr] xl:gap-12">
            <div>
              <a
                href="/"
                className="inline-flex h-11 items-center gap-1.5 rounded-[14px] border border-[var(--border)] px-3 py-1"
              >
                <Image
                  src="/logo1.svg"
                  alt="AutoAI logo"
                  width={60}
                  height={53.5}
                  className="h-10 w-9 shrink-0"
                />
                <span className="font-body text-md font-bold text-primary-50">AutoAI</span>
              </a>

              <p className="mt-4 text-base text-neutral-400">
                Smarter campaigns. Faster growth.
              </p>

              <div className="mt-7 flex items-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="text-neutral-400 transition hover:text-primary-50"
                  >
                    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24">
                      <use href={`/sprite.svg#${item.iconId}`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-body-xl leading-[30px] font-medium text-primary-50">
                Main Pages
              </h3>
              <ul className="mt-5 space-y-3 text-body-md leading-normal font-medium text-neutral-400">
                {mainPages.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-neutral-400 transition hover:text-primary-50">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-body-xl leading-[30px] font-medium text-primary-50">
                Utility Pages
              </h3>
              <ul className="mt-5 space-y-3 text-body-md leading-normal font-medium text-neutral-400">
                {utilityPages.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-neutral-400 transition hover:text-primary-50">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-body-xl leading-[30px] font-medium text-primary-50">
                Contact Us
              </h3>
              <ul className="mt-5 space-y-3 text-body-md leading-normal font-medium text-neutral-400">
                <li>(012) 345-6789</li>
                <li>info@example.com</li>
                <li>123 Future Street, Innovation City, CA 90210</li>
              </ul>
            </div>
          </div>

          <p className="pt-8 text-center text-base text-neutral-500">
            Copyright &copy; 2026 AutoAI
          </p>
        </div>
      </Container>
    </footer>
  );
}
