export type PdfDocument = {
  id: string;
  title: string;
  documentNumber: string;
  companyName: string;
  clientName: string;
  total: number;
  currency: string;
  signatureUrl?: string;
};

export const pdfRules = {
  showCompanyLogo: true,
  showWatermark: true,
  useZebraRows: true,
  requireSignatureBeforeFinalPdf: true
};
