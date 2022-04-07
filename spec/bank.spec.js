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

  it("should accept my first withdrawal in bank account and save it in the transaction list", () => {
    //set up
    const account = new Bank();
    account.deposit(1000, "06-04-2022");
    //execute
    const objectList = [
      {
        amount: 1000,
        date: "06-04-2022",
        transactionType: "deposit",
      },
      {
        amount: 50,
        date: "10-04-2022",
        transactionType: "withdrawal",
      },
    ];
    const result = account.withdrawal(50, "10-04-2022");
    //verify
    expect(result).toEqual(true);
    expect(account.transactions).toEqual(objectList);
  });

  it("should reject my first withdrawal if tryong to get 0 or less", () => {
    //set up
    const account = new Bank(); //
    //execute
    const objectList = [];
    const result = account.withdrawal(0, "10-04-2022");
    //verify
    expect(result).toEqual(false);
    expect(account.transactions).toEqual(objectList);
  });

  it("show total balance after depositing and withdrawing money from bank account", () => {
    //set up
    const account = new Bank();
    //execute
    account.transactions = [
      { amount: 200, date: "13-07-2022", transactionType: "deposit" },
      { amount: 150, date: "14-07-2022", transactionType: "deposit" },
      { amount: 100, date: "15-07-2022", transactionType: "withdrawal" },
    ];
    const expected = 250;
    const result = account.totalBalance();
    //verify
    expect(result).toEqual(expected);
  });

  it("should reject a withdrawal if I have no money", () => {
    //set up
    const account = new Bank();
    //execute
    const objectList = []; // cannot see a withdrawal transaction because I have no money in bank account
    const result = account.withdrawal(50, "10-04-2022");
    //verify
    expect(result).toEqual(false);
    expect(account.transactions).toEqual(objectList);
  });
});
