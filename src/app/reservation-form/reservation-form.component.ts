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

  constructor(private ticketService : TicketService){}

  ngOnInit():void {}

  onSubmitFirstHalf(){
    const firstHalfData = {
      id : '',
      from : '',
      to : '',
      date : '',
      number : 0,
    };
    this.ticketService.setTicketData(firstHalfData)
  }

}
