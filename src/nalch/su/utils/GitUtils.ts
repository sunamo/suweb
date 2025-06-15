import { ElectronLogger } from "../../../types/types";
import { toUnixLineEnding } from "../../ToUnixLineEnding";
import { formatStringTS } from "./SHFormat";
import { getLines } from "./SHGetLines";

const CommitPushStatusOk = toUnixLineEnding(`On branch {0}
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean`);

const CommitPushStatusOkShort = toUnixLineEnding(`On branch {0}
nothing to commit, working tree clean`);

/*
Větev je undefined v těchto případech:
Repo nemá žádný commit 
Je detached

Oba tyto stavy podchycuji dříve takže zde bude actualBranch vždy
*/
export const IsStatusOk = (output: string, actualBranch: string) => {
  const outputS = toUnixLineEnding(output).trim();

  //WriteTwoFilesTxt(CommitPushStatusOk, outputS);

  const b1 = formatStringTS(CommitPushStatusOk, actualBranch);
  const b2 = formatStringTS(CommitPushStatusOkShort, actualBranch);

  return [b1, b2].some(d => d == outputS);
};

export const getActualBranchFromGitBranchOutput = (
  log: ElectronLogger,
  s: string,
  repoFullPath: string
) => {
  let l = getLines(s);

  l = l.filter(s => s.startsWith("*"));

  if (l.length > 1) {
    log.error("More than 1 rows starting with * for " + repoFullPath);
  }

  const first = l[0];

  if (first) {
    if (first.includes("detached at")) {
      return undefined;
    }
    return first.substring(2);
  }

  return undefined;
};
