import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Transaction {
  date: string;
  type: string;
  amount: number;
  finalValue: number;
};

export class BankService {

  constructor() { }

  transaction: Array<Transaction> = [];

  account: any = {
    fname: 'Brian',
    lname: 'Davies',
    age: 29,
    address: {
      street: '853 Elm Ave.',
      city: 'Chula Vista',
      state: 'CA',
      zip: 91911,
      country: 'United States'
    },
    balance: 0.01,
    currency: 'USD',
    transactions: [
      {
        date: '01-01-01',
        type: 'Withdrawal',
        amount: 200.00,
        finalValue: 0,
      },
      {
        date: '02-02-02',
        type: 'Deposit',
        amount: 100.00,
        finalValue: 0,
      },
      {
        date: '03-03-03',
        type: 'Withdrawal',
        amount: 2.00,
        finalValue: 0,
      }
    ]
  };
  withdraw(value) {
      if (value > 0) {
        this.account.balance = Math.round((this.account.balance - value) * 100) / 100
        this.newTransaction(value, "Withdrawal", this.account.balance);
        return this.account.balance
      } else {
        return alert('Please enter a positive number');
      }
  };

  deposit(value) {
    if (value > 0) {
      this.account.balance = Math.round((this.account.balance + value) * 100) / 100
      this.newTransaction(value, "Deposit", this.account.balance);
      return this.account.balance
    } else {
      return alert('Please enter a positive number')
    }
  };
  
  balance() {
    return this.account.balance;
  };

  setDate() {
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = now.getFullYear();
    return mm + '-' + dd + '-' + yyyy;

  };
 
  newTransaction(amount, type, finalValue) {
    let transactionObj = new Transaction();
    transactionObj.date = this.setDate()
    transactionObj.type = type
    transactionObj.amount = amount
    transactionObj.finalValue = finalValue
    this.account.transactions.push(transactionObj)
  };
}
