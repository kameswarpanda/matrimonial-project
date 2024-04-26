import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBookingComponent } from './location-booking.component';

describe('LocationBookingComponent', () => {
  let component: LocationBookingComponent;
  let fixture: ComponentFixture<LocationBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
