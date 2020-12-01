import { TestBed } from '@angular/core/testing';

import { DepartuserService } from './departuser.service';

describe('DepartuserService', () => {
  let service: DepartuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
