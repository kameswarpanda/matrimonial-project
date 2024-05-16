import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbefloginComponent } from './navbeflogin.component';

describe('NavbefloginComponent', () => {
  let component: NavbefloginComponent;
  let fixture: ComponentFixture<NavbefloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbefloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbefloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
