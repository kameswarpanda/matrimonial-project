import { TestBed } from '@angular/core/testing';

import { ProfessionalInfoService } from './professional-info.service';

describe('ProfessionalInfoService', () => {
  let service: ProfessionalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
