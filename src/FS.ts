// Browser-compatible path join — no Node.js `path` dependency.
// WHY: Electron renderer runs in browser context (contextIsolation: true) where Node.js built-ins
// are not available. Original implementation used `import { join } from "path"` which Rollup
// compiled to `const eG=require,Ln=eG("path")` — calling `require()` crashed the renderer
// with "ReferenceError: require is not defined", causing a permanent white screen.
// Handles both Windows (\) and Unix (/) separators.
export const joinPath = (...parts: string[]): string => {
  if (parts.length === 0) return "";
  const hasBs = parts.some((p) => p.includes("\\"));
  const sep = hasBs ? "\\" : "/";
  const re = hasBs ? /[/\\]+/g : /\/+/g;
  return parts
    .map((p, i) => {
      const s = p.replace(re, sep);
      return i === 0 ? s.replace(new RegExp(`[/\\\\]+$`), "") : s.replace(new RegExp(`^[/\\\\]+|[/\\\\]+$`), "");
    })
    .filter((p) => p.length > 0)
    .join(sep);
};
