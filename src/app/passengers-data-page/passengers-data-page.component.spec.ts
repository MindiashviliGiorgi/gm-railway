import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersDataPageComponent } from './passengers-data-page.component';

describe('PassengersDataPageComponent', () => {
  let component: PassengersDataPageComponent;
  let fixture: ComponentFixture<PassengersDataPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengersDataPageComponent]
    });
    fixture = TestBed.createComponent(PassengersDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
