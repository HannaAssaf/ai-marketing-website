import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type AutomationCard = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const cards: AutomationCard[] = [
  {
    id: "connect",
    title: "Connect your tools",
    description: "Link your apps and data sources in seconds.",
    image: "/images/connect-your-tools.png",
  },
  {
    id: "build",
    title: "Build your automation flow",
    description: "Use our drag-and-drop builder to design your ideal workflow.",
    image: "/images/build-your-autoflow.png",
  },
  {
    id: "launch",
    title: "Launch & take control",
    description: "Once activated, AI takes over-executing tasks, routing data.",
    image: "/images/launch-and-take-control.png",
  },
];

export default function Automation() {
  return (
    <section id="automation" className="py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_355px] xl:items-start">
            <SectionHeading level="h2" className="max-w-[436px] text-primary-50">
              Automate Your Business in 3 Steps
            </SectionHeading>

            <p className="text-body-md leading-6 font-regular text-neutral-100 xl:max-w-[355px]">
              Connect instantly with the tools you already use: Google Workspace,
              Slack, Notion, CRM systems, databases, and more.
            </p>
          </div>

          <div className="relative mt-15 overflow-hidden">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[52%]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(255, 140, 40, 0.2652) 0%, rgba(255, 120, 20, 0.1326) 40%, rgba(255, 120, 20, 0.05304) 62%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            <ul className="relative z-10 grid grid-cols-1 gap-[10px] xl:grid-cols-[repeat(3,_406px)] xl:justify-center">
              {cards.map((card) => (
                <li
                  key={card.id}
                  className="relative isolate overflow-hidden rounded-[6px] border border-[#ED5F00]/40 bg-black"
                >
                  <div
                    className="pointer-events-none absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat"
                    style={{ backgroundImage: "url('/images/automation-bg.png')" }}
                  />

                  <div className="relative z-20 flex min-h-[477px] flex-col gap-[55px] px-[23px] py-[21px]">
                    <div className="relative h-[225px] w-full overflow-hidden rounded-[4px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="max-w-[236px]">
                      <Image
                        src="/row.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="mb-3 h-6 w-6"
                      />
                      <h3 className="text-body-xl leading-[30px] font-medium text-primary-50">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-body-md leading-6 font-regular text-neutral-300">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
