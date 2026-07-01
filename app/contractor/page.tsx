import { AppShell } from "@/components/AppShell";
import { PersonalPortalView } from "@/components/PersonalPortalView";
import { RoleGate } from "@/components/RoleGate";

export default function Contractor() {
  return (
    <AppShell>
      <RoleGate allowedRoles={["Sous-traitant"]}>
        <PersonalPortalView type="contractor" />
      </RoleGate>
    </AppShell>
  );
}
