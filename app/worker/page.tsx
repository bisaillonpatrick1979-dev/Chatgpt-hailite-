import { AppShell } from "@/components/AppShell";
import { PersonalPortalView } from "@/components/PersonalPortalView";
import { RoleGate } from "@/components/RoleGate";

export default function Worker() {
  return (
    <AppShell>
      <RoleGate allowedRoles={["Employe"]}>
        <PersonalPortalView type="worker" />
      </RoleGate>
    </AppShell>
  );
}
