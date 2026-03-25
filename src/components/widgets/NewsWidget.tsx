import { Newspaper } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import { Badge } from "@/components/ui/badge";

const MOCK_NEWS = [
  {
    id: 1,
    title: "Fed signals two rate cuts possible in 2025 amid cooling inflation",
    source: "Reuters",
    category: "Markets",
    ago: "12m ago",
  },
  {
    id: 2,
    title: "India's GDP growth forecast raised to 7.2% for FY2025-26",
    source: "ET Markets",
    category: "Economy",
    ago: "45m ago",
  },
  {
    id: 3,
    title: "OpenAI announces GPT-5 release timeline for mid-2025",
    source: "TechCrunch",
    category: "Tech",
    ago: "1h ago",
  },
  {
    id: 4,
    title: "Oil prices slip as OPEC+ considers supply increase",
    source: "Bloomberg",
    category: "Energy",
    ago: "2h ago",
  },
];

export function NewsWidget({ className }: { className?: string }) {
  return (
    <WidgetCard title="Top Headlines" icon={Newspaper} className={className}>
      <div className="space-y-3">
        {MOCK_NEWS.map((item) => (
          <div key={item.id} className="space-y-1 border-b last:border-0 pb-3 last:pb-0">
            <p className="text-sm leading-snug line-clamp-2">{item.title}</p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">{item.category}</Badge>
              <span className="text-xs text-muted-foreground">{item.source}</span>
              <span className="text-xs text-muted-foreground ml-auto">{item.ago}</span>
            </div>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
