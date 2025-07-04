import { toUnixLineEnding } from "../src/nalch/ToUnixLineEnding";

describe("ToUnixLineEnding", () => {
  it("should convert CRLF to LF", () => {
    expect(toUnixLineEnding("a\r\nb\r\nc")).toBe("a\nb\nc");
  });
});
