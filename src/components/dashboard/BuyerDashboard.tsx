import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Plus, 
  Home, 
  MapPin, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Bell,
  Filter,
  Heart
} from "lucide-react";

const BuyerDashboard = () => {
  const homeBoxes = [
    {
      id: 1,
      location: "Nairobi CBD",
      budgetMin: 2500000,
      budgetMax: 4000000,
      propertyType: "Apartment",
      condition: "Move-in Ready",
      matches: 12,
      created: "2 days ago"
    },
    {
      id: 2,
      location: "Westlands",
      budgetMin: 5000000,
      budgetMax: 8000000,
      propertyType: "Townhouse",
      condition: "Any",
      matches: 7,
      created: "1 week ago"
    }
  ];

  const recentMatches = [
    {
      id: 1,
      title: "Modern 3BR Apartment",
      location: "Kilimani, Nairobi",
      price: 3500000,
      image: "/placeholder-property.jpg",
      broker: "Sarah Mwangi",
      matchScore: 95,
      isNew: true
    },
    {
      id: 2,
      title: "Spacious 2BR Flat",
      location: "Westlands, Nairobi",
      price: 2800000,
      image: "/placeholder-property.jpg",
      broker: "John Kamau",
      matchScore: 88,
      isNew: true
    },
    {
      id: 3,
      title: "Executive Townhouse",
      location: "Karen, Nairobi",
      price: 7500000,
      image: "/placeholder-property.jpg",
      broker: "Grace Wanjiku",
      matchScore: 92,
      isNew: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, David! 👋
            </h2>
            <p className="text-muted-foreground">
              You have 19 new property matches waiting for you
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="default">
              <Plus className="w-4 h-4 mr-2" />
              New Home Box
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Active Home Boxes</p>
                <p className="text-2xl font-bold text-foreground">5</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Matches</p>
                <p className="text-2xl font-bold text-foreground">43</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-success" />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Saved Properties</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-warning" />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Portfolio Value</p>
                <p className="text-2xl font-bold text-foreground">{formatPrice(12500000)}</p>
              </div>
              <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-info" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Buy Boxes Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Your Home Boxes</h3>
              <Button variant="ghost" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {homeBoxes.map((box) => (
                <Card key={box.id} className="p-4 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{box.location}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {box.matches} matches
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{formatPrice(box.budgetMin)} - {formatPrice(box.budgetMax)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4" />
                      <span>{box.propertyType} • {box.condition}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Created {box.created}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Matches Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Matches</h3>
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="space-y-4">
              {recentMatches.map((property) => (
                <Card key={property.id} className="p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                      <Home className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            {property.title}
                            {property.isNew && (
                              <Badge variant="destructive" className="text-xs">New</Badge>
                            )}
                          </h4>
                          <p className="text-muted-foreground text-sm flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {property.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-foreground">
                            {formatPrice(property.price)}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {property.matchScore}% match
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Listed by {property.broker}
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="default">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Contact Broker
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerDashboard;