import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-check-ticket-page',
  templateUrl: './check-ticket-page.component.html',
  styleUrls: ['./check-ticket-page.component.scss']
})
export class CheckTicketPageComponent {

  allTickets: any = [];

  constructor(private http : HttpClient) {}

  ngOnInit():void {
    this.fetchTickets();
  }

  onFetchTickets() {
    this.fetchTickets()
  }

  private fetchTickets() {
    this.http.get('https://gmrailway-31f58-default-rtdb.europe-west1.firebasedatabase.app/tickets.json')
    .pipe(map((res) => {
      const tickets = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)) {
          tickets.push({...res[key], id : key})
        }
      }
      return tickets
    }))
    .subscribe((tickets) => {
      this.allTickets = tickets;
    })
  }

  deleteTicket(id : string) {
    this.http.delete('https://gmrailway-31f58-default-rtdb.europe-west1.firebasedatabase.app/tickets/' + id + '.json')
    .subscribe();
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }
  

}
