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
  myForm: any;

  constructor(private formBuilder: FormBuilder, private router : Router) {
    this.myForm = this.formBuilder.group({
      from: [''],
      to: [''],
      date: [''],
      people: [0],
    });
  }

  ngOnInit():void {}


  onSubmit(){
    console.log(this.myForm.value)
    this.router.navigate(['/railsList'])

  }

}
