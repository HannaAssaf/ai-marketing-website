import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BrandsLine from "@/components/sections/BrandsLine";
import Features from "@/components/sections/Features";
import Automation from "@/components/sections/Automation";
import Capabilites from "@/components/sections/Capabilites";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandsLine />
      <Features />
      <Automation />
      <Capabilites />
      <Footer />
    </main>
  );
}