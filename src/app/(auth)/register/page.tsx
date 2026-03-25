import { RegisterForm } from "@/components/auth/RegisterForm";
import { BarChart2 } from "lucide-react";

export const metadata = { title: "Register | PulseBoard" };

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      <div className="mb-8 flex items-center gap-2 text-2xl font-bold">
        <BarChart2 className="h-7 w-7 text-primary" />
        PulseBoard
      </div>
      <RegisterForm />
    </main>
  );
}
