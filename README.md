# suweb

TypeScript knihovna s utility funkcemi pro práci s JSON, daty, řetězci, časem a dalšími běžnými operacemi. Vhodné pro použití v Node.js i browser projektech.

## Instalace

```bash
pnpm install
```

## Spuštění testů

```bash
pnpm test
```

Pokud používáte Jest, ujistěte se, že máte nainstalované typy:

```bash
pnpm add -D @types/jest
```

## Struktura projektu

- `src/` – zdrojové TypeScript soubory
- `lib/` – buildované JS soubory (pokud používáte build)
- `test/` – unit testy (Jest)

## Hlavní utility

- Práce s JSON (`JsonGenerate`, `JsonStringifySanitizers`)
- Práce s datem a časem (`RandomDate`, `TimeUtils`)
- Utility pro řetězce, pole, objekty
- Helpers pro testování a parsing

## Licence

Projekt je pod licencí viz soubor `LICENSE`.

## Přispívání

Pull requesty a issues jsou vítány!
