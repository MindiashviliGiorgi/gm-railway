import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTicketPageComponent } from './check-ticket-page.component';

describe('CheckTicketPageComponent', () => {
  let component: CheckTicketPageComponent;
  let fixture: ComponentFixture<CheckTicketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckTicketPageComponent]
    });
    fixture = TestBed.createComponent(CheckTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
