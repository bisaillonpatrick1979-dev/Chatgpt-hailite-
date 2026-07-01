import { AppShell } from "@/components/AppShell";
import { PersonalPortalView } from "@/components/PersonalPortalView";

export default function Worker() {
  return (
    <AppShell>
      <PersonalPortalView type="worker" />
    </AppShell>
  );
}
