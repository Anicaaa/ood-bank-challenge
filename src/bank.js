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
    // store total balance in a variable
    const totalMoney = this.totalBalance();
    // Check if the money I want to take is more than what I have inside my account.
    if (amountWithdrawn > totalMoney) {
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

  totalBalance() {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      // Get the transaction from the list at index[i]
      // Towards that transaction in a variable called transaction
      // { amount: 200, date: "13-07-2022", transactionType: "deposit" } this is an object containing 3 properties.
      const transactionObject = this.transactions[i];
      if (transactionObject.transactionType === "deposit") {
        total += transactionObject.amount;
      }
      if (transactionObject.transactionType === "withdrawal") {
        total -= transactionObject.amount;
      }
    }
    return total;
  }

  bankStatement() {
    let statement = [];
    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];
      //console.log(i, transaction);

      //If the transaction.transactionType is whitdrawal then the string needs a negative amount else...
      //... positive amount

      if (transaction.transactionType === "withdrawal") {
        //If the transaction.transactionType is whitdrawal then the string needs a negative amount else...
        //... negative amount
        const negativeAmount = 0 - transaction.amount;
        const transactionAsString = `${transaction.date} | ${negativeAmount}`;
        statement.push(transactionAsString);
      } else {
        const transactionAsString = `${transaction.date} | ${transaction.amount}`;
        statement.push(transactionAsString);
      }
    }
    return statement;
  }
}

module.exports = Bank;
