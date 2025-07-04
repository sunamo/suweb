import { formatStringTS } from "../../src/nalch/su/utils/SHFormat";

describe("SHFormat", () => {
  it("should format string with arguments", () => {
    expect(formatStringTS("Hello {0}, {1}", "World", 123)).toBe(
      "Hello World, 123"
    );
  });
});
