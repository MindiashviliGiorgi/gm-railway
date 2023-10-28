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
  passForm: FormGroup;
  redd: boolean = false;
  choiceTrain: boolean = true;

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
      trainClass: [''],
      trainPlace: [''], 
    });
    // create new passengerForm for add in passengers Array
    this.passForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      personalNumber: ['']
    });


  }

  ngOnInit(): void {}

  addContact() {
    this.storedData.email = this.myForm.get('email')?.value;
    this.storedData.phoneNumber = this.myForm.get('phoneNumber')?.value;
    console.log(this.storedData)
  }

  addPassenger() {
    // create passengers Array as FormArray from myForm
    const passengers = this.myForm.get('passengers') as FormArray;
    // create newPassenger as a passForm.Value Object
    const newPassenger = this.formBuilder.group(this.passForm.value);
    // Add an 'id' property to the passenger object and set it to the current index
    newPassenger.addControl('id', new FormControl(passengers.length));
    // push that newPassenger object in passengers array
    passengers.push(newPassenger);

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;

    this.choiceTrain = false;
  }

  generatePeople(people : number): number[] {
    return Array.from({ length: people }, (index, i) => i + 1);
  }
  // DOM all places Div
  @ViewChild('placeDivsA', { static: true }) placeDivsA!: ElementRef;
  @ViewChild('placeDivsB', { static: true }) placeDivsB!: ElementRef;
  selectedDiv: HTMLDivElement | null = null;

  // classList add and remove to choiced Div
  toggleRed(event: Event, div: HTMLDivElement) {
    if (this.selectedDiv) {
      this.selectedDiv.classList.remove('get-red');
    }
    this.selectedDiv = div;
    div.classList.add('get-red');
    // Update the trainPlace property in the myForm with the value of the clicked div
    this.myForm.get('trainPlace')?.setValue(div.textContent?.trim() || '');

    localStorage.setItem('formData', JSON.stringify(this.storedData));

    this.storedData = this.myForm.value;
    console.log(this.storedData)
  }
  ngAfterViewInit() {
    const divElementsA = this.placeDivsA.nativeElement.querySelectorAll('.place-a');
    divElementsA.forEach((div: HTMLDivElement) => {
      div.addEventListener('click', (event) => this.toggleRed(event, div));
    });

    const divElementsB = this.placeDivsB.nativeElement.querySelectorAll('.place-b');
    divElementsB.forEach((div: HTMLDivElement) => {
      div.addEventListener('click', (event) => this.toggleRed(event, div));
    });
  }

}
