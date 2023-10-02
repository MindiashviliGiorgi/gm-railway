import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDecorationComponent } from './home-page-decoration.component';

describe('HomePageDecorationComponent', () => {
  let component: HomePageDecorationComponent;
  let fixture: ComponentFixture<HomePageDecorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageDecorationComponent]
    });
    fixture = TestBed.createComponent(HomePageDecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
