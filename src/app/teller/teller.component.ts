import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

  constructor(public _bankService: BankService) { }

  value: number
  balance: number = this._bankService.account.balance
  address: string = this._bankService.account.address
  age: number = this._bankService.account.age
  currencyType: string = this._bankService.account.currency
  firstName: string = this._bankService.account.fname
  lastName: string = this._bankService.account.lname
  transactionsClicked = true;

  withdraw() {
    this.value = Math.round((this.value) * 100) / 100
    this._bankService.withdraw(this.value);
    this.balance = this._bankService.account.balance
    this.transactionsClicked = true;
  };

  deposit() {
    this.value = Math.round((this.value) * 100) / 100
    this._bankService.deposit(this.value);
    this.balance = this._bankService.account.balance
    this.transactionsClicked = true;
  };

  transactions() {
    if (this.transactionsClicked == true) {
      this.transactionsClicked = false;
    }else {
      this.transactionsClicked = true;
    }
  };
}
