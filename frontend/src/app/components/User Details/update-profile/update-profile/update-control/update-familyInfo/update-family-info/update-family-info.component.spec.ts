import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamilyInfoComponent } from './update-family-info.component';

describe('UpdateFamilyInfoComponent', () => {
  let component: UpdateFamilyInfoComponent;
  let fixture: ComponentFixture<UpdateFamilyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFamilyInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFamilyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
