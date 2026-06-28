export type PinPolicy = {
  minLength: number;
  maxAttempts: number;
  lockMinutes: number;
};

export const defaultPinPolicy: PinPolicy = {
  minLength: 4,
  maxAttempts: 5,
  lockMinutes: 15
};

export function pinLooksValid(pin: string, policy = defaultPinPolicy) {
  return /^\d+$/.test(pin) && pin.length >= policy.minLength;
}
