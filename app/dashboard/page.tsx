import { AppShell } from "@/components/AppShell";
import { ExecutiveVisualDashboard } from "@/components/ExecutiveVisualDashboard";
import { OperationsHub } from "@/components/OperationsHub";

export default function Page() {
  return (
    <AppShell>
      <ExecutiveVisualDashboard />
      <OperationsHub />
    </AppShell>
  );
}
