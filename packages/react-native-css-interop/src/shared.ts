import { RuntimeValue } from "./types";

export function exhaustiveCheck(value: never) {
  throw new Error(`Unhandled case: ${value}`);
}

export const DarkMode = Symbol();
export const DevHotReloadSubscription = Symbol();
export const INTERNAL_RESET = Symbol();
export const INTERNAL_SET = Symbol();
export const INTERNAL_VERIFICATION_FLAGS = Symbol();

export function isRuntimeValue(value: unknown): value is RuntimeValue {
  if (!value) {
    return false;
  } else if (Array.isArray(value)) {
    return value.some((v) => isRuntimeValue(v));
  } else if (typeof value === "object") {
    if ((value as Record<string, unknown>).type === "runtime") {
      return true;
    } else {
      return Object.values(value).some((v) => isRuntimeValue(v));
    }
  } else {
    return false;
  }
}