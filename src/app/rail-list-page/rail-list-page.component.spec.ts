import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailListPageComponent } from './rail-list-page.component';

describe('RailListPageComponent', () => {
  let component: RailListPageComponent;
  let fixture: ComponentFixture<RailListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RailListPageComponent]
    });
    fixture = TestBed.createComponent(RailListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
