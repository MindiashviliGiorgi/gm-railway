import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitRegistrationPageComponent } from './debit-registration-page.component';

describe('DebitRegistrationPageComponent', () => {
  let component: DebitRegistrationPageComponent;
  let fixture: ComponentFixture<DebitRegistrationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebitRegistrationPageComponent]
    });
    fixture = TestBed.createComponent(DebitRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
