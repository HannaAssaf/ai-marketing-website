import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Software License — AutoAI",
  description:
    "Terms governing your use of the AutoAI automation platform, workflows, and related services.",
};

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <article className="relative overflow-hidden pb-24 pt-28 xl:pb-32 xl:pt-[150px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(237,95,0,0.18)_0%,rgba(254,2,240,0.06)_45%,transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-1/4 top-1/3 h-[360px] w-[55%] rounded-full bg-[radial-gradient(closest-side,rgba(115,80,255,0.16)_0%,transparent_72%)] blur-3xl"
        />

        <Container>
          <div className="relative mx-auto max-w-[720px]">
            <p className="text-body-sm font-medium uppercase tracking-[0.18em] text-neutral-400">
              Legal
            </p>

            <SectionHeading level="h2" className="mt-3 text-left">
              Software License Agreement
            </SectionHeading>

            <p className="mt-4 text-body-md leading-6 font-regular text-neutral-300">
              This agreement governs access to and use of the AutoAI platform,
              including automation workflows, integrations, analytics, and
              related services (&quot;Services&quot;). By using AutoAI, you accept
              these terms on behalf of yourself or the organization you represent.
            </p>

            <p className="mt-2 text-body-sm leading-6 text-neutral-500">
              Last updated: March 25, 2026
            </p>

            <div className="mt-10 space-y-10 border-t border-white/10 pt-10">
              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  1. Grant of license
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  Subject to this agreement and your selected plan, AutoAI grants
                  you a limited, non-exclusive, non-transferable license to access
                  and use the Services for your internal business operations. This
                  license does not include resale, redistribution, or use to
                  build a competing automation or AI orchestration product.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  2. Automation &amp; AI outputs
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  AutoAI helps you design and run automated workflows across
                  connected tools (such as CRM, email, databases, and messaging).
                  You are responsible for how you configure triggers, data flows,
                  and AI-assisted steps. Outputs may require human review where
                  decisions affect compliance, safety, or material business
                  outcomes. We improve reliability over time but do not guarantee
                  uninterrupted or error-free operation.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  3. Your data &amp; integrations
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  You retain ownership of data you submit through the Services.
                  You grant AutoAI the rights reasonably needed to host, process,
                  and transmit that data to deliver automations you enable. You
                  must connect only systems you are authorized to use and comply
                  with applicable privacy and security obligations.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  4. Acceptable use
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  You will not misuse the Services—including attempting to probe,
                  disrupt, or exceed rate limits; send unlawful or deceptive
                  communications through automations; or process sensitive
                  categories of data contrary to our policies or the law. We may
                  suspend access if we reasonably believe these rules are
                  violated.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  5. Intellectual property
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  AutoAI and its licensors own all rights in the platform,
                  software, documentation, and branding. Except for the limited
                  license above, no rights are granted. Feedback you provide may
                  be used to improve the Services without obligation to you.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  6. Disclaimer
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  The Services are provided &quot;as is&quot; to the maximum extent
                  permitted by law. AutoAI disclaims implied warranties where
                  allowed. Our aggregate liability arising from this agreement is
                  limited to the fees you paid to AutoAI in the twelve months
                  before the claim, except where liability cannot be limited by
                  law.
                </p>
              </section>

              <section>
                <h3 className="font-heading text-[28px] leading-[38px] font-semibold tracking-[-0.02em] text-primary-50">
                  7. Changes &amp; contact
                </h3>
                <p className="mt-3 text-body-md leading-7 font-regular text-neutral-100">
                  We may update this license to reflect product or legal changes;
                  material updates will be communicated through the app or by
                  email where appropriate. Questions about this agreement can be
                  directed to{" "}
                  <a
                    href="mailto:info@example.com"
                    className="text-primary-500 underline decoration-primary-500/40 underline-offset-2 transition hover:text-primary-50"
                  >
                    info@example.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button href="/" variant="primary" size="sm" className="sm:min-w-[160px]">
                Back to home
              </Button>
              <Button
                href="/#pricing"
                variant="secondary"
                size="sm"
                className="sm:min-w-[160px]"
              >
                View pricing
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}
