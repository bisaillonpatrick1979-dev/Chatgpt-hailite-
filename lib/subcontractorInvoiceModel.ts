export type SubcontractorInvoice = {
  id: string;
  subcontractorId: string;
  projectId: string;
  amount: number;
  taxAmount: number;
  advanceDeducted: number;
  signed: boolean;
  photosApproved: boolean;
  tasksComplete: boolean;
};

export function canSubmitSubcontractorInvoice(invoice: SubcontractorInvoice) {
  return invoice.signed && invoice.photosApproved && invoice.tasksComplete;
}
