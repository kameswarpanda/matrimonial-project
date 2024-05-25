import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReportComponent } from './contact-report.component';

describe('ContactReportComponent', () => {
  let component: ContactReportComponent;
  let fixture: ComponentFixture<ContactReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
