import { AppShell } from "@/components/AppShell";
import { BusinessManagerLive } from "@/components/BusinessManagerLive";
import { ExecutiveVisualDashboard } from "@/components/ExecutiveVisualDashboard";
import { LiveMvpConsole } from "@/components/LiveMvpConsole";
import { OperationsHub } from "@/components/OperationsHub";
import { RoleGate } from "@/components/RoleGate";

export default function Page() {
  return (
    <AppShell>
      <RoleGate allowedRoles={["Administrateur"]}>
        <ExecutiveVisualDashboard />
        <BusinessManagerLive />
        <LiveMvpConsole />
        <OperationsHub />
      </RoleGate>
    </AppShell>
  );
}
