import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RailListPageComponent } from './rail-list-page/rail-list-page.component';
import { PassengersDataPageComponent } from './passengers-data-page/passengers-data-page.component';
import { DebitRegistrationPageComponent } from './debit-registration-page/debit-registration-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { CheckTicketPageComponent } from './check-ticket-page/check-ticket-page.component';

const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'railsList',
    component : RailListPageComponent
  },
  {
    path : 'passengersData',
    component : PassengersDataPageComponent
  },
  {
    path : 'debitRegistration',
    component : DebitRegistrationPageComponent
  },
  {
    path : 'ticketPage',
    component : TicketPageComponent
  },
  {
    path : 'checkTicket',
    component : CheckTicketPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
