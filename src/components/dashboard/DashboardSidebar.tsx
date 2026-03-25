import Link from "next/link";
import { BarChart2, TrendingUp, Bitcoin, Gem, Trophy, Newspaper, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Stocks", href: "/dashboard", icon: TrendingUp },
  { label: "Crypto", href: "/dashboard", icon: Bitcoin },
  { label: "Gold & Metals", href: "/dashboard", icon: Gem },
  { label: "Cricket", href: "/dashboard", icon: Trophy },
  { label: "News", href: "/dashboard", icon: Newspaper },
];

export function DashboardSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 min-h-screen border-r bg-card px-3 py-4">
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-2 px-3 mb-6">
        <BarChart2 className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">PulseBoard</span>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Phase badge */}
      <div className="mt-auto px-3">
        <div className="rounded-md bg-primary/10 px-3 py-2 text-xs text-primary font-medium">
          Phase 1 — Mock Data
        </div>
      </div>
    </aside>
  );
}
