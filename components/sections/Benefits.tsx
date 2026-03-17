import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type BenefitItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const benefits: BenefitItem[] = [
  {
    id: "turn-visitors",
    icon: "/svg/benefit-1.svg",
    title: "Turn visitors into leads instantly",
    description: "Smart pop-ups and forms grab attention at the perfect moment.",
  },
  {
    id: "nurture-leads",
    icon: "/svg/benefit-2.svg",
    title: "Nurture leads on autopilot",
    description: "AI-driven emails and reminders ensure you never miss an opportunity.",
  },
  {
    id: "track-results",
    icon: "/svg/benefit-3.svg",
    title: "Know what's working, in real time",
    description: "See where leads come from and how they convert - no guesswork.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 xl:py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative pb-14 xl:hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 top-[430px] w-screen -translate-x-1/2 bg-bottom bg-cover bg-no-repeat sm:top-[450px]"
              style={{ backgroundImage: "url('/images/benefits-bg-image.png')" }}
            />

            <SectionHeading
              level="h2"
              className="relative z-10 mx-auto text-center text-[clamp(32px,9vw,38px)] leading-[clamp(40px,11vw,48px)]"
            >
              We streamline workflows, eliminate manual steps, and scale decisions
              in real time so your brand moves with precision, not guesswork.
            </SectionHeading>

            <div className="relative z-10 mx-auto mt-8 w-full rounded-[16px] border border-[#2A323D] p-3">
              <div className="min-h-[640px] rounded-[14px] border border-[#2A323D] bg-[#000000] p-5 sm:min-h-[775px]">
                <p className="mx-auto text-center text-[clamp(28px,8vw,32px)] leading-[clamp(34px,9vw,38px)] font-medium text-neutral-50">
                  What can you achieve with AutoAI?
                </p>

                <ul className="mx-auto mt-8 w-full space-y-8 sm:space-y-10">
                  {benefits.map((benefit) => (
                    <li key={benefit.id}>
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                      <p className="mt-4 text-body-md leading-6 font-medium text-neutral-50">
                        {benefit.title}
                      </p>
                      <p className="mt-2 text-body-sm leading-6 font-regular text-neutral-300">
                        {benefit.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative hidden xl:block">
            <div
              className="absolute inset-x-0 top-0 mx-auto h-[466px] w-full max-w-[1187px] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/images/benefits-bg-image.png')" }}
            />

            <SectionHeading level="h2" className="relative z-10 w-full text-center pt-10">
              We streamline workflows, eliminate manual steps, and scale decisions
              in real time so your brand moves with precision, not guesswork.
            </SectionHeading>

            <div className="relative z-10 mt-[236px] rounded-[16px] border border-[#2A323D] p-3">
              <div className="rounded-[14px] border border-[#2A323D] p-5 xl:min-h-[320px] xl:px-10 xl:py-10">
                <p className="text-center text-body-xl leading-[30px] font-medium text-neutral-50 xl:text-[32px] xl:leading-[40px]">
                  What can you achieve with AutoAI?
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-5 xl:mt-10 xl:grid-cols-3 xl:gap-12">
                  {benefits.map((benefit) => (
                    <li key={benefit.id} className="rounded-[10px] p-3 xl:p-0">
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                      <p className="mt-4 text-body-md leading-6 font-medium text-neutral-50 xl:text-[22px] xl:leading-[30px]">
                        {benefit.title}
                      </p>
                      <p className="mt-2 text-body-sm leading-6 font-regular text-neutral-300 xl:text-body-md">
                        {benefit.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
