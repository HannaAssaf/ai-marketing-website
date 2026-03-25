import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden pb-24 pt-28 xl:pb-32 xl:pt-[150px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(237,95,0,0.22)_0%,rgba(254,2,240,0.08)_45%,transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-1/4 bottom-0 h-[380px] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(115,80,255,0.2)_0%,transparent_70%)] blur-3xl"
        />

        <Container>
          <div className="relative mx-auto flex max-w-[640px] flex-col items-center text-center">
            <p className="text-body-md font-medium uppercase tracking-[0.2em] text-neutral-400">
              Error
            </p>

            <p
              className="mt-4 font-heading text-[120px] font-bold leading-none tracking-[-0.04em] text-white xl:text-[160px] [text-shadow:0_0_60px_rgba(237,95,0,0.45),0_0_24px_rgba(254,2,240,0.25)]"
              aria-hidden
            >
              404
            </p>

            <h1 className="mt-6 font-heading text-[40px] leading-[46px] font-bold tracking-[-0.03em] text-primary-50 xl:text-[52px] xl:leading-[58px]">
              Page not found
            </h1>

            <p className="mt-4 max-w-[480px] text-body-md leading-6 font-regular text-neutral-100">
              The page you&apos;re looking for doesn&apos;t exist or was moved.
              Head back home or explore what AutoAI can do for your team.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/" variant="primary" size="sm" className="sm:min-w-[180px]">
                Back to home
              </Button>
              <Button
                href="/#features"
                variant="secondary"
                size="sm"
                className="sm:min-w-[180px]"
              >
                View features
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
