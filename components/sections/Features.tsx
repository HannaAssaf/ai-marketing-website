import Container from "../ui/Container";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  iconId: string;
};

const features: FeatureItem[] = [
  {
    id: "optimized-performance",
    title: "Optimized for Performance",
    description: "Your workflows execute in real time with zero delays",
    iconId: "optimized-feature",
  },
  {
    id: "connected-automations",
    title: "Connected Automations",
    description: "Create smart workflows that talk to each other.",
    iconId: "connected-feature",
  },
  {
    id: "mobile-control-hub",
    title: "Mobile Control Hub",
    description: "Manage and trigger automations on the go",
    iconId: "mobile-feature",
  },
  {
    id: "secure-automation",
    title: "Secure Automation",
    description: "Enterprise-grade protection for your data",
    iconId: "secure-feature",
  },
  {
    id: "schedule-automation",
    title: "Schedule Automation",
    description: "Automate meetings, reminders & time-based tasks",
    iconId: "schedule-feature",
  },
  {
    id: "workflow-sharing",
    title: "Workflow Sharing",
    description: "Share automation templates with one click",
    iconId: "workflow-feature",
  },
  {
    id: "instant-task-capture",
    title: "Instant Task Capture",
    description: "Turn ideas, actions, or incoming messages into automation",
    iconId: "instant-feature",
  },
  {
    id: "intelligent-search",
    title: "Intelligent Search",
    description: "Smart indexing lets you instantly recall past actions",
    iconId: "intelligent-feature",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-28 py-[130px]">
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="sr-only">Features</h2>
          <ul className="grid grid-cols-1 border-l border-t border-neutral-900 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="relative border-b border-r border-neutral-900 px-8 pb-9 pt-6"
              >
                <span className="pointer-events-none absolute left-0 top-[88px] h-4 w-px bg-primary-500" />
                <svg
                  aria-hidden="true"
                  className="h-10 w-10 text-neutral-50"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <use href={`/sprite.svg#${feature.iconId}`} />
                </svg>
                <div className="mt-5 flex flex-col gap-1">
                  <p className="text-body-md leading-6 font-medium text-neutral-50">
                    {feature.title}
                  </p>
                  <p className="text-body-md leading-6 font-regular text-neutral-300">
                    {feature.description}
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
