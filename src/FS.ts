import fs from "fs/promises";

async function readDirectory(directoryPath: string) {
  try {
    const files = await fs.readdir(directoryPath);
    console.log(`Soubory v adresáři ${directoryPath}:`);
    return files;
  } catch (err) {
    console.error(`Chyba při čtení adresáře ${directoryPath}:`, err);
  }
}
