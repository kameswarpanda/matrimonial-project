import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducationalInfoComponent } from './update-educational-info.component';

describe('UpdateEducationalInfoComponent', () => {
  let component: UpdateEducationalInfoComponent;
  let fixture: ComponentFixture<UpdateEducationalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEducationalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
