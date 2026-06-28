export type ProjectProgress = {
  projectId: string;
  totalTasks: number;
  completedTasks: number;
};

export function progressPercent(progress: ProjectProgress) {
  if (progress.totalTasks <= 0) return 0;
  return Math.round((progress.completedTasks / progress.totalTasks) * 100);
}
