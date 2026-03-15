import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Container>
        <Image
          src="/images/hero-background.png"
          alt=""
          width={740}
          height={680}
          priority
          className="pointer-events-none absolute right-0 top-0 select-none"
        />

        <div className="relative mx-auto w-full max-w-7xl pb-10 pt-32 xl:pb-24 xl:pt-[150px]">
          <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[547px_minmax(0,695px)] xl:justify-between">
            <div className="flex max-w-full flex-col gap-5 xl:max-w-[547px]">
              <h1 className="font-heading text-[52px] leading-[58px] font-bold tracking-[-0.03em] text-foreground xl:text-[64px] xl:leading-[72px]">
                <span className="text-white [text-shadow:0_0_80px_#ED5F00,0_0_20px_rgba(237,95,0,0.12),0_0_40px_#ED5F00,0_0_20px_#FE02F0,0_0_10px_#FE02F0]">
                  Automate
                </span>{" "}
                Your Business with Next-Level AI
              </h1>

              <p className="text-primary-50 text-body-md font-regular leading-normal xl:max-w-[513px] xl:text-body-lg xl:leading-[28px]">
                Let fully automated systems handle the busywork so your team can
                focus on high-impact growth.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href="#"
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Watch Demo
                </Button>
                <Button
                  href="#"
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  Start Creating Free
                </Button>
              </div>
            </div>

            <div className="relative w-full">
              <Image
                src="/images/hero-vertical-rectangle.png"
                alt=""
                width={160}
                height={550}
                className="pointer-events-none absolute -right-12 top-[-100px] hidden xl:block"
              />
              <Image
                src="/images/hero-vertical-rectangle2.png"
                alt=""
                width={160}
                height={550}
                className="pointer-events-none absolute -right-12 top-[-50px] hidden xl:block"
              />

              <div className="relative w-full overflow-hidden rounded-2xl ">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Product preview"
                  width={695}
                  height={466}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
