export const projectCreationMethods = [
  "current_location",
  "map_pick",
  "address_search"
] as const;

export const geofenceRadiusFeetOptions = [82, 164, 328] as const;

export const workerPortalRules = {
  employeeCanInvoice: false,
  subcontractorCanInvoice: true,
  dailyProductionRequired: true,
  signatureRequiredForDocuments: true
};
