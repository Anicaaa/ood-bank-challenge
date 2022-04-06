const Bank = require("../src/bank.js");

function add(a, b) {
  return a + b;
}

function makeArray() {
  return [1, 2, 3, "FOUR"];
}

function thrower() {
  throw new Error("pop");
}

describe("Sample test", () => {
  let value;

  beforeEach(function () {
    value = 123;
  });

  it("expect(1).toBe(1)", () => {
    let result = { a: 1, b: 2 };
    let expected = { a: 1, b: 2 };
    expect(result).toBe(expected);
  });

  it("expect(false).toEqual(false)", () => {
    expect(false).toEqual(false);
  });

  it("compare an array (object) correctly", () => {
    expect(makeArray()).toEqual([1, 2, 3, "FOUR"]);
  });

  it("add(1,3) is 4", () => {
    expect(add(1, 3)).toBe(4);
  });

  it("can catch an exception", () => {
    // expect(thrower()).toThrowError()

    expect(() => {
      thrower();
    }).toThrowError();
  });

  it("not expecting an exception", () => {
    expect(() => {
      add(1, 2);
    }).not.toThrowError();
  });

  it("expect numeric result", () => {
    expect(add(1, 2)).toEqual(jasmine.any(Number));
  });

  it("expect beforeEach() to have been called", () => {
    expect(value).toBe(123);
  });

  // Failing tests ...
  it("can catch an exception", () => {
    expect(() => {
      add(1, 3);
    }).toThrowError();
  });

  it("not expecting an exception", () => {
    expect(() => {
      thrower();
    }).not.toThrowError();
  });

  it("compare an array (object) INCORRECTLY", () => {
    expect(makeArray()).toBe([1, 2, 3, "FOUR"]);
  });
});
