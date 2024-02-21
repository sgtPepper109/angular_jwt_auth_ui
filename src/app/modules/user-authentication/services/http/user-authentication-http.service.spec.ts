import { TestBed } from '@angular/core/testing';

import { UserAuthenticationHttpService } from './user-authentication-http.service';

describe('UserAuthenticationHttpService', () => {
  let service: UserAuthenticationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthenticationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
