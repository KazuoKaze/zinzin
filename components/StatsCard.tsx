import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  gradient: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  gradient,
}: StatsCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div
          className={`p-2.5 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}
        >
          <Icon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="flex items-center text-xs">
          <TrendingUp className="h-3 w-3 mr-1 text-chart-2" />
          <span className="text-chart-2 font-medium">{change}</span>
          <span className="text-muted-foreground ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
