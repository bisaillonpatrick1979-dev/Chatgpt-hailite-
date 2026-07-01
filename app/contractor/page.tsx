import { AppShell } from "@/components/AppShell";
import { PersonalPortalView } from "@/components/PersonalPortalView";

export default function Contractor() {
  return (
    <AppShell>
      <PersonalPortalView type="contractor" />
    </AppShell>
  );
}
