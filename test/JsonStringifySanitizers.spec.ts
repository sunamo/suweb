import { replacerFunc, censor } from "../src/JsonStringifySanitizers";

describe("JsonStringifySanitizers", () => {
  it("replacerFunc should remove circular references", () => {
    const obj: any = { a: 1 };
    obj.self = obj;
    const str = JSON.stringify(obj, replacerFunc());
    expect(str).toBe('{"a":1}');
  });

  it("censor should replace circular references with [Circular]", () => {
    const obj: any = { a: 1 };
    obj.self = obj;
    const str = JSON.stringify(obj, censor(obj));
    expect(str).toContain("[Circular]");
  });
});
