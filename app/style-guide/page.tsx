import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Style Guide — AutoAI",
  description:
    "Design tokens, typography, and UI patterns for the AutoAI marketing and product experience.",
};

const colorRows: { name: string; className: string; token: string }[] = [
  { name: "Primary 50", className: "bg-primary-50", token: "text on dark CTAs, highlights" },
  { name: "Primary 500", className: "bg-primary-500", token: "accent, links, focus" },
  { name: "Neutral 50", className: "bg-neutral-50", token: "headings on dark" },
  { name: "Neutral 100", className: "bg-neutral-100", token: "body, secondary text" },
  { name: "Neutral 300", className: "bg-neutral-300", token: "muted descriptions" },
  { name: "Neutral 800", className: "bg-neutral-800", token: "borders, dividers" },
  { name: "Neutral 900", className: "bg-neutral-900", token: "elevated surfaces" },
  { name: "Black", className: "bg-black border border-neutral-800", token: "page background" },
];

function GuideSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-white/10 pt-14 first:border-t-0 first:pt-0">
      <p className="text-body-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-[32px] leading-[40px] font-bold tracking-[-0.03em] text-primary-50 xl:text-[40px] xl:leading-[46px]">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <div className="relative overflow-hidden pb-24 pt-28 xl:pb-32 xl:pt-[150px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(237,95,0,0.18)_0%,rgba(254,2,240,0.06)_45%,transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-1/4 top-1/4 h-[380px] w-[55%] rounded-full bg-[radial-gradient(closest-side,rgba(115,80,255,0.16)_0%,transparent_72%)] blur-3xl"
        />

        <Container>
          <div className="relative mx-auto max-w-7xl">
            <p className="text-body-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
              Design system
            </p>

            <SectionHeading level="h2" className="mt-3 max-w-[640px] text-left">
              AutoAI Style Guide
            </SectionHeading>

            <p className="mt-4 max-w-[720px] text-body-md leading-7 font-regular text-neutral-100">
              This guide documents how we present AutoAI across the marketing site:
              automation workflows, AI-assisted campaigns, and integrations with the
              tools teams already use. Use these tokens and patterns so every screen
              feels fast, trustworthy, and unmistakably on-brand—from hero headlines to
              pricing cards and FAQ.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#colors" variant="secondary" size="sm">
                Colors
              </Button>
              <Button href="#typography" variant="secondary" size="sm">
                Typography
              </Button>
              <Button href="#components" variant="secondary" size="sm">
                Components
              </Button>
            </div>

            <div className="mt-16 space-y-0">
              <GuideSection id="colors" eyebrow="Foundations" title="Color">
                <p className="max-w-[680px] text-body-md leading-7 text-neutral-300">
                  Our palette balances a dark product shell with warm orange accents
                  and soft neutrals—built for long reading sessions and clear hierarchy
                  on automation-heavy layouts.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {colorRows.map((c) => (
                    <li
                      key={c.name}
                      className="overflow-hidden rounded-[14px] border border-neutral-800 bg-neutral-950/80"
                    >
                      <div className={`h-20 w-full ${c.className}`} />
                      <div className="p-4">
                        <p className="text-body-sm font-medium text-neutral-50">{c.name}</p>
                        <p className="mt-1 text-body-sm leading-5 text-neutral-400">{c.token}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </GuideSection>

              <GuideSection id="typography" eyebrow="Content" title="Typography">
                <p className="max-w-[680px] text-body-md leading-7 text-neutral-300">
                  <strong className="font-medium text-neutral-100">Sansation</strong>{" "}
                  carries display and section titles;{" "}
                  <strong className="font-medium text-neutral-100">Inter Tight</strong>{" "}
                  handles UI copy, metrics, and long-form explanations—ideal when you
                  describe pipelines, triggers, and ROI in one breath.
                </p>

                <div className="mt-10 space-y-10 rounded-[16px] border border-neutral-800 bg-[#070E18]/90 p-8">
                  <div>
                    <p className="text-body-sm text-neutral-500">Display / Hero</p>
                    <p className="mt-2 font-heading text-[40px] leading-[46px] font-bold tracking-[-0.03em] text-primary-50 xl:text-[52px] xl:leading-[58px]">
                      Automate Your Business with Next-Level AI
                    </p>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-500">Section heading (h2)</p>
                    <p className="mt-2 font-heading text-[52px] leading-[58px] font-bold tracking-[-0.03em] text-primary-50">
                      Proven results you can measure
                    </p>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-500">Subheading (h3)</p>
                    <p className="mt-2 font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                      Connect your stack in minutes
                    </p>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-500">Body XL · medium</p>
                    <p className="mt-2 text-body-xl leading-[30px] font-medium text-neutral-50">
                      &quot;Lead response time dropped dramatically after launch. We now
                      move faster with less manual effort.&quot;
                    </p>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-500">Body MD · regular</p>
                    <p className="mt-2 text-body-md leading-7 font-regular text-neutral-100">
                      Build workflows that qualify leads, sync CRM fields, and notify
                      your team on Slack—without writing glue code for every integration.
                    </p>
                  </div>
                  <div>
                    <p className="text-body-sm text-neutral-500">Body SM · regular</p>
                    <p className="mt-2 text-body-sm leading-6 font-regular text-neutral-300">
                      Enterprise-ready permissions, audit trails, and environment
                      separation for growth and RevOps teams.
                    </p>
                  </div>
                </div>
              </GuideSection>

              <GuideSection id="components" eyebrow="UI" title="Components">
                <p className="max-w-[680px] text-body-md leading-7 text-neutral-300">
                  Buttons follow the same gradient language as primary marketing CTAs;
                  secondary actions sit on dark surfaces with a subtle border—perfect
                  for &quot;Watch demo&quot; next to &quot;Get started&quot;.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button href="/#pricing" variant="primary" size="sm">
                    Get started
                  </Button>
                  <Button href="/#features" variant="secondary" size="sm">
                    Explore features
                  </Button>
                  <Button href="/license" variant="secondary" size="sm">
                    View license
                  </Button>
                </div>

                <div className="mt-12">
                  <p className="text-body-sm text-neutral-500">Badge / pill</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="inline-flex rounded-full border border-[#2A323D] bg-black/80 px-3 py-1 text-body-sm leading-6 font-regular text-neutral-100">
                      Our statistics
                    </span>
                    <span className="inline-flex rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-body-sm font-medium text-primary-50">
                      AI workflows
                    </span>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-[16px] border border-[#2A323D] bg-black/70 p-6">
                    <p className="font-heading text-[40px] leading-[44px] font-bold tracking-[-0.03em] text-neutral-50">
                      +200%
                    </p>
                    <p className="mt-4 text-body-md font-medium text-neutral-50">
                      Lead conversion
                    </p>
                    <p className="mt-1 text-body-sm text-neutral-300">
                      Typical uplift when nurture and routing run on AutoAI.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-[#2A323D] bg-[#070E18] p-6">
                    <p className="text-body-md font-medium text-neutral-50">FAQ card</p>
                    <p className="mt-2 text-body-sm leading-6 text-neutral-300">
                      Accordion rows use rounded corners and neutral borders so dense
                      help content stays scannable next to hero gradients.
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-body-sm text-neutral-500">Inline link</p>
                  <p className="mt-2 text-body-md text-neutral-100">
                    Read the{" "}
                    <a
                      href="/license"
                      className="text-primary-500 underline decoration-primary-500/35 underline-offset-2 transition hover:text-primary-50"
                    >
                      license terms
                    </a>{" "}
                    before rolling out automations org-wide.
                  </p>
                </div>
              </GuideSection>

              <GuideSection eyebrow="Voice" title="Tone">
                <p className="max-w-[680px] text-body-md leading-7 text-neutral-300">
                  Marketing copy should sound confident and practical: emphasize time
                  saved, fewer handoffs, and measurable pipeline impact. Avoid hype
                  that promises full autonomy—AutoAI augments teams, keeps humans in
                  the loop for strategy, and stays clear about integrations and
                  security.
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-body-md leading-7 text-neutral-100 marker:text-primary-500">
                  <li>Lead with outcomes (speed, consistency, revenue), not buzzwords.</li>
                  <li>Name real tools (CRM, Slack, Notion) when describing connectivity.</li>
                  <li>Use short paragraphs and scannable lists for technical buyers.</li>
                </ul>
              </GuideSection>
            </div>

            <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-12 sm:flex-row">
              <Button href="/" variant="primary" size="sm" className="sm:min-w-[160px]">
                Back to home
              </Button>
              <Button href="/license" variant="secondary" size="sm" className="sm:min-w-[160px]">
                License
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
