import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent {
  @ViewChild('ticket', { static: false })
  el!: ElementRef;

  myForm : FormGroup;

  storedData: any = {};

  constructor(private formBuilder : FormBuilder, private router : Router) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString)
    };

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
      cardNumber : [this.storedData.cardNumber],
      validityPeriod: [this.storedData.validityPeriod],
      cvv : [this.storedData.cvv],
      cardOwner : [this.storedData.cardOwner],
      uniqueNumber: [this.storedData.uniqueNumber],
      releaseDate: [this.storedData.releaseDate]
    });

  }
  ngOnInit():void {
    console.log(this.storedData)
  }
  
  generatePdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf => {
        pdf.save("newTicket.pdf")
      })
    })
  }

  
}
