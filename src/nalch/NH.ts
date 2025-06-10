export function makeUpTo2NumbersToZero(num: number): string {
  // Přidá '0' na začátek a vezme poslední 2 znaky.
  return ("0" + num).slice(-2);
}
