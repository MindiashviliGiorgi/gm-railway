import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { HomePageDecorationComponent } from './home-page-decoration/home-page-decoration.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RailListPageComponent } from './rail-list-page/rail-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengersDataPageComponent } from './passengers-data-page/passengers-data-page.component';
import { DebitRegistrationPageComponent } from './debit-registration-page/debit-registration-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { CheckTicketPageComponent } from './check-ticket-page/check-ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ReservationFormComponent,
    HomePageDecorationComponent,
    FooterComponent,
    RailListPageComponent,
    PassengersDataPageComponent,
    DebitRegistrationPageComponent,
    TicketPageComponent,
    CheckTicketPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
