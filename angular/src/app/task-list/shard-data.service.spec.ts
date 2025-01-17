import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shard-data.service';

describe('ShardDataService', () => {
  let service: SharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
