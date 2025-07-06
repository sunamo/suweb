# suweb

[![CI/CD](https://img.shields.io/badge/CI%2FCD-pending-yellow)](https://github.com/actions) [![Tests](https://img.shields.io/badge/tests-37%2F37%20passed-green)](...) [![Coverage](https://img.shields.io/badge/coverage-47.02%25-red

A TypeScript utility library for working with JSON, data, strings, time, and other common operations. Suitable for use in both Node.js and browser projects.

## Key Features

- **Type-Safe**: Fully written in TypeScript.
- **Modular**: Import only what you need.
- **Universal**: Works in Node.js and the browser.
- **Zero Dependencies**: Has no production dependencies.
- **Tested**: Covered by unit tests using Jest.

## Installation

```bash
pnpm install
```

## Running Tests

```bash
pnpm test
```

If you are using Jest, make sure you have the types installed:

```bash
pnpm add -D @types/jest
```

## Usage Examples

### Working with JSON

```typescript
import { JsonGenerate } from "@/JsonGenerate";

// Generates a JSON object with random data based on a template
const template = {
  id: "{{Number}}",
  name: "{{String}}",
  active: "{{Boolean}}",
};
const result = JsonGenerate.generate(template);
console.log(result);
// { id: 123, name: "randomString", active: true }
```

### Time Utilities

```typescript
import { TimeUtils } from "@/nalch/su/utils/TimeUtils";

// Checks if a year is a leap year
console.log(TimeUtils.isLeapYear(2024)); // true

// Converts milliseconds to a readable time format
console.log(TimeUtils.msToTime(1234567)); // 00:20:34.567
```

## Project Structure

- `src/` – Source TypeScript files
- `lib/` – Built JS files (if you use a build process)
- `test/` – Unit tests (Jest)

## Main Utilities

- JSON handling (`JsonGenerate`, `JsonStringifySanitizers`)
- Date and time handling (`RandomDate`, `TimeUtils`)
- Utilities for strings, arrays, objects
- Helpers for testing and parsing

## License

This project is licensed under the terms of the `LICENSE` file.

## Contributing

Pull requests and issues are welcome!
