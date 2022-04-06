const Bank = require("../src/bank.js");

describe("Bank class", () => {
  it("should accept my first deposit in bank account and save it in the transaction list", () => {
    //set up
    const account = new Bank(); // I need an account to do the work
    //execute
    const objectList = [
      {
        amount: 100,
        date: "06-04-2022",
        transactionType: "deposit",
      },
    ];
    const result = account.deposit(100, "06-04-2022");
    //verify
    expect(result).toEqual(true);
    expect(account.transactions).toEqual(objectList);
  });

  it("should reject my first deposit in bank account if amount < 0", () => {
    //set up
    const account = new Bank(); //
    //execute
    const objectList = [];
    const result = account.deposit(0, "06-04-2022");
    //verify
    expect(result).toEqual(false);
    expect(account.transactions).toEqual(objectList);
  });
});
