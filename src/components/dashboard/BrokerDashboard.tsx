import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Plus, 
  Upload, 
  Eye, 
  MessageSquare, 
  DollarSign, 
  Calendar,
  TrendingUp,
  Camera,
  MapPin,
  Users
} from "lucide-react";

const BrokerDashboard = () => {
  const properties = [
    {
      id: 1,
      title: "Modern 3BR Apartment",
      location: "Kilimani, Nairobi",
      price: 3500000,
      status: "Active",
      views: 45,
      inquiries: 12,
      matches: 8,
      listed: "3 days ago"
    },
    {
      id: 2,
      title: "Executive Townhouse",
      location: "Karen, Nairobi", 
      price: 7500000,
      status: "Under Review",
      views: 23,
      inquiries: 5,
      matches: 3,
      listed: "1 week ago"
    },
    {
      id: 3,
      title: "Spacious 2BR Flat",
      location: "Westlands, Nairobi",
      price: 2800000,
      status: "Active",
      views: 67,
      inquiries: 18,
      matches: 12,
      listed: "5 days ago"
    }
  ];

  const recentInquiries = [
    {
      id: 1,
      buyer: "David Kiprotich",
      property: "Modern 3BR Apartment",
      message: "I'm interested in viewing this property. When is the earliest...",
      time: "2 hours ago",
      isNew: true
    },
    {
      id: 2,
      buyer: "Grace Wanjiku",
      property: "Executive Townhouse",
      message: "Could you provide more details about the neighborhood and...",
      time: "5 hours ago",
      isNew: true
    },
    {
      id: 3,
      buyer: "John Mwangi",
      property: "Spacious 2BR Flat",
      message: "Is the asking price negotiable? I have a few questions...",
      time: "1 day ago",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "success";
      case "Under Review":
        return "warning";
      case "Sold":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Good morning, Sarah! 🏢
            </h2>
            <p className="text-muted-foreground">
              You have 15 new inquiries and 3 properties pending approval
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Add Photos
            </Button>
            <Button variant="default">
              <Plus className="w-4 h-4 mr-2" />
              List Property
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Active Listings</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Views</p>
                <p className="text-2xl font-bold text-foreground">1,247</p>
              </div>
              <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-info" />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">New Inquiries</p>
                <p className="text-2xl font-bold text-foreground">35</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-warning" />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Monthly Revenue</p>
                <p className="text-2xl font-bold text-foreground">{formatPrice(450000)}</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Your Properties</h3>
              <Button variant="ghost" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Bulk Upload
              </Button>
            </div>
            <div className="space-y-4">
              {properties.map((property) => (
                <Card key={property.id} className="p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            {property.title}
                            <Badge variant={getStatusColor(property.status) as any} className="text-xs">
                              {property.status}
                            </Badge>
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
                          <p className="text-xs text-muted-foreground">Listed {property.listed}</p>
                        </div>
                      </div>
                      
                      {/* Property Stats */}
                      <div className="grid grid-cols-3 gap-4 py-2">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Eye className="w-4 h-4 text-info" />
                            <span className="text-sm font-medium text-foreground">{property.views}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Views</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <MessageSquare className="w-4 h-4 text-warning" />
                            <span className="text-sm font-medium text-foreground">{property.inquiries}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Inquiries</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Users className="w-4 h-4 text-success" />
                            <span className="text-sm font-medium text-foreground">{property.matches}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Matches</p>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="default">
                          View Listing
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit Property
                        </Button>
                        <Button size="sm" variant="ghost">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Inquiries Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Inquiries</h3>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <Card key={inquiry.id} className="p-4 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground text-sm">
                          {inquiry.buyer}
                        </h4>
                        {inquiry.isNew && (
                          <Badge variant="destructive" className="text-xs px-1 py-0">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        Re: {inquiry.property}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {inquiry.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {inquiry.message}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" className="text-xs px-3 py-1">
                      Reply
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs px-3 py-1">
                      View
                    </Button>
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

export default BrokerDashboard;