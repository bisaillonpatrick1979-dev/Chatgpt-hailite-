export function rectangleArea(widthFeet: number, heightFeet: number) {
  return widthFeet * heightFeet;
}

export function triangleArea(baseFeet: number, heightFeet: number) {
  return (baseFeet * heightFeet) / 2;
}

export function addWaste(area: number, wastePercent: number) {
  return area * (1 + wastePercent / 100);
}
