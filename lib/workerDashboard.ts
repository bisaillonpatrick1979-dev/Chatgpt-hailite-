export type WorkerDashboard = {
  workerId: string;
  nextProject: string;
  openTasks: number;
  weekHours: number;
  estimatedPay: number;
  invoiceBalance?: number;
};

export function workerSummary(data: WorkerDashboard) {
  return {
    title: data.nextProject || "Aucun chantier assigne",
    tasks: `${data.openTasks} taches ouvertes`,
    pay: `${data.estimatedPay.toFixed(2)}$ CAD`
  };
}
