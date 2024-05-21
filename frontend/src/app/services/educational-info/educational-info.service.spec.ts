import { TestBed } from '@angular/core/testing';

import { EducationalInfoService } from './educational-info.service';

describe('EducationalInfoService', () => {
  let service: EducationalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
