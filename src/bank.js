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

  bankStatement(transactionOne, transactionTwo) {
    // here it should contain two parameters of amount and date. Todo: Change later.
    const myDeposit = transactionOne;
    const myWithdrawal = transactionTwo;
    const currentBalance = `{$myDeposit} + {$myWithdrawal}`;
    for (let i = 0; this.transactions.length; i++) {
      const something = this.transactions[i];
      something.push(currentBalance);
    }
    return currentBalance;
    // Create a variable to store each of the strings I want to print out.
    // create a variable to store the current balance after each transaction
    // Iterate over the transactions (use a for loop)
    // Create a string that I want to print out for that transaction.
    // Push this.transactions array
    // return the list of strings to print.
    // date, amount, total balance.
    // I want a statement on paper that shows me a summary of the transactions
    // how do i get from: [{amount: 100, type: "deposit"}, {amount:80, type:'withdraw'}]
    // to: ['12/12/2022 | 100 | 100', '14/12/2022 | -80 | 20']
  }
}

module.exports = Bank;
