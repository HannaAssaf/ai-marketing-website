"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "what-is-ai-automation",
    question: "What is AI automation?",
    answer:
      "AI automation uses machine intelligence to handle repetitive tasks and decision flows without constant manual input. It helps teams move faster by turning routine operations into reliable automated workflows.",
  },
  {
    id: "how-ai-automation-helps",
    question: "How does AI automation help businesses?",
    answer:
      "It reduces response times, cuts operational overhead, and keeps customer journeys consistent across channels. Teams get more time for strategy while AI handles follow-ups, routing, and repetitive execution.",
  },
  {
    id: "replace-human-teams",
    question: "Can AI automation replace human teams?",
    answer:
      "AI automation is designed to support teams, not replace them entirely. People still lead strategy, creativity, and complex decisions while automation covers repetitive and time-sensitive tasks.",
  },
  {
    id: "difficult-to-setup",
    question: "Is AI automation difficult to set up?",
    answer:
      "Modern platforms are built for quick setup with templates and no-code builders. Most teams can launch their first workflows quickly and scale over time as needs grow.",
  },
  {
    id: "what-tasks-can-be-automated",
    question: "What tasks can be automated using AI?",
    answer:
      "Common use cases include lead capture, email and SMS follow-ups, qualification, scheduling, and reporting. AI can also support customer service triage and internal process orchestration.",
  },
  {
    id: "is-ai-automation-secure",
    question: "Is AI automation secure?",
    answer:
      "Yes, trusted platforms provide access controls, encryption, and audit trails to protect sensitive data. Security still depends on proper configuration and governance best practices.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-16 xl:py-[130px]">
      <Container>
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden bg-black px-5 py-12 xl:px-20 xl:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[943px] w-[943px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F08A3C]/65 shadow-[0_0_38px_rgba(255,130,34,0.5),inset_0_0_38px_rgba(255,130,34,0.22)] xl:h-[1127px] xl:w-[1127px]"
          />

          <div className="relative z-10 mx-auto max-w-[640px] text-center">
            <SectionHeading level="h2">Got Questions? We&apos;ve Got Answers.</SectionHeading>
            <p className="mx-auto mt-4 max-w-[540px] text-body-md leading-6 font-regular text-neutral-100">
              Connect instantly with the tools you already use: Google Workspace,
              Slack, Notion, CRM systems, databases, and more.
            </p>
          </div>

          <ul className="relative z-10 mx-auto mt-8 w-full max-w-[820px] space-y-4 xl:mt-10">
            {faqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <li key={item.id} className="rounded-[12px] border border-[#2A323D] bg-black/70">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-body-lg leading-6 font-medium text-neutral-50"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <Image
                      src="/svg/arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4">
                      <p className="text-body-md leading-6 font-regular text-neutral-300">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
