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
      cNumber : [''],
      period: [''],
      sivi : [''],
      owner : [''],
      uniqueNumber: [this.randomString],
      releaseDate: [this.newReleaseDate]
    });

  }

  ngOnInit():void {}

  reloadPage() {
    window.location.reload()
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
    this.storedData.uniqueNumber = this.myForm.get('uniqueNumber')?.value;
    this.storedData.releaseDate = this.myForm.get('releaseDate')?.value;
    this.storedData.cNumber = this.myForm.get('cNumber')?.value;
    this.storedData.period = this.myForm.get('period')?.value;
    this.storedData.sivi = this.myForm.get('sivi')?.value;
    this.storedData.owner = this.myForm.get('owner')?.value;

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;

    this.addActive();

    setTimeout(() => {
      this.ticketCreate()
      this.router.navigate(['/ticketPage'])
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
