import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type TestimonialCard =
  {
    id: string;
    image: string;
    quote: string;
    name: string;
    role: string;
    roleClassName?: string;
  };

const cards: TestimonialCard[] = [
  {
    id: "review-1",
    image: "/images/reviews.jpg",
    quote:
      '"AutoAI helped us eliminate repetitive work and gave our team back real focus time every week."',
    name: "Arman H",
    role: "COO at NexaTech",
    roleClassName: "text-primary-50",
  },
  {
    id: "review-2",
    image: "/images/reviews2.jpg",
    quote:
      '"Lead response time dropped dramatically after launch. We now move faster with less manual effort."',
    name: "Min J.",
    role: "Growth Lead at Orbita",
  },
  {
    id: "review-3",
    image: "/images/reviews3.jpg",
    quote:
      '"Our workflow is now 80% automated, saving us hours every week. The AI solutions delivered were seamless and efficient!"',
    name: "Marta K.",
    role: "Operations Manager at Novo",
    roleClassName: "text-primary-50",
  },
  {
    id: "review-4",
      image: "/images/reviews4.jpg",
      quote:
      '"We finally have one automation system that coordinates our CRM, email, and sales workflows together."',
    name: "Olivia T.",
    role: "RevOps Lead at Astral",
  },
  {
    id: "review-5",
    image: "/images/reviews5.jpg",
    quote:
      '"Setup was smooth, integrations worked out of the box, and results were visible in days, not months."',
    name: "Daniel R.",
    role: "Founder at BluePeak",
  },
  {
    id: "review-6",
    image: "/images/reviews6.jpg",
    quote:
      '"The automations are reliable and easy to maintain. We scaled campaigns without adding headcount."',
    name: "Leah P.",
    role: "Marketing Director at Quanta",
  },
];

const oddCardAvatars = [
  "/images/ellipse1.png",
  "/images/ellipse2.png",
  "/images/ellipse3.png",
];

export default function Testimonial() {
  return (
    <section className="py-16 xl:py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading level="h2" className="max-w-[420px]">
            What Our Users Are Saying
          </SectionHeading>

          <div className="mt-10 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max snap-x snap-mandatory gap-4">
              {cards.map((card, index) => {
                const isOddCard = index % 2 === 0;
                const oddCardIndex = Math.floor(index / 2);
                const avatarSrc =
                  oddCardAvatars[oddCardIndex] ?? "/images/ellipse.jpg";

                return (
                  <li
                    key={card.id}
                    className="relative h-[368px] w-[383px] shrink-0 snap-start overflow-hidden rounded-[24px] border border-neutral-950 bg-[#070E18]"
                  >
                    <div className="absolute inset-[15px] overflow-hidden rounded-[20px] border border-black">
                      {isOddCard ? (
                        <>
                          <div className="absolute inset-0 bg-black" />
                          <div className="absolute inset-0 bg-[rgba(255,102,0,0.10)]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(153,153,153,0.07)_0%,rgba(255,255,255,0)_100%)]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,102,0,0.59)_0%,rgba(255,102,0,0.42)_28%,rgba(255,102,0,0.22)_52%,rgba(255,102,0,0.08)_72%,rgba(255,102,0,0)_100%)]" />
                          {/* Фото поверх градієнтів; текст у сусідньому блоці z-10 — поверх */}
                          <Image
                            src="/images/automation-bg.png"
                            alt=""
                            fill
                            sizes="383px"
                            className="pointer-events-none object-cover object-center"
                            aria-hidden
                          />
                        </>
                      ) : (
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          sizes="383px"
                          className="pointer-events-none object-cover object-center"
                        />
                      )}
                    </div>

                    {!isOddCard && (
                      <div className="pointer-events-none absolute inset-[15px] rounded-[20px] bg-black/35" />
                    )}

                    <div className="relative z-10 flex h-full flex-col justify-between p-[30px]">
                      {isOddCard ? (
                        <>
                          <p className="text-body-xl leading-[30px] font-medium text-neutral-50">
                            {card.quote}
                          </p>

                          <div className="flex items-center gap-3">
                            <Image
                              src={avatarSrc}
                              alt={card.name}
                              width={41}
                              height={41}
                              className="h-[41px] w-[41px] rounded-full object-cover"
                            />
                            <div>
                              <p className="text-body-md leading-6 font-medium text-neutral-50">
                                {card.name}
                              </p>
                              <p
                                className={`text-body-sm leading-6 font-regular ${
                                  card.roleClassName ?? "text-neutral-100"
                                }`}
                              >
                                {card.role}
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <p className="text-body-xl leading-6 font-semibold text-[#D9D2D2]">
                              {card.name}
                            </p>
                            <p className="text-body-xl leading-6 font-regular text-[#D9D2D2]">
                              {card.role}
                            </p>
                          </div>

                          <p className="text-body-xl leading-[30px] font-medium text-neutral-50">
                            {card.quote}
                          </p>
                        </>
                      )}
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
