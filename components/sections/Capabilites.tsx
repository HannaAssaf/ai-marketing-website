import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type CapabilityCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  colSpanClass: string;
};

const capabilityCards: CapabilityCard[] = [
  {
    id: "ai-powered",
    title: "AI-Powered Follow-ups",
    description:
      "Automated, intelligent follow-ups that engage leads at the right time-no manual effort needed.",
    image: "/images/ai-powered-follow-ups.png",
    colSpanClass: "xl:col-span-3",
  },
  {
    id: "real-time",
    title: "Real-Time Conversion Insights",
    description:
      "Track your leads, conversions, and campaign performance in one smart, visual interface.",
    image: "/images/real-time-conversion-dashboard.png",
    colSpanClass: "xl:col-span-3",
  },
  {
    id: "email-sms",
    title: "Email + SMS Campaigns",
    description:
      "Personalized campaigns across email and SMS with just a few clicks.",
    image: "/images/emails-sms.png",
    colSpanClass: "xl:col-span-2",
  },
  {
    id: "lead-nurturing",
    title: "Lead Nurturing Workflows",
    description:
      "Set up powerful automation flows to warm up leads and increase close rates.",
    image: "/images/lead-nurturings-workflows.png",
    colSpanClass: "xl:col-span-2",
  },
  {
    id: "one-click",
    title: "One-Click Integrations",
    description:
      "Connect seamlessly with your CRM, website, landing pages, and more.",
    image: "/images/one-click-integrations.png",
    colSpanClass: "xl:col-span-2",
  },
];

export default function Capabilites() {
  return (
    <section className="py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-[760px] text-center">
            <SectionHeading level="h2">
              Everything You Need to Build a Fully Automated Workflow
            </SectionHeading>
            <p className="mx-auto mt-4 max-w-[520px] text-body-md leading-6 font-regular text-neutral-100">
              Connect instantly with the tools you already use: Google Workspace,
              Slack, Notion, CRM systems, databases, and more.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 xl:grid-cols-6">
            {capabilityCards.map((card) => (
              <li
                key={card.id}
                className={`rounded-[14px] border border-white/10 bg-transparent p-4 ${card.colSpanClass}`}
              >
                <div className="relative h-[225px] w-full overflow-hidden rounded-[8px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-body-xl leading-[30px] font-semibold text-neutral-100">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-body-md leading-6 font-regular text-neutral-300">
                    {card.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
