const multiply = require("../src/multiply");

describe("test multiply positive scenarios", () => {
  test.skip("multiply 3*2 should equal 6", () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

test("object example", () => {
  const data = { first: 1 };
  data["second"] = 2;
  expect(data).toEqual({ first: 1, second: 2 });
});

test("multiply 4*3 should not equal to 11", () => {
  expect(multiply(4, 3)).not.toBe(11);
});
