import fs, { stat } from "node:fs/promises";
//import { error } from "electron-log";
import { dirname, resolve } from "path";
import { ElectronLogger } from "../types/types";

export async function fileExistsWithData(path: string) {
  try {
    await fs.stat(path);
    return true; // Soubor existuje
  } catch (err) {
    return false; // Soubor neexistuje
  }
}

export async function fileExists(path: string) {
  try {
    await fs.access(path);
    return true; // Soubor existuje
  } catch (err) {
    return false; // Soubor neexistuje
  }
}

export async function checkDirectoryExists(log: ElectronLogger, path: string) {
  const { error } = log;

  try {
    const stats = await stat(path);
    // Pokud stat proběhne úspěšně, zkontrolujeme, zda jde o adresář
    if (stats.isDirectory()) {
      return true;
    } else {
      return null;
    }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return false;
    } else {
      // Jiná chyba (např. nedostatečná oprávnění)
      error(`An error occurred while checking the path. "${path}":`, err);
      //throw err;
    }
  }
}

export async function createUpfoldersPsysicallyUnlessThere(
  log: ElectronLogger,
  path: string
): Promise<boolean> {
  const resolvedPath = resolve(path);
  return createFoldersPsysicallyUnlessThere(log, dirname(resolvedPath));
}

export async function createFoldersPsysicallyUnlessThere(
  log: ElectronLogger,
  path: string
): Promise<boolean> {
  const { error } = log;
  const resolvedPath = resolve(path);
  try {
    await fs.mkdir(resolvedPath, { recursive: true });
    return true;
  } catch (err) {
    error(`Error creating directory structure ${resolvedPath}:`, err);
    return false;
  }
}

export function withEndSlash(path: string) {
  return path.endsWith("\\") ? path : path + "\\";
}
