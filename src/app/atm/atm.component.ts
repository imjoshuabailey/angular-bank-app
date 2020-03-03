import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor( public bankService: BankService) { }
  
  value: number
  letters = /^[a-zA-Z\s]+$/;
  transaction: any[] = [];
  transactionsClicked = false;
  balanceClicked = false;
  currentBalance: number
  

  withdraw() {
    this.bankService.withdraw(this.value);
    if (this.transactionsClicked == true || this.balanceClicked == true) {
    // this.transactionsClicked = false;
    this.currentBalance = this.bankService.balance();
    }
  };

  deposit() {
    this.bankService.deposit(this.value);
    if (this.transactionsClicked == true || this.balanceClicked == true) {
    // this.transactionsClicked = false;
    this.currentBalance = this.bankService.balance();
    }
  };

  transactions() {
    this.transaction = this.bankService.account.transactions
    this.transactionsClicked = true;
    
  };

  balanceCheck() {
    this.currentBalance = this.bankService.balance();
    this.balanceClicked = true;
  };

}
