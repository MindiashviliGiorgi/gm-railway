import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passengers-data-page',
  templateUrl: './passengers-data-page.component.html',
  styleUrls: ['./passengers-data-page.component.scss']
})
export class PassengersDataPageComponent {

  storedData : any = {};
  passengersArray: { index: number, passengerForm: FormGroup }[] = [];

  constructor(private formBuilder : FormBuilder) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString)
    };

    // Create form groups for each passenger
    for (let i = 0; i < this.storedData.people; i++) {
      const passengerForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        personalNumber: [''],
      });

      this.passengersArray.push({ index: i, passengerForm: passengerForm });
    }
    
  }

  ngOnInit():void { 
    console.log(this.storedData)
  }

  
  addPassengerForm(passengerForm: FormGroup) {
    // Generate a unique index for this passenger
    const newIndex = this.storedData.passengersArray.length;
    
    // Push the passenger form and index to the storedData
    this.storedData.passengersArray.push({ index: newIndex, passengerForm: passengerForm });
  
    // Save the updated storedData to localStorage (if needed)
    localStorage.setItem('formData', JSON.stringify(this.storedData));
  }
  
  addPassenger() {
    const newPassengerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      personalNumber: [''],
    });

    this.addPassengerForm(newPassengerForm)
    console.log(newPassengerForm)
  }



}
