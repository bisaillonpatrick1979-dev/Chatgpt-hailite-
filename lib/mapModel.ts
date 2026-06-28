export type JobLocation = {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  radiusFeet: number;
  source: "current_position" | "map_pick" | "address_search";
};

export function googleMapsQuery(location: JobLocation) {
  return `${location.latitude},${location.longitude}`;
}
