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
  
  withdraw() {
    this.bankService.withdraw(this.value);
  };

  deposit() {
    this.bankService.deposit(this.value);
  };

  transactions() {
    this.transaction = this.bankService.account.transactions
    console.log(this.transaction[1])
  };
}
