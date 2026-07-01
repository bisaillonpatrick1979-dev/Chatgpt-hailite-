import { AppShell } from "@/components/AppShell";
import { PersonalPortalView } from "@/components/PersonalPortalView";
import { RoleAccessNotice } from "@/components/RoleAccessNotice";

export default function Contractor() {
  return (
    <AppShell>
      <RoleAccessNotice allowedRoles={["Sous-traitant"]} />
      <PersonalPortalView type="contractor" />
    </AppShell>
  );
}
