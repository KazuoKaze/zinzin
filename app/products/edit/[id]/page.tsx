// "use client";

// import { useState, useEffect } from "react";
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
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import {
//   Upload,
//   X,
//   Plus,
//   Save,
//   AlertCircle,
//   ArrowLeft,
//   ImageIcon,
// } from "lucide-react";
// import Link from "next/link";

// interface ProductFormData {
//   name: string;
//   description: string;
//   price: string;
//   category: string;
//   stock: string;
//   sku: string;
//   tags: string[];
//   images: string[];
// }

// const categories = [
//   "Electronics",
//   "Sports",
//   "Home",
//   "Fashion",
//   "Books",
//   "Toys",
//   "Beauty",
//   "Automotive",
// ];

// // Mock data - in a real app, this would come from an API
// const mockProduct = {
//   id: 1,
//   name: "Wireless Headphones",
//   description: "High-quality wireless headphones with noise cancellation",
//   price: "99.99",
//   category: "Electronics",
//   stock: "45",
//   sku: "WH-001",
//   tags: ["wireless", "audio", "electronics"],
//   images: [],
// };

// export default function EditProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const [formData, setFormData] = useState<ProductFormData>({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     stock: "",
//     sku: "",
//     tags: [],
//     images: [],
//   });

//   const [newTag, setNewTag] = useState("");
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading product data
//     const loadProduct = async () => {
//       setIsLoading(true);
//       // In a real app, you would fetch the product by params.id
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       setFormData(mockProduct);
//       setIsLoading(false);
//     };

//     loadProduct();
//   }, [params.id]);

//   const handleInputChange = (field: keyof ProductFormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const addTag = () => {
//     if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
//       setFormData((prev) => ({
//         ...prev,
//         tags: [...prev.tags, newTag.trim()],
//       }));
//       setNewTag("");
//     }
//   };

//   const removeTag = (tagToRemove: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Product name is required";
//     }
//     if (!formData.description.trim()) {
//       newErrors.description = "Description is required";
//     }
//     if (
//       !formData.price ||
//       isNaN(Number(formData.price)) ||
//       Number(formData.price) <= 0
//     ) {
//       newErrors.price = "Valid price is required";
//     }
//     if (!formData.category) {
//       newErrors.category = "Category is required";
//     }
//     if (
//       !formData.stock ||
//       isNaN(Number(formData.stock)) ||
//       Number(formData.stock) < 0
//     ) {
//       newErrors.stock = "Valid stock quantity is required";
//     }
//     if (!formData.sku.trim()) {
//       newErrors.sku = "SKU is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     setIsSubmitting(false);

//     // Show success message (in a real app, you'd use a toast or notification)
//     alert("Product updated successfully!");
//   };

//   if (isLoading) {
//     return (
//       <SidebarProvider>
//         <AppSidebar />
//         <SidebarInset>
//           <header className="flex h-16 shrink-0 items-center gap-2">
//             <div className="flex items-center gap-2 px-4">
//               <SidebarTrigger className="-ml-1" />
//               <Separator
//                 orientation="vertical"
//                 className="mr-2 data-[orientation=vertical]:h-4"
//               />
//               <Breadcrumb>
//                 <BreadcrumbList>
//                   <BreadcrumbItem>
//                     <BreadcrumbPage>Loading...</BreadcrumbPage>
//                   </BreadcrumbItem>
//                 </BreadcrumbList>
//               </Breadcrumb>
//             </div>
//           </header>
//           <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//             <div className="space-y-8 animate-fade-in">
//               <div className="flex items-center justify-center py-12">
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-chart-1"></div>
//               </div>
//             </div>
//           </div>
//         </SidebarInset>
//       </SidebarProvider>
//     );
//   }

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
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="/products">Products</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Edit Product</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="space-y-8 animate-fade-in p-4">
//             {/* Header */}
//             <div className="flex items-center gap-4">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="hover-lift"
//                 asChild
//               >
//                 <Link href="/products">
//                   <ArrowLeft className="h-4 w-4" />
//                 </Link>
//               </Button>
//               <div>
//                 <h1 className="text-4xl font-bold gradient-text">
//                   Edit Product
//                 </h1>
//                 <p className="text-muted-foreground text-lg mt-2">
//                   Update product information
//                 </p>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid gap-8 lg:grid-cols-3">
//                 {/* Main Form */}
//                 <div className="lg:col-span-2 space-y-6">
//                   {/* Basic Information */}
//                   <Card className="glass-card border-0 shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-xl">
//                         Basic Information
//                       </CardTitle>
//                       <CardDescription>
//                         Essential details about your product
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="name">Product Name *</Label>
//                         <Input
//                           id="name"
//                           value={formData.name}
//                           onChange={(e) =>
//                             handleInputChange("name", e.target.value)
//                           }
//                           placeholder="Enter product name"
//                           className={errors.name ? "border-destructive" : ""}
//                         />
//                         {errors.name && (
//                           <p className="text-sm text-destructive flex items-center gap-1">
//                             <AlertCircle className="h-3 w-3" />
//                             {errors.name}
//                           </p>
//                         )}
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="description">Description *</Label>
//                         <Textarea
//                           id="description"
//                           value={formData.description}
//                           onChange={(e) =>
//                             handleInputChange("description", e.target.value)
//                           }
//                           placeholder="Enter product description"
//                           rows={4}
//                           className={
//                             errors.description ? "border-destructive" : ""
//                           }
//                         />
//                         {errors.description && (
//                           <p className="text-sm text-destructive flex items-center gap-1">
//                             <AlertCircle className="h-3 w-3" />
//                             {errors.description}
//                           </p>
//                         )}
//                       </div>

//                       <div className="grid gap-4 md:grid-cols-2">
//                         <div className="space-y-2">
//                           <Label htmlFor="category">Category *</Label>
//                           <Select
//                             value={formData.category}
//                             onValueChange={(value) =>
//                               handleInputChange("category", value)
//                             }
//                           >
//                             <SelectTrigger
//                               className={
//                                 errors.category ? "border-destructive" : ""
//                               }
//                             >
//                               <SelectValue placeholder="Select a category" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               {categories.map((category) => (
//                                 <SelectItem key={category} value={category}>
//                                   {category}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                           {errors.category && (
//                             <p className="text-sm text-destructive flex items-center gap-1">
//                               <AlertCircle className="h-3 w-3" />
//                               {errors.category}
//                             </p>
//                           )}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="sku">SKU *</Label>
//                           <Input
//                             id="sku"
//                             value={formData.sku}
//                             onChange={(e) =>
//                               handleInputChange("sku", e.target.value)
//                             }
//                             placeholder="Enter SKU"
//                             className={errors.sku ? "border-destructive" : ""}
//                           />
//                           {errors.sku && (
//                             <p className="text-sm text-destructive flex items-center gap-1">
//                               <AlertCircle className="h-3 w-3" />
//                               {errors.sku}
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Pricing and Inventory */}
//                   <Card className="glass-card border-0 shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-xl">
//                         Pricing & Inventory
//                       </CardTitle>
//                       <CardDescription>
//                         Set your product price and stock levels
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="grid gap-4 md:grid-cols-2">
//                         <div className="space-y-2">
//                           <Label htmlFor="price">Price ($) *</Label>
//                           <Input
//                             id="price"
//                             type="number"
//                             step="0.01"
//                             value={formData.price}
//                             onChange={(e) =>
//                               handleInputChange("price", e.target.value)
//                             }
//                             placeholder="0.00"
//                             className={errors.price ? "border-destructive" : ""}
//                           />
//                           {errors.price && (
//                             <p className="text-sm text-destructive flex items-center gap-1">
//                               <AlertCircle className="h-3 w-3" />
//                               {errors.price}
//                             </p>
//                           )}
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="stock">Stock Quantity *</Label>
//                           <Input
//                             id="stock"
//                             type="number"
//                             value={formData.stock}
//                             onChange={(e) =>
//                               handleInputChange("stock", e.target.value)
//                             }
//                             placeholder="0"
//                             className={errors.stock ? "border-destructive" : ""}
//                           />
//                           {errors.stock && (
//                             <p className="text-sm text-destructive flex items-center gap-1">
//                               <AlertCircle className="h-3 w-3" />
//                               {errors.stock}
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Tags */}
//                   <Card className="glass-card border-0 shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-xl">Tags</CardTitle>
//                       <CardDescription>
//                         Add tags to help organize your products
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="flex gap-2">
//                         <Input
//                           value={newTag}
//                           onChange={(e) => setNewTag(e.target.value)}
//                           placeholder="Add a tag"
//                           onKeyPress={(e) =>
//                             e.key === "Enter" && (e.preventDefault(), addTag())
//                           }
//                         />
//                         <Button
//                           type="button"
//                           onClick={addTag}
//                           variant="outline"
//                           className="hover-lift"
//                         >
//                           <Plus className="h-4 w-4" />
//                         </Button>
//                       </div>
//                       {formData.tags.length > 0 && (
//                         <div className="flex flex-wrap gap-2">
//                           {formData.tags.map((tag) => (
//                             <Badge
//                               key={tag}
//                               variant="secondary"
//                               className="flex items-center gap-1"
//                             >
//                               {tag}
//                               <button
//                                 type="button"
//                                 onClick={() => removeTag(tag)}
//                                 className="ml-1 hover:text-destructive"
//                               >
//                                 <X className="h-3 w-3" />
//                               </button>
//                             </Badge>
//                           ))}
//                         </div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </div>

//                 {/* Sidebar */}
//                 <div className="space-y-6">
//                   {/* Image Upload */}
//                   <Card className="glass-card border-0 shadow-lg">
//                     <CardHeader>
//                       <CardTitle className="text-xl">Product Images</CardTitle>
//                       <CardDescription>Upload product images</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
//                         <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
//                           <ImageIcon className="h-10 w-10 text-muted-foreground mb-4" />
//                           <h3 className="font-semibold">
//                             Upload product images
//                           </h3>
//                           <p className="text-sm text-muted-foreground mt-2">
//                             Drag and drop your images here, or click to browse
//                           </p>
//                           <Button
//                             type="button"
//                             variant="outline"
//                             className="mt-4 hover-lift"
//                           >
//                             <Upload className="h-4 w-4 mr-2" />
//                             Choose Files
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Action Buttons */}
//                   <Card className="glass-card border-0 shadow-lg">
//                     <CardContent className="p-6">
//                       <div className="space-y-4">
//                         <Button
//                           type="submit"
//                           className="w-full hover-lift bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/80 hover:to-chart-2/80"
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? (
//                             <>
//                               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                               Updating Product...
//                             </>
//                           ) : (
//                             <>
//                               <Save className="h-4 w-4 mr-2" />
//                               Update Product
//                             </>
//                           )}
//                         </Button>
//                         <Button
//                           type="button"
//                           variant="outline"
//                           className="w-full hover-lift"
//                           asChild
//                         >
//                           <Link href="/products">Cancel</Link>
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </form>
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";

import {
  Upload,
  X,
  Plus,
  Save,
  AlertCircle,
  ArrowLeft,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";

interface ProductFormData {
  name: string;
  description: string;
  shortDescription: string;
  specifications: string;
  price: string;
  category: string;
  stock: string;
  sku: string;
  tags: string[];
  images: string[];
}

const categories = [
  "Electronics",
  "Sports",
  "Home & Garden",
  "Fashion & Apparel",
  "Books & Media",
  "Toys & Games",
  "Beauty & Personal Care",
  "Automotive",
  "Health & Wellness",
  "Office Supplies",
];

export default function AddProduct() {
  // const { toast } = useToast();
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    shortDescription: "",
    specifications: "",
    price: "",
    category: "",
    stock: "",
    sku: "",
    tags: [],
    images: [],
  });

  const [newTag, setNewTag] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ProductFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = "Short description is required";
    }
    if (!formData.specifications.trim()) {
      newErrors.specifications = "Specifications are required";
    }
    if (
      !formData.price ||
      isNaN(Number(formData.price)) ||
      Number(formData.price) <= 0
    ) {
      newErrors.price = "Valid price is required";
    }
    if (!formData.category) {
      newErrors.category = "Category is required";
    }
    if (
      !formData.stock ||
      isNaN(Number(formData.stock)) ||
      Number(formData.stock) < 0
    ) {
      newErrors.stock = "Valid stock quantity is required";
    }
    if (!formData.sku.trim()) {
      newErrors.sku = "SKU is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // toast({
      //   title: "Validation Error",
      //   description: "Please fill in all required fields correctly.",
      //   variant: "destructive",
      // });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form after successful submission
      setFormData({
        name: "",
        description: "",
        shortDescription: "",
        specifications: "",
        price: "",
        category: "",
        stock: "",
        sku: "",
        tags: [],
        images: [],
      });

      // toast({
      //   title: "Success!",
      //   description: "Product added successfully to your inventory.",
      // });
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Something went wrong. Please try again.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link href="/">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link href="/products">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Add Product</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 transition-all hover:scale-105"
              asChild
            >
              <Link href="/products">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Add New Product
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Create a new product for your inventory management system
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Main Form - Takes up more space on large screens */}
              <div className="lg:col-span-8 space-y-6">
                {/* Basic Information */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                      Basic Information
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Essential details about your product
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Product Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Enter product name"
                          className={`transition-all ${
                            errors.name
                              ? "border-destructive ring-destructive"
                              : "focus:ring-2 focus:ring-blue-500"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sku" className="text-sm font-medium">
                          SKU *
                        </Label>
                        <Input
                          id="sku"
                          value={formData.sku}
                          onChange={(e) =>
                            handleInputChange("sku", e.target.value)
                          }
                          placeholder="Enter SKU (e.g., PRD-001)"
                          className={`transition-all ${
                            errors.sku
                              ? "border-destructive ring-destructive"
                              : "focus:ring-2 focus:ring-blue-500"
                          }`}
                        />
                        {errors.sku && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.sku}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="shortDescription"
                        className="text-sm font-medium"
                      >
                        Short Description *
                      </Label>
                      <Textarea
                        id="shortDescription"
                        value={formData.shortDescription}
                        onChange={(e) =>
                          handleInputChange("shortDescription", e.target.value)
                        }
                        placeholder="Brief description for product listings (1-2 sentences)"
                        rows={2}
                        className={`transition-all resize-none ${
                          errors.shortDescription
                            ? "border-destructive ring-destructive"
                            : "focus:ring-2 focus:ring-blue-500"
                        }`}
                      />
                      {errors.shortDescription && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.shortDescription}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="description"
                        className="text-sm font-medium"
                      >
                        Detailed Description *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        placeholder="Comprehensive product description with features and benefits"
                        rows={4}
                        className={`transition-all resize-none ${
                          errors.description
                            ? "border-destructive ring-destructive"
                            : "focus:ring-2 focus:ring-blue-500"
                        }`}
                      />
                      {errors.description && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="specifications"
                        className="text-sm font-medium"
                      >
                        Technical Specifications *
                      </Label>
                      <Textarea
                        id="specifications"
                        value={formData.specifications}
                        onChange={(e) =>
                          handleInputChange("specifications", e.target.value)
                        }
                        placeholder="Technical details, dimensions, materials, compatibility, etc."
                        rows={4}
                        className={`transition-all resize-none ${
                          errors.specifications
                            ? "border-destructive ring-destructive"
                            : "focus:ring-2 focus:ring-blue-500"
                        }`}
                      />
                      {errors.specifications && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.specifications}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing and Inventory */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                      Pricing & Inventory
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Set your product price and manage stock levels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-sm font-medium">
                          Price (USD) *
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                            $
                          </span>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            value={formData.price}
                            onChange={(e) =>
                              handleInputChange("price", e.target.value)
                            }
                            placeholder="0.00"
                            className={`pl-8 transition-all ${
                              errors.price
                                ? "border-destructive ring-destructive"
                                : "focus:ring-2 focus:ring-green-500"
                            }`}
                          />
                        </div>
                        {errors.price && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.price}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="stock" className="text-sm font-medium">
                          Stock Quantity *
                        </Label>
                        <Input
                          id="stock"
                          type="number"
                          value={formData.stock}
                          onChange={(e) =>
                            handleInputChange("stock", e.target.value)
                          }
                          placeholder="0"
                          className={`transition-all ${
                            errors.stock
                              ? "border-destructive ring-destructive"
                              : "focus:ring-2 focus:ring-green-500"
                          }`}
                        />
                        {errors.stock && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.stock}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category *
                      </Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger
                          className={`transition-all ${
                            errors.category
                              ? "border-destructive ring-destructive"
                              : "focus:ring-2 focus:ring-green-500"
                          }`}
                        >
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.category}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                      Product Tags
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">
                      Add tags to help organize and categorize your products
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag (e.g., bestseller, new, sale)"
                        onKeyPress={(e) =>
                          e.key === "Enter" && (e.preventDefault(), addTag())
                        }
                        className="focus:ring-2 focus:ring-purple-500 transition-all"
                      />
                      <Button
                        type="button"
                        onClick={addTag}
                        variant="outline"
                        className="shrink-0 hover:bg-purple-50 hover:border-purple-300 transition-all"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="flex items-center gap-1 px-3 py-1 text-xs hover:bg-purple-100 transition-colors"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-1 hover:text-destructive transition-colors"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                {/* Image Upload */}
                <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/50 sticky top-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                      Product Images
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Upload high-quality product images
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-orange-300 hover:bg-orange-50/50 transition-all cursor-pointer group">
                      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                        <ImageIcon className="h-10 w-10 text-muted-foreground mb-4 group-hover:text-orange-500 transition-colors" />
                        <h3 className="font-semibold text-sm md:text-base">
                          Upload product images
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-2">
                          Drag and drop your images here, or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Supports JPG, PNG, WebP up to 10MB
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 hover:bg-orange-50 hover:border-orange-300 transition-all"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="w-full">
                    <div className="space-y-3 w-full">
                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] shadow-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Adding Product...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Save className="h-4 w-4" />
                            Add Product
                          </div>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full h-12 text-base font-medium hover:bg-gray-50 transition-all"
                        asChild
                      >
                        <Link href="/products">Cancel</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
