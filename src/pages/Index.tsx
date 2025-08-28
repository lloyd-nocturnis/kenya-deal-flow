import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import BuyerDashboard from "@/components/dashboard/BuyerDashboard";
import BrokerDashboard from "@/components/dashboard/BrokerDashboard";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <BuyerDashboard />
      <BrokerDashboard />
      <Footer />
    </div>
  );
};

export default Index;
