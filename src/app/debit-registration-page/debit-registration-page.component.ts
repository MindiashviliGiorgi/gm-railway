import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  randomString : string = '';
  newReleaseDate: string = '';

  constructor(private formBuilder : FormBuilder, private router : Router, private http : HttpClient) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString)
    };

    this.getCurrentDateTime();
    this.randomString = this.generateRandomString(10);

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
      uniqueNumber: [this.randomString],
      releaseDate: [this.newReleaseDate]
    });

  }

  ngOnInit():void {

  }

  addActive() {
    this.addDone = true;
    setTimeout(() => {
      this.addDone = false;
    }, 1000)
  };

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    this.randomString = result;

    return result;
  }

  getCurrentDateTime(): void {
    const currentDate = new Date();
    this.newReleaseDate = currentDate.toLocaleString();
  }

  ticketPayment(){
    
    this.storedData.cardNumber = this.myForm.get('cardNumber')?.value;
    this.storedData.validityPeriod = this.myForm.get('validityPeriod')?.value;
    this.storedData.cvv = this.myForm.get('cvv')?.value;
    this.storedData.cardOwner = this.myForm.get('cardOwner')?.value;

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;

    setTimeout(() => {
      // this.ticketCreate();
      this.router.navigate(['/ticketPage']);
    }, 500)

  }
  


  ticketCreate() {
    const tickedData = this.storedData;
    const headers = new HttpHeaders({'myHeader': 'gmrailway'})
    this.http.post('https://gmrailway-31f58-default-rtdb.europe-west1.firebasedatabase.app/tickets.json', tickedData, {headers: headers})
    .subscribe((res) => {
      console.log(res)
    })
  }
  
  

}
