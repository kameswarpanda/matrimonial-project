import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesComponent } from './brides.component';

describe('BridesComponent', () => {
  let component: BridesComponent;
  let fixture: ComponentFixture<BridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
