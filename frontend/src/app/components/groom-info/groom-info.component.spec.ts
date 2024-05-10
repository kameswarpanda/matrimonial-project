import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomInfoComponent } from './groom-info.component';

describe('GroomInfoComponent', () => {
  let component: GroomInfoComponent;
  let fixture: ComponentFixture<GroomInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroomInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
