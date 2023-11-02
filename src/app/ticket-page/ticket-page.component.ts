import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  

  storedData: any = {};

  constructor(private formBuilder : FormBuilder, private router : Router) {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString)
    };
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
