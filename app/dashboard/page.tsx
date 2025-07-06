// import { AppSidebar } from "@/components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Package,
//   TrendingUp,
//   ShoppingCart,
//   Users,
//   DollarSign,
//   Eye,
//   Plus,
// } from "lucide-react";
// import Link from "next/link";

// // Mock data for demonstration
// const recentProducts = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     category: "Electronics",
//     price: 99.99,
//     addedDate: "2024-01-15",
//     sales: 45,
//   },
//   {
//     id: 2,
//     name: "Running Shoes",
//     category: "Sports",
//     price: 129.99,
//     addedDate: "2024-01-14",
//     sales: 32,
//   },
//   {
//     id: 3,
//     name: "Coffee Maker",
//     category: "Home",
//     price: 79.99,
//     addedDate: "2024-01-13",
//     sales: 28,
//   },
//   {
//     id: 4,
//     name: "Smartphone Case",
//     category: "Electronics",
//     price: 24.99,
//     addedDate: "2024-01-12",
//     sales: 67,
//   },
//   {
//     id: 5,
//     name: "Yoga Mat",
//     category: "Sports",
//     price: 39.99,
//     addedDate: "2024-01-11",
//     sales: 23,
//   },
// ];

// export default function Page() {
//   const stats = [
//     {
//       title: "Total Products",
//       value: "1,284",
//       change: "+12%",
//       icon: Package,
//       color: "from-chart-1 to-chart-2",
//     },
//     {
//       title: "Total Sales",
//       value: "$45,231",
//       change: "+8.2%",
//       icon: DollarSign,
//       color: "from-chart-2 to-chart-3",
//     },
//     {
//       title: "Orders",
//       value: "892",
//       change: "+15%",
//       icon: ShoppingCart,
//       color: "from-chart-3 to-chart-4",
//     },
//     {
//       title: "Customers",
//       value: "3,421",
//       change: "+5.4%",
//       icon: Users,
//       color: "from-chart-4 to-chart-5",
//     },
//   ];

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2">
//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />
//             <Separator
//               orientation="vertical"
//               className="mr-2 data-[orientation=vertical]:h-4"
//             />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Overview</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="space-y-8 animate-fade-in p-4">
//             {/* Header */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
//                 <p className="text-muted-foreground text-lg mt-2">
//                   Welcome back! Here's what's happening with your store today.
//                 </p>
//               </div>
//               <div className="flex gap-3">
//                 {/* <Button variant="outline" size="lg" className="hover-lift">
//                   <Eye className="h-4 w-4 mr-2" />
//                   View Store
//                 </Button> */}
//                 <Button
//                   size="lg"
//                   className="hover-lift bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/80 hover:to-chart-2/80"
//                   asChild
//                 >
//                   <Link href="/products/add">
//                     <Plus className="h-4 w-4 mr-2" />
//                     Add Product
//                   </Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <Card
//                   key={stat.title}
//                   className="glass-card hover-lift border-0 shadow-lg"
//                 >
//                   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                     <CardTitle className="text-sm font-medium text-muted-foreground">
//                       {stat.title}
//                     </CardTitle>
//                     <div
//                       className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}
//                     >
//                       <stat.icon className="h-4 w-4 text-white" />
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="text-2xl font-bold">{stat.value}</div>
//                     <div className="flex items-center text-xs text-muted-foreground">
//                       <TrendingUp className="h-3 w-3 mr-1 text-chart-2" />
//                       {stat.change} from last month
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Recent Products & Quick Actions */}
//             <div className="grid gap-6 lg:grid-cols-3">
//               {/* Recent Products */}
//               <Card className="glass-card border-0 shadow-lg lg:col-span-2">
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <CardTitle className="text-xl">Recent Products</CardTitle>
//                       <CardDescription>
//                         Latest products added to your inventory
//                       </CardDescription>
//                     </div>
//                     <Button variant="outline" asChild className="hover-lift">
//                       <Link href="/products">View All</Link>
//                     </Button>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {recentProducts.map((product) => (
//                       <div
//                         key={product.id}
//                         className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 border border-border"
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className="h-12 w-12 rounded-full bg-gradient-to-r from-chart-1 to-chart-2 flex items-center justify-center">
//                             <span className="text-white font-semibold">
//                               {product.name.charAt(0)}
//                             </span>
//                           </div>
//                           <div>
//                             <p className="font-medium text-sm">
//                               {product.name}
//                             </p>
//                             <p className="text-xs text-muted-foreground">
//                               {product.sales} sales • Added{" "}
//                               {new Date(product.addedDate).toLocaleDateString()}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <Badge variant="secondary" className="text-xs">
//                             {product.category}
//                           </Badge>
//                           <span className="font-semibold text-sm">
//                             ${product.price}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Quick Actions */}
//               <Card className="glass-card border-0 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="text-xl">Quick Actions</CardTitle>
//                   <CardDescription>Frequently used actions</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start hover-lift h-12"
//                     asChild
//                   >
//                     <Link href="/products/add">
//                       <Plus className="h-4 w-4 mr-3" />
//                       Add New Product
//                     </Link>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start hover-lift h-12"
//                     asChild
//                   >
//                     <Link href="/products">
//                       <Package className="h-4 w-4 mr-3" />
//                       Manage Products
//                     </Link>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start hover-lift h-12"
//                   >
//                     <ShoppingCart className="h-4 w-4 mr-3" />
//                     View Orders
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start hover-lift h-12"
//                   >
//                     <Users className="h-4 w-4 mr-3" />
//                     Manage Customers
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }




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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Package,
  TrendingUp,
  ShoppingCart,
  Users,
  DollarSign,
  Eye,
  Plus,
} from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const recentProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    addedDate: "2024-01-15",
    sales: 45,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Sports",
    price: 129.99,
    addedDate: "2024-01-14",
    sales: 32,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    addedDate: "2024-01-13",
    sales: 28,
  },
  {
    id: 4,
    name: "Smartphone Case",
    category: "Electronics",
    price: 24.99,
    addedDate: "2024-01-12",
    sales: 67,
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Sports",
    price: 39.99,
    addedDate: "2024-01-11",
    sales: 23,
  },
];

const Index = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,284",
      change: "+12%",
      icon: Package,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Total Sales",
      value: "$45,231",
      change: "+8.2%",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Orders",
      value: "892",
      change: "+15%",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Customers",
      value: "3,421",
      change: "+5.4%",
      icon: Users,
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
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
                      <BreadcrumbPage>Overview</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-2 sm:p-4 pt-0">
              <div className="space-y-6 sm:space-y-8 p-2 sm:p-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Dashboard
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mt-1 sm:mt-2">
                      Welcome back! Here's what's happening with your store
                      today.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      className="sm:size-default bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                      asChild
                    >
                      <Link href="/products/add">
                        <Plus className="h-4 w-4 mr-2" />
                        <span className="hidden xs:inline">Add Product</span>
                        <span className="xs:hidden">Add</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat, index) => (
                    <Card
                      key={stat.title}
                      className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                    >
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </CardTitle>
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}
                        >
                          <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                          {stat.value}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                          {stat.change} from last month
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Products & Quick Actions */}
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                  {/* Recent Products */}
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <CardTitle className="text-lg sm:text-xl">
                            Recent Products
                          </CardTitle>
                          <CardDescription className="text-xs sm:text-sm">
                            Latest products added to your inventory
                          </CardDescription>
                        </div>
                        <Button
                          variant="outline"
                          asChild
                          className="transition-all duration-200 hover:-translate-y-1 text-sm sm:text-base"
                        >
                          <Link href="/products">View All</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 sm:space-y-4">
                        {recentProducts.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 border border-border"
                          >
                            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                              <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-semibold text-xs sm:text-sm">
                                  {product.name.charAt(0)}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-medium text-xs sm:text-sm truncate">
                                  {product.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  <span className="hidden sm:inline">
                                    {product.sales} sales • Added{" "}
                                  </span>
                                  {new Date(
                                    product.addedDate
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-3 flex-shrink-0">
                              <Badge variant="secondary" className="text-xs">
                                {product.category}
                              </Badge>
                              <span className="font-semibold text-xs sm:text-sm">
                                ${product.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">
                        Quick Actions
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Frequently used actions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 sm:space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start transition-all duration-200 hover:-translate-y-1 h-10 sm:h-12 text-sm"
                        asChild
                      >
                        <Link href="/products/add">
                          <Plus className="h-4 w-4 mr-2 sm:mr-3" />
                          Add New Product
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start transition-all duration-200 hover:-translate-y-1 h-10 sm:h-12 text-sm"
                        asChild
                      >
                        <Link href="/products">
                          <Package className="h-4 w-4 mr-2 sm:mr-3" />
                          Manage Products
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start transition-all duration-200 hover:-translate-y-1 h-10 sm:h-12 text-sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2 sm:mr-3" />
                        View Orders
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start transition-all duration-200 hover:-translate-y-1 h-10 sm:h-12 text-sm"
                      >
                        <Users className="h-4 w-4 mr-2 sm:mr-3" />
                        Manage Customers
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
