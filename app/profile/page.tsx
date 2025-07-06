"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Save,
  X,
  User,
  Store,
  Calendar,
  MapPin,
  Mail,
  Shield,
  Camera,
  Settings,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  // Mock admin data
  const [adminData, setAdminData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    joinDate: "January 2023",
    avatar: "",
    phone: "+1 (555) 123-4567",
    department: "Operations",
  });

  const [aboutData, setAboutData] = useState({
    storeName: "TechStore Pro",
    description:
      "A modern e-commerce platform specializing in cutting-edge technology products. We pride ourselves on delivering quality electronics and exceptional customer service to customers worldwide.",
    founded: "2020",
    location: "San Francisco, CA",
    website: "www.techstorepro.com",
    employees: "25-50",
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleSaveAbout = () => {
    setIsEditingAbout(false);
    // Here you would typically save to a backend
  };

  const stats = [
    { label: "Products Managed", value: "1,284", icon: Store },
    { label: "Orders Processed", value: "5,432", icon: Settings },
    { label: "Years Active", value: "4", icon: Calendar },
    { label: "Team Members", value: "12", icon: User },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="space-y-8 animate-fade-in p-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold gradient-text">Profile</h1> 
                <p className="text-muted-foreground text-lg mt-2">
                  Manage your admin profile and store information
                </p>
              </div>
              <div className="flex gap-3">
                {/* <Button variant="outline" size="lg" className="hover-lift">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button> */}
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="glass-card hover-lift border-0 shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-gradient-to-r from-chart-1 to-chart-2">
                        <stat.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Admin Profile Card */}
              <Card className="glass-card border-0 shadow-lg lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-chart-1 to-chart-2">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Admin Profile</CardTitle>
                      <CardDescription>
                        Your personal information and account details
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="hover-lift"
                  >
                    {isEditing ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Edit className="h-4 w-4" />
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <Avatar className="h-20 w-20 border-4 border-border">
                        <AvatarImage src={adminData.avatar} />
                        <AvatarFallback className="text-xl bg-gradient-to-r from-chart-1 to-chart-2 text-white">
                          {adminData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 hover-lift"
                        >
                          <Camera className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">
                          {adminData.name}
                        </h3>
                        <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/80 hover:to-chart-2/80">
                          <Shield className="h-3 w-3 mr-1" />
                          {adminData.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Joined {adminData.joinDate}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {adminData.department} Department
                      </p>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={adminData.name}
                            onChange={(e) =>
                              setAdminData({
                                ...adminData,
                                name: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={adminData.email}
                            onChange={(e) =>
                              setAdminData({
                                ...adminData,
                                email: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={adminData.phone}
                            onChange={(e) =>
                              setAdminData({
                                ...adminData,
                                phone: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Input
                            id="department"
                            value={adminData.department}
                            onChange={(e) =>
                              setAdminData({
                                ...adminData,
                                department: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                      </div>
                      <Button
                        onClick={handleSaveProfile}
                        className="w-full hover-lift bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/80 hover:to-chart-2/80"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                          <Label className="text-sm font-medium flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email Address
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {adminData.email}
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                          <Label className="text-sm font-medium">
                            Department
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {adminData.department}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                          <Label className="text-sm font-medium">
                            Phone Number
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {adminData.phone}
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                          <Label className="text-sm font-medium">Role</Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {adminData.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* About Store Card */}
              <Card className="glass-card border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-chart-3 to-chart-4">
                      <Store className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Store Info</CardTitle>
                      <CardDescription>Business details</CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditingAbout(!isEditingAbout)}
                    className="hover-lift"
                  >
                    {isEditingAbout ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Edit className="h-4 w-4" />
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditingAbout ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="storeName">Store Name</Label>
                        <Input
                          id="storeName"
                          value={aboutData.storeName}
                          onChange={(e) =>
                            setAboutData({
                              ...aboutData,
                              storeName: e.target.value,
                            })
                          }
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={aboutData.description}
                          onChange={(e) =>
                            setAboutData({
                              ...aboutData,
                              description: e.target.value,
                            })
                          }
                          rows={4}
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="founded">Founded</Label>
                          <Input
                            id="founded"
                            value={aboutData.founded}
                            onChange={(e) =>
                              setAboutData({
                                ...aboutData,
                                founded: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={aboutData.location}
                            onChange={(e) =>
                              setAboutData({
                                ...aboutData,
                                location: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            value={aboutData.website}
                            onChange={(e) =>
                              setAboutData({
                                ...aboutData,
                                website: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employees">Team Size</Label>
                          <Input
                            id="employees"
                            value={aboutData.employees}
                            onChange={(e) =>
                              setAboutData({
                                ...aboutData,
                                employees: e.target.value,
                              })
                            }
                            className="bg-secondary/50"
                          />
                        </div>
                      </div>
                      <Button
                        onClick={handleSaveAbout}
                        className="w-full hover-lift bg-gradient-to-r from-chart-3 to-chart-4 hover:from-chart-3/80 hover:to-chart-4/80"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg gradient-text">
                          {aboutData.storeName}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {aboutData.description}
                        </p>
                      </div>
                      <div className="space-y-3 pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium">Founded</Label>
                          <p className="text-sm text-muted-foreground">
                            {aboutData.founded}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Location
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {aboutData.location}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium">Website</Label>
                          <p className="text-sm text-muted-foreground">
                            {aboutData.website}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium">
                            Team Size
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {aboutData.employees}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
