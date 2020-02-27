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

  withdraw() {
    console.log(this.bankService.account.balance - this.value)
    return this.bankService.account.balance = this.bankService.account.balance - this.value
  };
}
