import { ElectronLogger } from "../types/types";
import fs from "fs/promises";

export async function writeAllLines(
  log: ElectronLogger,
  filePath: string,
  lines: string[]
) {
  const { error } = log;
  try {
    await fs.writeFile(filePath, lines.join("\n"), "utf8");
  } catch (err) {
    error(`Error writing to file: ${filePath}`, err);
  }
}
