class Bank {
  constructor() {
    this.transactions = [];
  }

  deposit(amountDeposit, dateDeposit) {
    if (amountDeposit <= 0) {
      return false;
    }

    const firstTransaction = {
      amount: amountDeposit,
      date: dateDeposit,
      transactionType: "deposit",
    };
    this.transactions.push(firstTransaction);
    console.log(this.transactions);
    return true;
  }
  withdrawal() {}
  bankStatement() {}
}

module.exports = Bank;
