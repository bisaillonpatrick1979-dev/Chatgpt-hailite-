import { AppShell } from "@/components/AppShell";
import { PersonalPortalView } from "@/components/PersonalPortalView";
import { RoleAccessNotice } from "@/components/RoleAccessNotice";

export default function Worker() {
  return (
    <AppShell>
      <RoleAccessNotice allowedRoles={["Employe"]} />
      <PersonalPortalView type="worker" />
    </AppShell>
  );
}
