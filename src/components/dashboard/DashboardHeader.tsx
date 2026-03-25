"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, BarChart2 } from "lucide-react";

export function DashboardHeader() {
  const { data: session } = useSession();

  const initials = session?.user?.name
    ? session.user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "??";

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4 md:px-6">
      {/* Mobile logo */}
      <div className="flex items-center gap-2 md:hidden">
        <BarChart2 className="h-5 w-5 text-primary" />
        <span className="font-bold">PulseBoard</span>
      </div>

      {/* Page title on desktop */}
      <p className="hidden md:block text-sm text-muted-foreground">
        Welcome back,{" "}
        <span className="font-medium text-foreground">{session?.user?.name ?? "User"}</span>
      </p>

      {/* User + logout */}
      <div className="flex items-center gap-3 ml-auto">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="text-xs bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <span className="hidden sm:block text-sm font-medium">{session?.user?.email}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:block">Logout</span>
        </Button>
      </div>
    </header>
  );
}
