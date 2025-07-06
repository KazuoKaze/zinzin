// "use client";

// import { useState } from "react";
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
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Search,
//   MoreHorizontal,
//   Edit,
//   Eye,
//   Trash2,
//   Grid,
//   List,
//   Plus,
//   Filter,
// } from "lucide-react";
// import Link from "next/link";

// // Mock products data
// const mockProducts = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     category: "Electronics",
//     price: 99.99,
//     stock: 45,
//     status: "active",
//     image: "/api/placeholder/100/100",
//     description: "High-quality wireless headphones with noise cancellation",
//     addedDate: "2024-01-15",
//   },
//   {
//     id: 2,
//     name: "Running Shoes",
//     category: "Sports",
//     price: 129.99,
//     stock: 23,
//     status: "active",
//     image: "/api/placeholder/100/100",
//     description: "Comfortable running shoes for all terrains",
//     addedDate: "2024-01-14",
//   },
//   {
//     id: 3,
//     name: "Coffee Maker",
//     category: "Home",
//     price: 79.99,
//     stock: 12,
//     status: "low_stock",
//     image: "/api/placeholder/100/100",
//     description: "Automatic coffee maker with programmable timer",
//     addedDate: "2024-01-13",
//   },
//   {
//     id: 4,
//     name: "Smartphone Case",
//     category: "Electronics",
//     price: 24.99,
//     stock: 0,
//     status: "out_of_stock",
//     image: "/api/placeholder/100/100",
//     description: "Protective case for latest smartphone models",
//     addedDate: "2024-01-12",
//   },
//   {
//     id: 5,
//     name: "Yoga Mat",
//     category: "Sports",
//     price: 39.99,
//     stock: 67,
//     status: "active",
//     image: "/api/placeholder/100/100",
//     description: "Non-slip yoga mat for all types of exercises",
//     addedDate: "2024-01-11",
//   },
// ];

// export default function ProductsPage() {
//   const [products, setProducts] = useState(mockProducts);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState<"table" | "grid">("table");

//   const filteredProducts = products.filter(
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleDelete = (id: number) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const getStatusBadge = (status: string, stock: number) => {
//     if (status === "out_of_stock" || stock === 0) {
//       return <Badge variant="destructive">Out of Stock</Badge>;
//     }
//     if (status === "low_stock" || stock < 20) {
//       return <Badge variant="secondary">Low Stock</Badge>;
//     }
//     return <Badge className="bg-chart-2 hover:bg-chart-2/80">Active</Badge>;
//   };

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
//                   <BreadcrumbPage>Products</BreadcrumbPage>
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
//                 <h1 className="text-4xl font-bold gradient-text">Products</h1>
//                 <p className="text-muted-foregroun d text-lg mt-2">
//                   Manage your product inventory ({filteredProducts.length}{" "}
//                   products)
//                 </p>
//               </div>
//               <Button
//                 size="lg"
//                 className="hover-lift bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/80 hover:to-chart-2/80"
//                 asChild
//               >
//                 <Link href="/products/add">
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add Product
//                 </Link>
//               </Button>
//             </div>

//             {/* Filters and Search */}
//             <Card className="glass-card border-0 shadow-lg">
//               <CardContent className="p-6">
//                 <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//                   <div className=" items-center gap-4 w-full">
//                     <div className="relative flex-1 w-full">
//                       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         placeholder="Search products..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="pl-10 w-full"
//                       />
//                     </div>
//                     {/* <Button variant="outline" className="hover-lift">
//                       <Filter className="h-4 w-4 mr-2" />
//                       Filter
//                     </Button> */}
//                   </div>
//                   {/* <div className="flex items-center gap-2">
//                     <Button
//                       variant={viewMode === "table" ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setViewMode("table")}
//                       className="hover-lift"
//                     >
//                       <List className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant={viewMode === "grid" ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setViewMode("grid")}
//                       className="hover-lift"
//                     >
//                       <Grid className="h-4 w-4" />
//                     </Button>
//                   </div> */}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Products Display */}
//             <Card className="glass-card border-0 shadow-lg">
//               <CardContent className="p-6">
//                 {viewMode === "table" ? (
//                   <div className="rounded-lg border border-border overflow-hidden">
//                     <Table>
//                       <TableHeader>
//                         <TableRow className="bg-secondary/50">
//                           <TableHead className="font-semibold">
//                             Product
//                           </TableHead>
//                           <TableHead className="font-semibold">
//                             Category
//                           </TableHead>
//                           <TableHead className="font-semibold">Price</TableHead>
//                           <TableHead className="font-semibold">Stock</TableHead>
//                           <TableHead className="font-semibold">
//                             Status
//                           </TableHead>
//                           <TableHead className="text-right font-semibold">
//                             Actions
//                           </TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {filteredProducts.map((product) => (
//                           <TableRow
//                             key={product.id}
//                             className="hover:bg-secondary/30 transition-colors"
//                           >
//                             <TableCell className="font-medium">
//                               <div className="flex items-center gap-3">
//                                 <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-chart-1 to-chart-2 flex items-center justify-center">
//                                   <span className="text-white font-semibold">
//                                     {product.name.charAt(0)}
//                                   </span>
//                                 </div>
//                                 <div>
//                                   <div className="font-semibold">
//                                     {product.name}
//                                   </div>
//                                   <div className="text-sm text-muted-foreground">
//                                     {product.description.substring(0, 40)}...
//                                   </div>
//                                 </div>
//                               </div>
//                             </TableCell>
//                             <TableCell>
//                               <Badge variant="outline">
//                                 {product.category}
//                               </Badge>
//                             </TableCell>
//                             <TableCell className="font-semibold">
//                               ${product.price}
//                             </TableCell>
//                             <TableCell>{product.stock}</TableCell>
//                             <TableCell>
//                               {getStatusBadge(product.status, product.stock)}
//                             </TableCell>
//                             <TableCell className="text-right">
//                               <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                   <Button
//                                     variant="ghost"
//                                     className="h-8 w-8 p-0 hover-lift"
//                                   >
//                                     <span className="sr-only">Open menu</span>
//                                     <MoreHorizontal className="h-4 w-4" />
//                                   </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent
//                                   align="end"
//                                   className="glass-card"
//                                 >
//                                   <DropdownMenuItem>
//                                     <Eye className="mr-2 h-4 w-4" />
//                                     View
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem asChild>
//                                     <Link href={`/products/edit/${product.id}`}>
//                                       <Edit className="mr-2 h-4 w-4" />
//                                       Edit
//                                     </Link>
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem
//                                     className="text-destructive"
//                                     onClick={() => handleDelete(product.id)}
//                                   >
//                                     <Trash2 className="mr-2 h-4 w-4" />
//                                     Delete
//                                   </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                               </DropdownMenu>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </div>
//                 ) : (
//                   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                     {filteredProducts.map((product) => (
//                       <Card
//                         key={product.id}
//                         className="glass-card border-0 shadow-lg hover-lift overflow-hidden"
//                       >
//                         <div className="aspect-square bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
//                           <span className="text-4xl font-bold text-chart-1">
//                             {product.name.charAt(0)}
//                           </span>
//                         </div>
//                         <CardContent className="p-4">
//                           <div className="space-y-3">
//                             <div className="flex items-center justify-between">
//                               <h3 className="font-semibold text-lg">
//                                 {product.name}
//                               </h3>
//                               {getStatusBadge(product.status, product.stock)}
//                             </div>
//                             <p className="text-sm text-muted-foreground line-clamp-2">
//                               {product.description}
//                             </p>
//                             <div className="flex items-center justify-between">
//                               <span className="text-2xl font-bold gradient-text">
//                                 ${product.price}
//                               </span>
//                               <span className="text-sm text-muted-foreground">
//                                 Stock: {product.stock}
//                               </span>
//                             </div>
//                             <div className="flex gap-2 pt-2">
//                               <Button
//                                 variant="outline"
//                                 size="sm"
//                                 className="flex-1 hover-lift"
//                               >
//                                 <Eye className="h-4 w-4 mr-1" />
//                                 View
//                               </Button>
//                               <Button
//                                 variant="outline"
//                                 size="sm"
//                                 className="flex-1 hover-lift"
//                                 asChild
//                               >
//                                 <Link href={`/products/edit/${product.id}`}>
//                                   <Edit className="h-4 w-4 mr-1" />
//                                   Edit
//                                 </Link>
//                               </Button>
//                               <Button
//                                 variant="outline"
//                                 size="sm"
//                                 onClick={() => handleDelete(product.id)}
//                                 className="text-destructive hover:text-destructive hover-lift"
//                               >
//                                 <Trash2 className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }



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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Search,
  MoreHorizontal,
  Edit,
  Eye,
  Trash2,
  Plus,
  Filter,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 45,
    status: "active",
    image: "/api/placeholder/100/100",
    description: "High-quality wireless headphones with noise cancellation",
    addedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Sports",
    price: 129.99,
    stock: 23,
    status: "active",
    image: "/api/placeholder/100/100",
    description: "Comfortable running shoes for all terrains",
    addedDate: "2024-01-14",
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 12,
    status: "low_stock",
    image: "/api/placeholder/100/100",
    description: "Automatic coffee maker with programmable timer",
    addedDate: "2024-01-13",
  },
  {
    id: 4,
    name: "Smartphone Case",
    category: "Electronics",
    price: 24.99,
    stock: 0,
    status: "out_of_stock",
    image: "/api/placeholder/100/100",
    description: "Protective case for latest smartphone models",
    addedDate: "2024-01-12",
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Sports",
    price: 39.99,
    stock: 67,
    status: "active",
    image: "/api/placeholder/100/100",
    description: "Non-slip yoga mat for all types of exercises",
    addedDate: "2024-01-11",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 59.99,
    stock: 34,
    status: "active",
    description: "High-precision gaming mouse with RGB lighting",
    addedDate: "2024-01-10",
  },
  {
    id: 7,
    name: "Water Bottle",
    category: "Sports",
    price: 19.99,
    stock: 89,
    status: "active",
    description: "Insulated water bottle for sports activities",
    addedDate: "2024-01-09",
  },
  {
    id: 8,
    name: "Desk Lamp",
    category: "Home",
    price: 49.99,
    stock: 15,
    status: "low_stock",
    description: "LED desk lamp with adjustable brightness",
    addedDate: "2024-01-08",
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const itemsPerPage = 5;

  // Get unique categories and statuses for filters
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const statuses = Array.from(new Set(products.map((p) => p.status)));

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesStatus =
      selectedStatuses.length === 0 ||
      selectedStatuses.includes(product.status);

    const matchesPrice =
      !priceRange ||
      (product.price >= priceRange.min && product.price <= priceRange.max);

    return matchesSearch && matchesCategory && matchesStatus && matchesPrice;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const getStatusBadge = (status: string, stock: number) => {
    if (status === "out_of_stock" || stock === 0) {
      return <Badge variant="destructive">Out of Stock</Badge>;
    }
    if (status === "low_stock" || stock < 20) {
      return <Badge variant="secondary">Low Stock</Badge>;
    }
    return (
      <Badge className="bg-green-500 hover:bg-green-600 text-white">
        Active
      </Badge>
    );
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedStatuses([]);
    setPriceRange(null);
    setCurrentPage(1);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                  <BreadcrumbPage>Products</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Search and Filter in Navbar */}
          <div className="flex-1 flex items-center justify-end gap-2 px-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 w-full max-w-sm"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={selectedStatuses.includes("active")}
                  onCheckedChange={() => handleStatusFilter("active")}
                >
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedStatuses.includes("low_stock")}
                  onCheckedChange={() => handleStatusFilter("low_stock")}
                >
                  Low Stock
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedStatuses.includes("out_of_stock")}
                  onCheckedChange={() => handleStatusFilter("out_of_stock")}
                >
                  Out of Stock
                </DropdownMenuCheckboxItem>

                <DropdownMenuSeparator />

                <DropdownMenuLabel>Price Range</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => setPriceRange({ min: 0, max: 50 })}
                >
                  Under $50
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setPriceRange({ min: 50, max: 100 })}
                >
                  $50 - $100
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setPriceRange({ min: 100, max: 200 })}
                >
                  $100 - $200
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setPriceRange({ min: 200, max: 1000 })}
                >
                  Over $200
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={clearFilters}>
                  Clear Filters
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="space-y-6 animate-fade-in p-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Products
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mt-2">
                  Manage your product inventory ({filteredProducts.length}{" "}
                  products)
                </p>

                {/* Active Filters Display */}
                {(selectedCategories.length > 0 ||
                  selectedStatuses.length > 0 ||
                  priceRange) && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedCategories.map((category) => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="text-xs"
                      >
                        Category: {category}
                      </Badge>
                    ))}
                    {selectedStatuses.map((status) => (
                      <Badge
                        key={status}
                        variant="secondary"
                        className="text-xs"
                      >
                        Status: {status.replace("_", " ")}
                      </Badge>
                    ))}
                    {priceRange && (
                      <Badge variant="secondary" className="text-xs">
                        Price: ${priceRange.min} - ${priceRange.max}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                asChild
              >
                <Link href="/products/add">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Link>
              </Button>
            </div>

            {/* Products Table */}
            <Card className="border-0 ">
              <CardHeader>
                <CardTitle className="text-xl">Product Inventory</CardTitle>
                <CardDescription>
                  A complete list of all your products with advanced filtering
                  and pagination
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold p-4">
                          Product
                        </TableHead>
                        <TableHead className="font-semibold p-4">
                          Category
                        </TableHead>
                        <TableHead className="font-semibold p-4">
                          Price
                        </TableHead>
                        <TableHead className="font-semibold p-4">
                          Stock
                        </TableHead>
                        <TableHead className="font-semibold p-4">
                          Status
                        </TableHead>
                        <TableHead className="text-right font-semibold p-4">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedProducts.length === 0 ? (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            className="text-center py-8 text-muted-foreground"
                          >
                            No products found matching your criteria
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedProducts.map((product) => (
                          <TableRow
                            key={product.id}
                            className="hover:bg-muted/30 transition-colors"
                          >
                            <TableCell className="font-medium p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                                  <span className="text-white font-semibold text-sm sm:text-base">
                                    {product.name.charAt(0)}
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="font-semibold text-sm sm:text-base truncate">
                                    {product.name}
                                  </div>
                                  <div className="text-xs sm:text-sm text-muted-foreground truncate hidden sm:block">
                                    {product.description.substring(0, 40)}...
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {product.category}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold">
                              ${product.price}
                            </TableCell>
                            <TableCell>
                              <span
                                className={`font-medium ml-5 ${
                                  product.stock < 20
                                    ? "text-orange-600"
                                    : product.stock === 0
                                    ? "text-red-600"
                                    : "text-green-600"
                                }`}
                              >
                                {product.stock}
                              </span>
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(product.status, product.stock)}
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="h-8 w-8 p-0 hover:bg-muted transition-colors"
                                  >
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align="end"
                                  className="w-40"
                                >
                                  {/* <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </DropdownMenuItem> */}
                                  <DropdownMenuItem asChild>
                                    <Link href={`/products/edit/${product.id}`}>
                                      <Edit className="mr-2 h-4 w-4" />
                                      Edit Product
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-destructive focus:text-destructive"
                                    onClick={() => handleDelete(product.id)}
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between pt-4 w-full">
                    <div className=" text-sm text-muted-foreground">
                      Showing {startIndex + 1} to{" "}
                      {Math.min(
                        startIndex + itemsPerPage,
                        filteredProducts.length
                      )}{" "}
                      of {filteredProducts.length} products
                    </div>
                    <div className="ml-auto">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              onClick={() =>
                                setCurrentPage(Math.max(1, currentPage - 1))
                              }
                              className={
                                currentPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>

                          {[...Array(totalPages)].map((_, index) => {
                            const page = index + 1;
                            if (
                              page === 1 ||
                              page === totalPages ||
                              (page >= currentPage - 1 &&
                                page <= currentPage + 1)
                            ) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationLink
                                    onClick={() => setCurrentPage(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                  >
                                    {page}
                                  </PaginationLink>
                                </PaginationItem>
                              );
                            } else if (
                              page === currentPage - 2 ||
                              page === currentPage + 2
                            ) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationEllipsis />
                                </PaginationItem>
                              );
                            }
                            return null;
                          })}

                          <PaginationItem>
                            <PaginationNext
                              onClick={() =>
                                setCurrentPage(
                                  Math.min(totalPages, currentPage + 1)
                                )
                              }
                              className={
                                currentPage === totalPages
                                  ? "pointer-events-none opacity-50"
                                  : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
