export type Contract = {
  id: string;
  quoteId?: string;
  clientId: string;
  projectId?: string;
  title: string;
  amount: number;
  currency: string;
  signedByClient: boolean;
  signedByCompany: boolean;
  status: "draft" | "sent" | "signed" | "cancelled";
};

export function contractReady(contract: Contract) {
  return contract.signedByClient && contract.signedByCompany && contract.status === "signed";
}
