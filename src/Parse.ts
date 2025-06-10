export function stringToNumberOrUndefined(
  input: string | undefined
): number | undefined {
  if (!input) {
    return undefined;
  }

  return +input || undefined;
}

export function stringToDateOrUndefined(
  input: string | undefined
): Date | undefined {
  if (!input) {
    return undefined;
  }

  return new Date(input) || undefined;
}

export function stringToDateISOStringOrUndefined(
  input: string | undefined
): string | undefined {
  if (!input) {
    return undefined;
  }

  return new Date(input).toISOString() || undefined;
}

export function dateToDateISOStringOrUndefined(
  input: Date | undefined
): string | undefined {
  if (!input) {
    return undefined;
  }

  return new Date(input).toISOString() || undefined;
}

/**
 * Tato funkce je naprosto nutná! VIZ:
 * Nepoužívat metodu String() v TS! neudělá z toho string ale i null nebo undefined, když do toho něco takového přijde. A to dokonce v uvozovkách! Takže potom v jsonu je něco takového! "sheetNumber":"null"
 * @param input
 * @returns
 */
export function stringNullUndefinedToStringOrEmpty(
  input: string | number | null | undefined
) {
  if (!input) {
    return "";
  }
  return String(input);
}
