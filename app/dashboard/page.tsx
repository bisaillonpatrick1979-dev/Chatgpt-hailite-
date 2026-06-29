import { AppShell } from "@/components/AppShell";
import { ExecutiveVisualDashboard } from "@/components/ExecutiveVisualDashboard";
import { LiveMvpConsole } from "@/components/LiveMvpConsole";
import { OperationsHub } from "@/components/OperationsHub";

export default function Page() {
  return (
    <AppShell>
      <ExecutiveVisualDashboard />
      <LiveMvpConsole />
      <OperationsHub />
    </AppShell>
  );
}
