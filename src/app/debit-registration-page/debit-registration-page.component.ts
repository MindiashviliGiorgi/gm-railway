import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debit-registration-page',
  templateUrl: './debit-registration-page.component.html',
  styleUrls: ['./debit-registration-page.component.scss']
})
export class DebitRegistrationPageComponent {

  addDone : boolean = false;
  storedData : any = {};
  myForm: FormGroup; // The main form

  constructor(private formBuilder : FormBuilder, private router : Router) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString)
    };
    // myForm 
    this.myForm = this.formBuilder.group({
      from: [this.storedData.from],
      to: [this.storedData.to],
      date: [this.storedData.date],
      people: [this.storedData.people],
      selectedHour: [this.storedData.selectedHour],
      sunsetTime: [this.storedData.sunsetTime],
      trainName: [this.storedData.trainName],
      email : [this.storedData.email],
      phoneNumber : [this.storedData.phoneNumber],
      passengers: [this.storedData.passengers],
      amount : [this.storedData.amount],
      cardNumber : [''],
      validityPeriod: [''],
      cvv : [''],
      cardOwner : [''],
    });

  }

  ngOnInit():void {}

  addActive() {
    this.addDone = true;
    setTimeout(() => {
      this.addDone = false;
    }, 1000)
  };

  ticketPayment(){
    this.storedData.cardNumber = this.myForm.get('cardNumber')?.value;
    this.storedData.validityPeriod = this.myForm.get('validityPeriod')?.value;
    this.storedData.cvv = this.myForm.get('cvv')?.value;
    this.storedData.cardOwner = this.myForm.get('cardOwner')?.value;

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;

    console.log(this.storedData)

    this.addActive()

    setTimeout(() => {
      this.router.navigate(['/ticketPage']);
    }, 1200)
  }

}
