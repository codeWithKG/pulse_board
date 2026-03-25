import { StockWidget } from "@/components/widgets/StockWidget";
import { CryptoWidget } from "@/components/widgets/CryptoWidget";
import { GoldWidget } from "@/components/widgets/GoldWidget";
import { CricketWidget } from "@/components/widgets/CricketWidget";
import { NewsWidget } from "@/components/widgets/NewsWidget";

export const metadata = { title: "Dashboard | PulseBoard" };

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Prices, Scores, News — One Place
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <StockWidget />
        <CryptoWidget />
        <GoldWidget />
        <CricketWidget />
        <NewsWidget className="md:col-span-2 xl:col-span-1" />
      </div>
    </div>
  );
}
