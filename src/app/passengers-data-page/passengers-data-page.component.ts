import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passengers-data-page',
  templateUrl: './passengers-data-page.component.html',
  styleUrls: ['./passengers-data-page.component.scss']
})
export class PassengersDataPageComponent implements OnInit {
  storedData: any = {};
  passengersArray: { index: number, passengerForm: FormGroup }[] = [];

  constructor(private formBuilder: FormBuilder) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString);
    }

    if (!this.storedData.passengersArray) {
      this.storedData.passengersArray = [];
    }
  }

  ngOnInit(): void {
    // Create form groups for each passenger based on the number of people
    for (let i = 0; i < this.storedData.people; i++) {
      const passengerForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        personalNumber: [''],
      });

      this.passengersArray.push({ index: i, passengerForm: passengerForm });
    }
  }

  addPassenger() {
    
  }

}
