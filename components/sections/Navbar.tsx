"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";

const navSections = [
  {
    label: "Products",
    href: "#capabilites",
    items: [
      "Automation Builder",
      "AI Workflows",
      "Data Integrations",
      "Analytics",
    ],
  },
];

const topLevelLinks = [
  { label: "Solutions", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Company", href: "#automation" },
  { label: "Pricing", href: "#pricing" },
];

const mobileLinks = [
  { label: "Product", href: "#capabilites" },
  ...topLevelLinks,
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full py-5">
      <Container>
        <div className="py-3">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[14px] bg-black/80 pl-0 pr-0 text-primary-50 backdrop-blur lg:bg-transparent lg:backdrop-blur-0">
            <div className="flex items-center gap-[30px]">
              <a
                href="/"
                className="relative isolate flex h-[46px] items-center gap-3 overflow-hidden rounded-[14px] border border-neutral-800 bg-black/95 pl-2.5 pr-4"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[33%]"
                  style={{
                    background:
                      "radial-gradient(120% 105% at 26% 50%, rgba(237,95,0,0.22) 0%, rgba(254,2,240,0.16) 44%, rgba(254,2,240,0.06) 58%, rgba(0,0,0,0) 100%)",
                    filter: "blur(4px)",
                  }}
                />
                <span className="relative z-10 grid h-10 w-9 shrink-0 place-items-center animate-logo-star-drift">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-[-6px] -z-10 rounded-full"
                    style={{
                      background:
                        "radial-gradient(closest-side at 50% 50%, rgba(254,2,240,0.26) 0%, rgba(237,95,0,0.15) 55%, rgba(0,0,0,0) 100%)",
                      filter: "blur(7px)",
                    }}
                  />
                  <Image
                    src="/logo.svg"
                    alt="AutoAI logo"
                    width={22}
                    height={22}
                    className="relative z-10 h-[22px] w-[22px]"
                    priority
                  />
                </span>
                <span className="relative z-10 font-body text-[22px] leading-none font-semibold tracking-[-0.02em] text-primary-50">
                  AutoAI
                </span>
              </a>

              <ul className="hidden h-11 w-110 items-center gap-8 rounded-[14px] border border-[var(--border)] px-3 py-2 lg:flex">
                {navSections.map((section) => (
                  <li key={section.label} className="group relative">
                    <a
                      href={section.href}
                      className="text-sm font-medium text-primary-50/90 hover:text-primary-50"
                    >
                      {section.label}
                    </a>

                    <ul className="invisible absolute left-0 top-full z-20 mt-3 min-w-[220px] rounded-lg border border-white/10 bg-[#0E1115] p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
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
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-primary-50/90 hover:text-primary-50"
                    >
                      {link.label}
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((value) => !value)}
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

          {isMobileMenuOpen && (
            <div className="mt-3 rounded-[6px] border border-[#4D2608] bg-black p-3 text-primary-50 lg:hidden">
              <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-3">
                <a
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex h-8 items-center gap-1.5 rounded-[10px] border border-[var(--border)] px-2"
                >
                  <Image
                    src="/logo.svg"
                    alt="AutoAI logo"
                    width={22}
                    height={20}
                    className="h-5 w-[22px] shrink-0"
                  />
                  <span className="text-sm font-semibold">AutoAI</span>
                </a>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-primary-50/90"
                >
                  <Image
                    src="/close-remove.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                  />
                </button>
              </div>

              <ul className="space-y-3">
                {mobileLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-[22px] leading-[30px] font-medium text-primary-50/90"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-2">
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="inline-flex h-12 items-center justify-center rounded-[10px] bg-[#121A27] text-[15px] font-medium text-[#EDEFF3]"
                >
                  Watch Demo
                </a>
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="inline-flex h-12 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#FF4DB8] to-[#FF6A00] text-[15px] font-semibold text-white"
                >
                  Start Creating Free
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
