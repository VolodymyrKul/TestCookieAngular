import { TestBed } from '@angular/core/testing';

import { UserreqService } from './userreq.service';

describe('UserreqService', () => {
  let service: UserreqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserreqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
