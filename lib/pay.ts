export function hourlyPay(hours: number, rate: number) {
  return hours * rate;
}

export function quantityPay(quantity: number, rate: number) {
  return quantity * rate;
}

export function effectiveHourly(total: number, hours: number) {
  if (hours <= 0) return 0;
  return total / hours;
}
