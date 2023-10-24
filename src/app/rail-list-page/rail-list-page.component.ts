import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder) {
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
      this.myForm.patchValue({
        selectedHour: this.form812.get('selectedHour')?.value,
        sunsetTime: this.form812.get('sunsetTime')?.value,
        trainName: this.form812.get('trainName')?.value,
      });
    }
    console.log(this.myForm.value)
  }
  updateFormWithTrain808Info() {
    if (this.form808) {
      this.myForm.patchValue({
        selectedHour: this.form808.get('selectedHour')?.value,
        sunsetTime: this.form808.get('sunsetTime')?.value,
        trainName: this.form808.get('trainName')?.value,
      });
    }
    console.log(this.myForm.value)
  }
  updateFormWithTrain804Info() {
    if (this.form804) {
      this.myForm.patchValue({
        selectedHour: this.form804.get('selectedHour')?.value,
        sunsetTime: this.form804.get('sunsetTime')?.value,
        trainName: this.form804.get('trainName')?.value,
      });
    }
    console.log(this.myForm.value)
  }

}
