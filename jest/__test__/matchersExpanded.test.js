test('there is pool in Liverpool', () => {
    expect('Liverpool').toMatch(/pool/);
});

const multiply = require("../src/multiply");

describe("test multiply positive scenarios", () => {
  test("multiply 3*2 should equal 6", () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(3, 2)).toBeGreaterThan(5);
    expect(multiply(3, 2)).toBeLessThan(7);
    expect(multiply(3, 2)).toBeLessThanOrEqual(6);
  });
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  const carStock = [
    'BWM',
    'Mercedes',
    'Ferrari',
    'Toyota'
  ];

  test('that the car stock list has a Ferrari', () => {
    expect(carStock).toContain('Ferrari');
  });