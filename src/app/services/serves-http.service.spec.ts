import { TestBed } from '@angular/core/testing';

import { ServesHttpService } from './serves-http.service';

describe('ServesHttpService', () => {
  let service: ServesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
