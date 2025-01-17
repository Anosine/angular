import { TestBed } from '@angular/core/testing';

import { ErorrPopService } from './erorr-pop.service';

describe('ErorrPopService', () => {
  let service: ErorrPopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErorrPopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
