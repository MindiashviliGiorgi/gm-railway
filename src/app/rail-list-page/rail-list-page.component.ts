import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rail-list-page',
  templateUrl: './rail-list-page.component.html',
  styleUrls: ['./rail-list-page.component.scss']
})
export class RailListPageComponent {

  storedData: any = {};
  myForm: FormGroup; // The main form
  form812: FormGroup;
  form808: FormGroup;
  form804: FormGroup;

  constructor(private formBuilder: FormBuilder, private router : Router) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString);
    }

    this.myForm = this.formBuilder.group({
      from: [this.storedData.from],
      to: [this.storedData.to],
      date: [this.storedData.date],
      people: [this.storedData.people],
      selectedHour: [''],
      sunsetTime: [''],
      trainName: [''],
    });

    this.form812 = this.formBuilder.group({
      selectedHour: ['00:35'],
      sunsetTime: ['05:47'],
      trainName: ['812'],
    });

    this.form808 = this.formBuilder.group({
      selectedHour: ['10:25'],
      sunsetTime: ['15:38'],
      trainName: ['808'],
    });

    this.form804 = this.formBuilder.group({
      selectedHour: ['17:10'],
      sunsetTime: ['22:20'],
      trainName: ['804'],
    });
  }

  // Function to update main form with information from train #812
  updateFormWithTrain812Info() {
    if (this.form812) {
      this.storedData.selectedHour = this.form812.get('selectedHour')?.value;
      this.storedData.sunsetTime = this.form812.get('sunsetTime')?.value;
      this.storedData.trainName = this.form812.get('trainName')?.value;
    }
  
    // update the localStorage with the updated storedData
    localStorage.setItem('formData', JSON.stringify(this.storedData));
  
    this.router.navigate(['/passengersData']);
  }
  
  updateFormWithTrain808Info() {
    if (this.form808) {
      this.storedData.selectedHour = this.form808.get('selectedHour')?.value;
      this.storedData.sunsetTime = this.form808.get('sunsetTime')?.value;
      this.storedData.trainName = this.form808.get('trainName')?.value;
    }
  
    // update the localStorage with the updated storedData
    localStorage.setItem('formData', JSON.stringify(this.storedData));
  
    this.router.navigate(['/passengersData']);
  }

  updateFormWithTrain804Info() {
    if (this.form804) {
        this.storedData.selectedHour = this.form804.get('selectedHour')?.value;
        this.storedData.sunsetTime = this.form804.get('sunsetTime')?.value;
        this.storedData.trainName = this.form804.get('trainName')?.value;
    }

    localStorage.setItem('formData', JSON.stringify(this.storedData))

    this.router.navigate(['/passengersData'])
  }

}
