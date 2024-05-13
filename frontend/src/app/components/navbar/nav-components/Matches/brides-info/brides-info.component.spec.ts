import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesInfoComponent } from './brides-info.component';

describe('BridesInfoComponent', () => {
  let component: BridesInfoComponent;
  let fixture: ComponentFixture<BridesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridesInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BridesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
