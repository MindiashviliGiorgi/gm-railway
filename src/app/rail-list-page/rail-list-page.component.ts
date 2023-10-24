import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rail-list-page',
  templateUrl: './rail-list-page.component.html',
  styleUrls: ['./rail-list-page.component.scss']
})
export class RailListPageComponent {

  storedData: any = {};

  constructor() {
    const storedDataString = localStorage.getItem('formData');
    if (storedDataString) {
      this.storedData = JSON.parse(storedDataString)
    }
  }

  ngOnInit():void {

  }

}
