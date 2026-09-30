---
schema_version: 4
type: library
file_count: 86
delete_recommendation_percent: 5
generated_date: 2026-09-30
generated_time: 16:38:06
github_origin: no
github_source_url: 
---

## Description

Knihovna `@sunamo/suweb` pro npmjs.org s pomocnými funkcemi používanými ve více projektech (JSON, parsování, čas, řetězce, náhodná data, Git utility). Je psaná v TypeScriptu, bez produkčních závislostí, s testy v Jestu a publikuje se přes semantic-release. Kostra projektu (konfigurace, licence) pochází ze šablony typescript-npm-package-template, zdrojové soubory v `src` jsou vlastní.

## Původ zdrojáků

Staženo z GitHubu: **ne** — zdrojáky jsou vlastní, z cizí šablony pochází jen konfigurace projektu.

- Ověřeno: git remote origin = `git@github.com:sunamo/suweb.git` (vlastní repo); 63 commitů, autoři jen Radek Jancik, Radek Jančík, radek.jancik@sunamo.cz, smutekutek, sunamo.cz (žádný cizí); první commit 2022-04-02; LICENSE je v repu (viz níže); výskyty slova copyright/licence jen v: LICENSE (texty webu, i18n, glyfy fontů nebo značka šablony, ne autorská hlavička cizího kódu); odkazy na github.com v souborech: github.com/sunamo/suweb, github.com/sunamo/suweb.git; `gh search repos "sunamo suweb"` bez výsledků, ze hledání tedy nevzešel žádný kandidát na zdroj. Kandidáta na šablonu jsem určil z cizí LICENSE (Ryan Sonshine) a hashe souborů porovnal přes gh api (git/trees). Doplnění: Kostra projektu je z šablony `ryansonshine/typescript-npm-package-template`: git hash shodují soubory `LICENSE` (copyright Ryan Sonshine), `.env`, `.gitattributes`, `.husky/.gitignore`, `.vscode/launch.json` a husky hook (uložený jako `.husky/prepare-commit-msg2`) s blobem v šabloně. Zdrojáky v `src` (např. `index.ts`, `FS.ts`, `Parse.ts`) s šablonou (`src/index.ts`, `test/index.spec.ts`) shodu nemají, jde o vlastní kód. Proto je hodnota ne (šablona dodala jen konfiguraci).

## Doporučení ke smazání

Doporučení ke smazání: **5 %** — nemazat, protože jde o publikovaný a udržovaný npm balíček.

- Balíček `@sunamo/suweb` verze 1.1.4 s 63 commity, poslední commit 2026-09-30.
- Obsahuje testy a vlastní zdroje v `src`.
