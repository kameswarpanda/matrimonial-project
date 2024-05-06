import { TestBed } from '@angular/core/testing';

import { FamilyInfoService } from './family-info.service';

describe('FamilyInfoService', () => {
  let service: FamilyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
