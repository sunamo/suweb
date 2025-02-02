/**
 * Disables serialization of Circular properties. Passed as a parameter to JSON.stringify
 * @param _this JSON object to serialize
 * @returns Changed input object
 */
export const replacerFunc = () => {
  const visited = new WeakSet();
  return (_key: unknown, value: unknown) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};

/**
 * Disables serialization of Circular properties. Passed as a parameter to JSON.stringify
 * @param censor JSON object to serialize
 * @returns Changed input object
 */
export function censor(censor: unknown) {
  var i = 0;

  return function (_key: unknown, value: unknown) {
    if (
      i !== 0 &&
      typeof censor === "object" &&
      typeof value == "object" &&
      censor == value
    )
      return "[Circular]";

    if (i >= 29)
      // seems to be a harded maximum of 30 serialized objects?
      return "[Unknown]";

    ++i; // so we know we aren't using the original object anymore

    return value;
  };
}
