export type MaterialCatalogItem = {
  id: string;
  name: string;
  category: "siding" | "soffit" | "fascia" | "trim" | "roofing" | "other";
  unit: "pi2" | "linear_ft" | "box" | "piece" | "roll";
  unitPrice: number;
  taxable: boolean;
};

export function materialLineTotal(item: MaterialCatalogItem, quantity: number) {
  return item.unitPrice * quantity;
}
