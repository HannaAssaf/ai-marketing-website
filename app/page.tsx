import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BrandsLine from "@/components/sections/BrandsLine";
import Features from "@/components/sections/Features";
import Automation from "@/components/sections/Automation";
import Capabilites from "@/components/sections/Capabilites";
import Testimonial from "@/components/sections/Testimonial";
import Pricing from "@/components/sections/Pricing";
import Benefits from "@/components/sections/Benefits";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandsLine />
      <Features />
      <Automation />
      <Benefits />
      <Capabilites />
      <Testimonial />
      <Pricing />
      <Footer />
    </main>
  );
}