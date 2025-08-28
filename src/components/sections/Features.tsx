import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Target, Zap, Shield, Users, TrendingUp, Phone, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Buy Box Matching",
      description: "Set your investment criteria and our algorithm finds properties that match your budget, location, and property type preferences.",
      color: "success"
    },
    {
      icon: Search,
      title: "Advanced Property Search",
      description: "Filter by location, price range, property condition, and investment potential across all major Kenyan cities.",
      color: "info"
    },
    {
      icon: Zap,
      title: "Real-Time Notifications",
      description: "Get instant alerts when new properties match your buy box criteria or when someone shows interest in your listing.",
      color: "warning"
    },
    {
      icon: Shield,
      title: "Verified Properties",
      description: "All properties are verified by our team. Every broker is vetted to ensure authenticity and professionalism.",
      color: "success"
    },
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with serious buyers, experienced brokers, and real estate professionals across Kenya.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Access real-time market data, price trends, and investment insights to make informed decisions.",
      color: "info"
    },
    {
      icon: Phone,
      title: "In-App Communication",
      description: "Secure messaging system to communicate with buyers and brokers. Schedule viewings and negotiate deals safely.",
      color: "accent-red"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "M-Pesa integration for subscription payments and commission handling. Transparent fee structure.",
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "success":
        return "bg-success/10 text-success border-success/20";
      case "info":
        return "bg-info/10 text-info border-info/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      case "accent-red":
        return "bg-accent-red/10 text-accent-red border-accent-red/20";
      case "primary":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block text-primary">Real Estate Success</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From smart matching to secure payments, Buy Box Cartel Kenya provides all the tools 
            you need to succeed in the real estate wholesale market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 h-full hover:shadow-card-premium transition-all duration-300 hover:-translate-y-1 card-premium"
            >
              <div className="flex flex-col h-full">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Real Estate Business?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful buyers and brokers already using Buy Box Cartel Kenya 
              to close more deals and grow their portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;