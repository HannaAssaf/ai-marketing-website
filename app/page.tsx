import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}