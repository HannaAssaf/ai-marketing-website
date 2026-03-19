import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

type StatisticItem = {
  id: string;
  value: string;
  title: string;
  description: string;
};

const statistics: StatisticItem[] = [
  {
    id: "lead-conversion",
    value: "+200%",
    title: "Lead Conversion Rate",
    description: "Clients experience over double in just two months.",
  },
  {
    id: "response-times",
    value: "95%",
    title: "Faster Response Times",
    description: "Automations cut lead follow-up times by over 90%.",
  },
  {
    id: "revenue-per-client",
    value: "3X",
    title: "More Revenue per Client",
    description: "Better nurturing means customers spend more.",
  },
  {
    id: "businesses-trust-us",
    value: "500%",
    title: "Businesses Trust Us",
    description: "Our platform fuels growth for businesses of all sizes.",
  },
];

export default function Statistic() {
  return (
    <section id="statistic" className="py-16 xl:py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto w-fit rounded-full border border-[#2A323D] bg-black/80 px-3 py-1">
            <p className="text-body-sm leading-6 font-regular text-neutral-100">
              Our statistics
            </p>
          </div>

          <SectionHeading level="h2" className="mx-auto mt-3 text-center">
            Proven results you can measure
          </SectionHeading>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
            {statistics.map((item) => (
              <li
                key={item.id}
                className="w-full rounded-[16px] border border-[#2A323D] bg-cover bg-right-bottom bg-no-repeat p-6"
                style={{
                  backgroundImage:
                    "url('/images/statistic-bg.png')",
                }}
              >
                <p className="font-heading text-[40px] leading-[44px] font-bold tracking-[-0.03em] text-neutral-50">
                  {item.value}
                </p>
                <p className="mt-6 text-body-md leading-6 font-medium text-neutral-50">
                  {item.title}
                </p>
                <p className="mt-1 text-body-sm leading-6 font-regular text-neutral-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden xl:block">
            <ul className="grid grid-cols-4 gap-[10px]">
              {statistics.map((item) => (
                <li
                  key={item.id}
                  className="min-h-[279px] rounded-[14px] border border-[#2A323D] bg-cover bg-right-bottom bg-no-repeat px-6 py-6"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('/images/statistic-bg.png')",
                  }}
                >
                  <p className="font-heading text-[40px] leading-[44px] font-bold tracking-[-0.03em] text-neutral-50">
                    {item.value}
                  </p>
                  <p className="mt-6 text-body-md leading-6 font-medium text-neutral-50">
                    {item.title}
                  </p>
                  <p className="mt-1 text-body-sm leading-6 font-regular text-neutral-300">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
