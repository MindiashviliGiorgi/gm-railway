import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RailListPageComponent } from './rail-list-page/rail-list-page.component';
import { PassengersDataPageComponent } from './passengers-data-page/passengers-data-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
