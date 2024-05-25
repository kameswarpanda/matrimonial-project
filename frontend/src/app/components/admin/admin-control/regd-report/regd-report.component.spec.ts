import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdReportComponent } from './regd-report.component';

describe('RegdReportComponent', () => {
  let component: RegdReportComponent;
  let fixture: ComponentFixture<RegdReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegdReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
