import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteInfoComponent } from './caste-info.component';

describe('CasteInfoComponent', () => {
  let component: CasteInfoComponent;
  let fixture: ComponentFixture<CasteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasteInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
