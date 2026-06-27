export const feetToMeters = (feet: number) => feet * 0.3048;

export function isWithinRadius(distanceInMeters: number, radiusInFeet: number) {
  return distanceInMeters <= feetToMeters(radiusInFeet);
}
