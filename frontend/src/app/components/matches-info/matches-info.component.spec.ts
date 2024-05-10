import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesInfoComponent } from './matches-info.component';

describe('MatchesInfoComponent', () => {
  let component: MatchesInfoComponent;
  let fixture: ComponentFixture<MatchesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
