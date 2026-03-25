import { Gem } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import { Badge } from "@/components/ui/badge";

const MOCK_METALS = [
  { symbol: "XAU", name: "Gold", price: "2,345.60", unit: "oz", change: "+0.9%" },
  { symbol: "XAG", name: "Silver", price: "29.45", unit: "oz", change: "+1.3%" },
  { symbol: "XPT", name: "Platinum", price: "982.00", unit: "oz", change: "-0.2%" },
];

export function GoldWidget() {
  return (
    <WidgetCard title="Precious Metals" icon={Gem}>
      <div className="space-y-3">
        {MOCK_METALS.map((metal) => (
          <div key={metal.symbol} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{metal.name}</p>
              <p className="text-xs text-muted-foreground">per {metal.unit}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">${metal.price}</p>
              <Badge
                variant={metal.change.startsWith("+") ? "default" : "destructive"}
                className="text-xs"
              >
                {metal.change}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
