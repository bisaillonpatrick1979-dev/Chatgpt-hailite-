export type TeamMember = {
  workerId: string;
  role: "lead" | "installer" | "helper" | "subcontractor";
};

export type CrewTeam = {
  id: string;
  name: string;
  members: TeamMember[];
  activeProjectId?: string;
};

export function teamSize(team: CrewTeam) {
  return team.members.length;
}
