const setupFirst = () => console.log("Setting up before tests run");
const tearDownNow = () => console.log("Finish up after tests run");

describe("new account creations checks", () => {
  beforeEach(() => setupFirst());
  afterEach(() => tearDownNow());

  test("new account 1 created", () => {
    const account = "account1";
    expect(account).toEqual("account1");
  });

  test("new account 2 created", () => {
    const account = "account2";
    expect(account).toEqual("account2");
  });
});
