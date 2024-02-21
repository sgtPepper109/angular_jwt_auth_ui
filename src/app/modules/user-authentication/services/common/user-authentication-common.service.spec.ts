import { TestBed } from '@angular/core/testing';

import { UserAuthenticationCommonService } from './user-authentication-common.service';

describe('UserAuthenticationCommonService', () => {
  let service: UserAuthenticationCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthenticationCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
