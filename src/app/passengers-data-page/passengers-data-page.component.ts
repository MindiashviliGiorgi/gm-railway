import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passengers-data-page',
  templateUrl: './passengers-data-page.component.html',
  styleUrls: ['./passengers-data-page.component.scss']
})
export class PassengersDataPageComponent implements OnInit {

  storedData: any = {};
  myForm: FormGroup; // The main form
  addDone : boolean = false;
  totalAmount : number = 0;

  constructor(private formBuilder: FormBuilder) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString);
    };
    // in MyForm add passenger Array
    this.myForm = this.formBuilder.group({
      from: [this.storedData.from],
      to: [this.storedData.to],
      date: [this.storedData.date],
      people: [this.storedData.people],
      selectedHour: [this.storedData.selectedHour],
      sunsetTime: [this.storedData.sunsetTime],
      trainName: [this.storedData.trainName],
      email : [''],
      phoneNumber : [''],
      passengers: this.formBuilder.array([]),
    });
  }

  get passengers () {
    return this.myForm.controls["passengers"] as FormArray
  }

  ngOnInit(): void {
    for (let i = 0; i < this.storedData.people; i++) {
      this.createPassenger();
    }
  }

  addContact() {
    this.storedData.email = this.myForm.get('email')?.value;
    this.storedData.phoneNumber = this.myForm.get('phoneNumber')?.value;

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;

    this.addActive()
  }

  generatePeople(people : number): number[] {
    return Array.from({ length: people }, (index, i) => i + 1);
  }

  createPassenger() {
    const passengers = this.myForm.get('passengers') as FormArray;
    const passengerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      personalNumber: [''],
      trainClass: [''],
      place: [''],
    });
    passengers.push(passengerForm);

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;
  }

  addPassengerInfo(index: number){
    localStorage.setItem('formData', JSON.stringify(this.storedData));
    this.storedData = this.myForm.value;

    setTimeout(() => {
      // Call the function again after a short delay
      this.addPassengerInfo(index);
    }, 0);
  }
  
  addActive() {
    this.addDone = true;
    setTimeout(() => {
      this.addDone = false;
    }, 1000)
  };


  amount() {
    let result = 0;
    const passengers = this.myForm.get('passengers') as FormArray;
  
    passengers.value.forEach((passenger: any) => {
      const trainClass = parseInt(passenger.trainClass, 10);
  
      if (!isNaN(trainClass)) {
        switch (trainClass) {
          case 150:
            result += 150;
            break;
          case 100:
            result += 100;
            break;
          case 50:
            result += 50;
            break;
          default:
            break;
        }
      }
    });

    return result;
  }
  
  
  


}

