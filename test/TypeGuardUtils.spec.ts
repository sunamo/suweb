import { isBoolean } from "../../src/nalch/su/utils/TypeGuardUtils";

describe("TypeGuardUtils", () => {
  it("isBoolean should return true for booleans", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean("true")).toBe(false);
  });
});
