// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require("assert");

describe("Mathematical Operations - Test Suite", function () {
  this.timeout(3000) // Set a timeout of 5 seconds for this test
  /* before("Execute Before All Tests", function () {
    console.log("Execute Before All Tests");
  });

  beforeEach("Execute Before Each Test", function () {
    console.log("Execute Before Each Test");
  });

  after("Execute After All Tests", function () {
    console.log("Execute After All Tests");
  });

  afterEach("Execute After Each Test", function () {
    console.log("Execute After Each Test");
  }); */

  // Use '.only' instead '.skip' to see de difference.
  it.skip("Addition of two numbers", function () {
    var a = 10;
    var b = 10;
    var c = a + b;

    assert.equal(c, 20);
  });

  it("Subtraction of two numbers", function (done) {
    this.retries(3); // Retry the test up to 3 times if it fails
    setTimeout(done,4000) // Simulate a test that takes 4 seconds
    var a = 10;
    var b = 10;
    var c = a - b;

    assert.equal(c, 0);
  });

  it("Multiplication of two numbers", function () {
    var a = 10;
    var b = 10;
    var c = a * b;

    assert.equal(c, 100);
  });

  it("Division of two numbers", function () {
    var a = 10;
    var b = 10;
    var c = a / b;

    assert.equal(c, 1);
  });

  it('This is a test for Pending Test Feature')
});
