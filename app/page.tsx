import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BrandsLine from "@/components/sections/BrandsLine";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandsLine />
      <Features />
      <Footer />
    </main>
  );
}