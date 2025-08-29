import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for new investors",
      price: "KES 2,500",
      period: "/month",
      icon: Zap,
      color: "info",
      popular: false,
      features: [
        "Up to 2 active home boxes",
        "Basic property matching",
        "Email notifications",
        "Standard support",
        "Mobile app access",
        "Basic market reports"
      ]
    },
    {
      name: "Professional", 
      description: "For serious investors",
      price: "KES 5,000",
      period: "/month",
      icon: Crown,
      color: "primary",
      popular: true,
      features: [
        "Up to 5 active home boxes",
        "Advanced AI matching",
        "Real-time notifications",
        "Priority support",
        "Advanced analytics",
        "Direct broker contact",
        "Market trend analysis",
        "Investment calculator"
      ]
    },
    {
      name: "Enterprise",
      description: "For real estate companies",
      price: "KES 15,000",
      period: "/month", 
      icon: Star,
      color: "warning",
      popular: false,
      features: [
        "Unlimited home boxes",
        "Custom matching algorithms",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "Team collaboration tools",
        "API access"
      ]
    }
  ];

  const brokerPlans = [
    {
      name: "Basic Broker",
      description: "Start listing properties",
      price: "KES 1,500",
      period: "/month",
      features: [
        "List up to 10 properties",
        "Basic property showcase", 
        "Lead notifications",
        "Standard support"
      ]
    },
    {
      name: "Pro Broker",
      description: "Grow your business",
      price: "KES 3,500", 
      period: "/month",
      popular: true,
      features: [
        "Unlimited property listings",
        "Premium showcase features",
        "Advanced lead management",
        "Priority placement",
        "Analytics dashboard",
        "Marketing tools"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/50 bg-primary/5";
      case "info":
        return "border-info/50 bg-info/5";
      case "warning":
        return "border-warning/50 bg-warning/5";
      default:
        return "border-border bg-card";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary bg-primary/10";
      case "info": 
        return "text-info bg-info/10";
      case "warning":
        return "text-warning bg-warning/10";
      default:
        return "text-foreground bg-muted";
    }
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent 
            <span className="block text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the perfect plan for your real estate investment journey. 
            All plans include M-Pesa payments and 24/7 customer support.
          </p>
        </div>

        {/* Buyer Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            For Property Buyers & Investors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative hover:shadow-card-premium transition-all duration-300 ${getColorClasses(plan.color)} ${
                  plan.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${getIconColor(plan.color)}`}>
                    <plan.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.popular ? "Start Free Trial" : "Choose Plan"}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Broker Plans */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            For Real Estate Brokers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brokerPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-card-premium transition-all duration-300 ${
                  plan.popular ? "border-primary/50 bg-primary/5 ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Recommended
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.popular ? "Start Free Trial" : "Choose Plan"}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <p className="text-sm text-muted-foreground">
            Plus 2.5% commission on successful property transactions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;