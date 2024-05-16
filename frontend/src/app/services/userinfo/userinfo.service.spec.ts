import { TestBed } from '@angular/core/testing';
import { UserInfoService } from './userinfo.service';



describe('UserinfoService', () => {
  let service: UserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
