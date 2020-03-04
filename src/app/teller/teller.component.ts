import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

  constructor(public _bankService: BankService) { }

  balance: number = this._bankService.account.balance
  address: string = this._bankService.account.address
  age: number = this._bankService.account.age
  currencyType: string = this._bankService.account.currency
  firstName: string = this._bankService.account.fname
  lastName: string = this._bankService.account.lname
}
