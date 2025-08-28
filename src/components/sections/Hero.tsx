import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Building, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-kenya-real-estate.jpg";

const Hero = () => {
  const stats = [
    { icon: Building, label: "Active Properties", value: "1,200+" },
    { icon: Users, label: "Registered Buyers", value: "800+" },
    { icon: TrendingUp, label: "Successful Matches", value: "350+" },
    { icon: MapPin, label: "Cities Covered", value: "15+" },
  ];

  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your Next
              <span className="block bg-gradient-to-r from-accent-red to-warning bg-clip-text text-transparent">
                Real Estate Deal
              </span>
              in Kenya
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Connect buyers with wholesale properties. Smart matching algorithm finds 
              the perfect properties for your buy box criteria across Kenya.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-lg px-8 py-6"
            >
              Start as Buyer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              List Properties
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground mb-2" />
                  <div className="text-2xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;