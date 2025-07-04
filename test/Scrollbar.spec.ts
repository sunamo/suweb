import { getScrollbarWidth } from "../src/Scrollbar";

describe("Scrollbar", () => {
  it("should return a number", () => {
    const width = getScrollbarWidth();
    expect(typeof width).toBe("number");
  });
});
