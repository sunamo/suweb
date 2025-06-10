export function toUnixLineEnding(input: string) {
  const result = input.replaceAll("\r\n", "\n");
  return result;
}
