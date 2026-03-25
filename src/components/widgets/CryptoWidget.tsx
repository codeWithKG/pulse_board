import { Bitcoin } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import { Badge } from "@/components/ui/badge";

const MOCK_CRYPTO = [
  { symbol: "BTC", name: "Bitcoin", price: "67,420", change: "+3.4%" },
  { symbol: "ETH", name: "Ethereum", price: "3,520", change: "+1.8%" },
  { symbol: "BNB", name: "Binance Coin", price: "590", change: "-0.5%" },
  { symbol: "SOL", name: "Solana", price: "172", change: "+5.2%" },
];

export function CryptoWidget() {
  return (
    <WidgetCard title="Crypto Prices" icon={Bitcoin}>
      <div className="space-y-3">
        {MOCK_CRYPTO.map((coin) => (
          <div key={coin.symbol} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">{coin.symbol}</p>
              <p className="text-xs text-muted-foreground">{coin.name}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">${coin.price}</p>
              <Badge
                variant={coin.change.startsWith("+") ? "default" : "destructive"}
                className="text-xs"
              >
                {coin.change}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
