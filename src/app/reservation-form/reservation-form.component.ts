import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {
  myForm : any;

  constructor(private formBuilder: FormBuilder, private router : Router) {
    this.myForm = this.formBuilder.group({
      from: [''],
      to: [''],
      date: [''],
      people: [],
    });
  }

  ngOnInit():void {}


  onSubmit(){
    const formData = this.myForm.value;

    // Check if the data exists in localStorage
    const storedDataString = localStorage.getItem('formData');
    const storedData = storedDataString ? JSON.parse(storedDataString) : {};
  
    // Merge the new form data with existing data
    const mergedData = { ...storedData, ...formData };
  
    // Save the merged data back to localStorage
    localStorage.setItem('formData', JSON.stringify(mergedData));
  
    this.router.navigate(['/railsList']);
  }

}
