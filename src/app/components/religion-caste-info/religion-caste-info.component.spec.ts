import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionCasteInfoComponent } from './religion-caste-info.component';

describe('ReligionCasteInfoComponent', () => {
  let component: ReligionCasteInfoComponent;
  let fixture: ComponentFixture<ReligionCasteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReligionCasteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReligionCasteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
