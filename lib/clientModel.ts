export type ClientContact = {
  name: string;
  phone?: string;
  email?: string;
};

export type ClientRecord = {
  id: string;
  companyName: string;
  billingAddress?: string;
  projectAddresses: string[];
  contacts: ClientContact[];
  notes?: string;
};
