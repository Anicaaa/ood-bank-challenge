### Domain Model

Requirements

- Deposits, withdrawal
- Account statement (date, credit or debit amount, balance)

js object Transaction
PROPERTIES

- amount: integer
- date: Date js object (new Date)
- type: 'deposit' OR 'withdrawal'

class BankAccount
PROPERTIES (constructor)

- transactionList: Array[Transaction]

METHODS (function - inputs, error conditions and return values)

- deposit(amount: integer, date: string) returns updated Array[Transaction]
    if amount is invalid (<= 0 or not a number) throw new Error('Amount not valid') // return "Amount not valid"
    if date date is invalid, throws new Error('Date not valid')
- withdraw(amount: integer, date: string) returns updated Array[Transaction]
    if amount or date invalid, throws new Error(...)
    if amount > current balance then throw Error()
- computeBalance() -> return my total balance from my list of transactions; Integer
    sort transactions first, then go through them one by one to compute balance
- printStatement() -> Array(Strings) one string for each line in the statement
    make sure transactions sorted from oldest at the bottom of the statement

Here's an example domain model. This is how I like to write them because I don't have to spend time formatting tables and the domain model reads a bit like pseudo code.

I separate out PROPERTIES and METHODS. For each method I think about the inputs, error conditions and return values with corresponding data types

Under each method I add some notes about what I think the method should do
