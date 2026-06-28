export type SafetyChecklist = {
  projectId: string;
  workerId: string;
  ppeChecked: boolean;
  ladderSafe: boolean;
  weatherSafe: boolean;
  hazardsNoted?: string;
};

export function canStartWork(checklist: SafetyChecklist) {
  return checklist.ppeChecked && checklist.ladderSafe && checklist.weatherSafe;
}
