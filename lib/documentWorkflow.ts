export type DocumentStatus = "draft" | "sent" | "signed" | "approved" | "paid" | "cancelled";

export type CompanyDocument = {
  id: string;
  type: "quote" | "contract" | "invoice" | "subcontractor_invoice";
  clientName: string;
  amount: number;
  status: DocumentStatus;
  signatureRequired: boolean;
};

export const documentRules = {
  quoteCanBecomeContract: true,
  contractCanBecomeInvoice: true,
  subcontractorInvoiceNeedsAdminApproval: true,
  signatureRequiredBeforeSend: true
};
