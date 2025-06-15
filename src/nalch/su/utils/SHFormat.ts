export function formatStringTS(template: string, ...args: unknown[]): string {
  return template.replace(
    /{(\d+)}/g,
    (match: string, numberStr: string): string => {
      const index = parseInt(numberStr, 10); // Převedeme zachycené číslo (string) na skutečné číslo

      // Zkontrolujeme, zda je index platný a argument na tomto indexu existuje
      if (index >= 0 && index < args.length) {
        const arg = args[index];

        // Bezpečně převedeme argument na string
        // Můžete přidat sofistikovanější logiku pro různé typy, pokud je to potřeba
        if (arg === null || arg === undefined) {
          return ""; // Nebo vrátit placeholder jako např. "undefined"
        }
        return String(arg);
      }
      return match; // Pokud argument chybí, vrátíme původní placeholder (např. "{2}")
    }
  );
}
