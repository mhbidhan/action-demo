const { oddOrEven } = require("./index");

describe("oddOrEven", () => {
  it("should be even", () => {
    const result = oddOrEven(10);

    expect(result).toStrictEqual("even");
  });

  it("should be od", () => {
    const result = oddOrEven(9);

    expect(result).toStrictEqual("odd");
  });
});
