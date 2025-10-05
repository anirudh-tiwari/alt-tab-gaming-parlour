import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesAndGaming } from "@/components/FeaturesAndGaming";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <FeaturesAndGaming />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
