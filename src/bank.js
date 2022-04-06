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
    return true;
  }
  withdrawal(amountWithdrawn, dateWithdrawn) {
    if (amountWithdrawn <= 0) {
      return false;
    }

    const secondTransaction = {
      amount: amountWithdrawn,
      date: dateWithdrawn,
      transactionType: "withdrawal",
    };
    this.transactions.push(secondTransaction);
    return true;
  }
  bankStatement() {}
}

module.exports = Bank;
