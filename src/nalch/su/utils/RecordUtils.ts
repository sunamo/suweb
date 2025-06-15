export function SetOrAdd<T>(r: Record<string, T>, key: string, value: T) {
  r[key] = value;

  return r;
}
