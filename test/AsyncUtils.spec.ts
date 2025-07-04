import { getValueAfterDelay } from "@/nalch/su/utils/AsyncUtils";

describe("AsyncUtils", () => {
  it("getValueAfterDelay should resolve after delay", async () => {
    const value = await getValueAfterDelay(42, 10);
    expect(value).toBe(42);
  });
});
