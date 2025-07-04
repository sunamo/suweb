import { getLines } from "../../src/nalch/su/utils/SHGetLines";

describe("SHGetLines", () => {
  it("should split string by newline", () => {
    expect(getLines("a\nb\nc")).toEqual(["a", "b", "c"]);
  });
});
