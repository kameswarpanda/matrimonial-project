import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBookingReportComponent } from './location-booking-report.component';

describe('LocationBookingReportComponent', () => {
  let component: LocationBookingReportComponent;
  let fixture: ComponentFixture<LocationBookingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationBookingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationBookingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
