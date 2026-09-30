---
schema_version: 4
type: library
file_count: 86
delete_recommendation_percent: 5
generated_date: 2026-09-30
generated_time: 16:38:47
github_origin: no
github_source_url: 
---

## Description

Knihovna `@sunamo/suweb` pro npmjs.org s pomocnými funkcemi používanými ve více projektech (JSON, parsování, čas, řetězce, náhodná data, Git utility). Je psaná v TypeScriptu, bez produkčních závislostí, s testy v Jestu a publikuje se přes semantic-release. Kostra projektu (konfigurace, licence) pochází ze šablony typescript-npm-package-template, zdrojové soubory v `src` jsou vlastní.

## Původ zdrojáků

Staženo z GitHubu: **ne** — zdrojáky jsou vlastní, z cizí šablony pochází jen konfigurace projektu.

- Ověřeno: git remote origin = `git@github.com:sunamo/suweb.git` (vlastní repo), 64 commitů, autoři jen Radek Jancik, Radek Jančík, radek.jancik@sunamo.cz, smutekutek, sunamo.cz (žádný cizí), první commit 2022-04-02.
- Ověřeno: LICENSE je v repu (viz níže); hlavičky copyright/@author v kódu nenalezeny.
- Ověřeno: odkazy na github.com v souborech: github.com/sunamo/suweb, github.com/sunamo/suweb.git.
- Ověřeno: `gh search repos "sunamo suweb"` bez výsledků; kandidáta na šablonu jsem určil z cizí LICENSE (Ryan Sonshine) a hashe souborů porovnal přes gh api (git/trees), viz níže.
- Šablona: kostra projektu je z `ryansonshine/typescript-npm-package-template` (v `LICENSE` je copyright Ryan Sonshine).
- Hash porovnání: git hash shodují `LICENSE`, `.env`, `.gitattributes`, `.husky/.gitignore`, `.vscode/launch.json` a husky hook (uložený jako `.husky/prepare-commit-msg2`) s blobem šablony.
- Zdrojáky v `src` (`index.ts`, `FS.ts`, `Parse.ts` ad.) s šablonou shodu nemají, jde o vlastní kód.

## Doporučení ke smazání

Doporučení ke smazání: **5 %** — nemazat, protože jde o publikovaný a udržovaný npm balíček.

- Balíček `@sunamo/suweb` verze 1.1.4 s 63 commity, poslední commit 2026-09-30.
- Obsahuje testy a vlastní zdroje v `src`.
