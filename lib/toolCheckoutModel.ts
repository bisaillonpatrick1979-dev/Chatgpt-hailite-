export type ToolCheckout = {
  id: string;
  toolId: string;
  workerId: string;
  checkedOutAt: string;
  checkedInAt?: string;
  conditionOut?: string;
  conditionIn?: string;
};

export function isToolOut(checkout: ToolCheckout) {
  return !checkout.checkedInAt;
}
