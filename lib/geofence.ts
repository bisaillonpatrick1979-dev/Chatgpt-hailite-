export type Point = { latitude: number; longitude: number };

export function distanceInFeet(a: Point, b: Point) {
  const earthRadiusFeet = 20902231;
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(b.latitude - a.latitude);
  const dLon = toRad(b.longitude - a.longitude);
  const lat1 = toRad(a.latitude);
  const lat2 = toRad(b.latitude);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * earthRadiusFeet * Math.asin(Math.sqrt(h));
}

export function isInsideGeofence(worker: Point, job: Point, radiusFeet: number) {
  return distanceInFeet(worker, job) <= radiusFeet;
}
