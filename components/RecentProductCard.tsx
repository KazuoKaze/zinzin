interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  addedDate: string;
  sales: number;
}

interface RecentProductCardProps {
  product: Product;
}

export function RecentProductCard({ product }: RecentProductCardProps) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 hover:border-border transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-chart-1 to-chart-2 flex items-center justify-center shadow-lg">
            <span className="text-white font-semibold text-sm">
              {product.name.charAt(0)}
            </span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-chart-2 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {product.sales}
            </span>
          </div>
        </div>

        <div>
          <p className="font-semibold text-foreground text-sm group-hover:text-chart-1 transition-colors">
            {product.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {product.category} • Added{" "}
            {new Date(product.addedDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-bold text-foreground">${product.price}</div>
          <div className="text-xs text-muted-foreground">
            {product.sales} sales
          </div>
        </div>
      </div>
    </div>
  );
}
