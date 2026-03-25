import { LoginForm } from "@/components/auth/LoginForm";
import { BarChart2 } from "lucide-react";

export const metadata = { title: "Sign In | PulseBoard" };

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      <div className="mb-8 flex items-center gap-2 text-2xl font-bold">
        <BarChart2 className="h-7 w-7 text-primary" />
        PulseBoard
      </div>
      <LoginForm />
    </main>
  );
}
