"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type PricingPlan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  ctaLabel: string;
};

const plans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    description: "Ideal for those who need an ongoing content design support.",
    features: [
      "Up to 5 articles or blog posts",
      "Basic on-page SEO guidance for content",
      "Social Media: 5 posts per month",
      "Keyword Suggestions: Limited",
      "Support: Email support",
    ],
    ctaLabel: "Start for Free",
  },
  {
    id: "pro",
    name: "Pro",
    price: 10,
    description: "Ideal for those who need an ongoing content design support.",
    features: [
      "Up to 5 articles or blog posts",
      "Basic on-page SEO guidance for content",
      "Social Media: 5 posts per month",
      "Keyword Suggestions: Limited",
      "Support: Email support",
    ],
    ctaLabel: "Start for Free",
  },
  {
    id: "premium",
    name: "Premium",
    price: 50,
    description: "Ideal for those who need an ongoing content design support.",
    features: [
      "Up to 5 articles or blog posts",
      "Basic on-page SEO guidance for content",
      "Social Media: 5 posts per month",
      "Keyword Suggestions: Limited",
      "Support: Email support",
    ],
    ctaLabel: "Start for Free",
  },
];

export default function Pricing() {
  const [activePlanId, setActivePlanId] = useState<string>(plans[0].id);

  return (
    <section id="pricing" className="py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_400px] xl:items-start">
            <SectionHeading level="h2" className="max-w-[445px]">
              Pricing that works for you
            </SectionHeading>
            <p className="text-body-md leading-6 font-regular text-neutral-100">
              Whether you&apos;re just getting started or running a team, we
              have a plan that fits. Transparent pricing, powerful features,
              built to scale.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[52%]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(255, 140, 40, 0.2652) 0%, rgba(255, 120, 20, 0.1326) 40%, rgba(255, 120, 20, 0.05304) 62%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            <ul className="relative z-10 grid grid-cols-1 gap-[10px] xl:grid-cols-[repeat(3,_406px)] xl:justify-center">
              {plans.map((plan) => {
                const isActive = activePlanId === plan.id;
                const ctaClassName =
                  isActive
                    ? "bg-gradient-to-r from-[#FF3D9A] to-[#FF7A1A] text-neutral-50"
                    : "bg-neutral-50 text-neutral-950";

                return (
                  <li
                    key={plan.id}
                    className="relative isolate overflow-hidden rounded-[6px] border border-[#ED5F00]/40 bg-black"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat"
                      style={{ backgroundImage: "url('/images/automation-bg.png')" }}
                    />

                    <div className="relative z-20 flex min-h-[520px] flex-col p-6">
                      <p className="text-body-xl leading-[30px] font-medium text-neutral-50">
                        {plan.name}
                      </p>

                      <div className="mt-2 flex items-end gap-1">
                        <p className="font-heading text-[62px] leading-[58px] font-bold tracking-[-0.03em] text-neutral-50">
                          ${plan.price}
                        </p>
                        <span className="pb-1 text-body-xl leading-[30px] font-regular text-neutral-100">
                          /monthly
                        </span>
                      </div>

                      <p className="mt-4 max-w-[290px] text-body-md leading-6 font-regular text-neutral-100">
                        {plan.description}
                      </p>

                      <div className="mt-8 h-px w-full bg-neutral-700/80" />

                      <ul className="mt-6 space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-body-md leading-6 font-regular text-neutral-100"
                          >
                            <span className="mt-[1px] text-[10px] text-neutral-50">
                              &#9654;
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => setActivePlanId(plan.id)}
                        aria-pressed={isActive}
                        className={`mt-auto h-[52px] w-full rounded-[8px] text-body-md leading-6 font-semibold transition-opacity duration-200 hover:opacity-90 ${ctaClassName}`}
                      >
                        {plan.ctaLabel}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
