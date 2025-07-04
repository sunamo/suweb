import {
  formatTimeAgoNumber,
  formatTimeAgoDate,
} from "../../src/nalch/su/utils/TimeUtils";

describe("TimeUtils", () => {
  it("formatTimeAgoNumber should return a string", () => {
    const now = Date.now();
    expect(typeof formatTimeAgoNumber(now - 1000)).toBe("string");
  });

  it("formatTimeAgoDate should return a string", () => {
    const now = new Date();
    expect(typeof formatTimeAgoDate(now)).toBe("string");
  });
});
