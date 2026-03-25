import { TrendingUp } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import { Badge } from "@/components/ui/badge";

const MOCK_STOCKS = [
  { symbol: "AAPL", name: "Apple", price: "189.30", change: "+1.2%" },
  { symbol: "MSFT", name: "Microsoft", price: "415.20", change: "+0.8%" },
  { symbol: "GOOGL", name: "Alphabet", price: "175.50", change: "-0.3%" },
  { symbol: "TSLA", name: "Tesla", price: "248.80", change: "+2.1%" },
];

export function StockWidget() {
  return (
    <WidgetCard title="Stock Watchlist" icon={TrendingUp}>
      <div className="space-y-3">
        {MOCK_STOCKS.map((stock) => (
          <div key={stock.symbol} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{stock.symbol}</p>
              <p className="text-xs text-muted-foreground">{stock.name}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">${stock.price}</p>
              <Badge
                variant={stock.change.startsWith("+") ? "default" : "destructive"}
                className="text-xs"
              >
                {stock.change}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
