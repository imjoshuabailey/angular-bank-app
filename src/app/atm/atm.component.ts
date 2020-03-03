import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor( public _bankService: BankService) { }
  
  value: number
  letters = /^[a-zA-Z\s]+$/;
  transaction: any[] = [];
  transactionsClicked = false;
  balanceClicked = false;
  currentBalance: number
  

  withdraw() {
    this.value = Math.round((this.value) * 100) / 100
    this._bankService.withdraw(this.value);
    if (this.transactionsClicked == true || this.balanceClicked == true) {
    this.transactionsClicked = false;
    this.balanceClicked = false;
    }
  };

  deposit() {
    this.value = Math.round((this.value) * 100) / 100
    this._bankService.deposit(this.value);
    if (this.transactionsClicked == true || this.balanceClicked == true) {
    this.transactionsClicked = false;
    this.balanceClicked = false;
    }
  };

  transactions() {
    this.transaction = this._bankService.account.transactions
    this.transactionsClicked = true;
    this.balanceClicked = false;
  };

  balanceCheck() {
    this.currentBalance = this._bankService.balance();
    this.balanceClicked = true;
    this.transactionsClicked = false;
  };

}
