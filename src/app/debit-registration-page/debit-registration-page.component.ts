import { Component } from '@angular/core';

@Component({
  selector: 'app-debit-registration-page',
  templateUrl: './debit-registration-page.component.html',
  styleUrls: ['./debit-registration-page.component.scss']
})
export class DebitRegistrationPageComponent {

  addDone : boolean = false;

  constructor() {}

  ngOnInit():void {}

  addActive() {
    this.addDone = true;
    setTimeout(() => {
      this.addDone = false;
    }, 1000)
  };

  ticketPayment(){
    this.addActive()
  }

}
