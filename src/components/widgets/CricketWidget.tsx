import { Trophy } from "lucide-react";
import { WidgetCard } from "./WidgetCard";
import { Badge } from "@/components/ui/badge";

const MOCK_MATCHES = [
  {
    id: 1,
    teams: "IND vs AUS",
    score: "IND: 287/4 (45.2 ov)",
    status: "LIVE",
    info: "India need 63 runs from 28 balls",
  },
  {
    id: 2,
    teams: "ENG vs PAK",
    score: "ENG: 210  |  PAK: 185/7",
    status: "COMPLETED",
    info: "England won by 25 runs",
  },
  {
    id: 3,
    teams: "SA vs NZ",
    score: "Starts at 14:30 IST",
    status: "UPCOMING",
    info: "ICC World Cup 2025",
  },
];

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  LIVE: "default",
  COMPLETED: "secondary",
  UPCOMING: "outline",
};

export function CricketWidget() {
  return (
    <WidgetCard title="Cricket Scores" icon={Trophy}>
      <div className="space-y-4">
        {MOCK_MATCHES.map((match) => (
          <div key={match.id} className="space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{match.teams}</p>
              <Badge variant={statusVariant[match.status]} className="text-xs">
                {match.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{match.score}</p>
            <p className="text-xs text-muted-foreground">{match.info}</p>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
