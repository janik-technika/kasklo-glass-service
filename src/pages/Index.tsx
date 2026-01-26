import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RepairInfo from "@/components/RepairInfo";
import MobileService from "@/components/MobileService";
import InsuranceInfo from "@/components/InsuranceInfo";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <RepairInfo />
      <MobileService />
      <InsuranceInfo />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;