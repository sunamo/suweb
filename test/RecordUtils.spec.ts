import { SetOrAdd } from "../../src/nalch/su/utils/RecordUtils.js";

describe("RecordUtils", () => {
  it("SetOrAdd should set or add a key-value pair", () => {
    const obj: Record<string, number> = {};
    SetOrAdd(obj, "a", 1);
    expect(obj["a"]).toBe(1);
  });
});
