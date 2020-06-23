import { TestBed } from '@angular/core/testing';

import { ToxServiceService } from './tox-service.service';

describe('ToxServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToxServiceService = TestBed.get(ToxServiceService);
    expect(service).toBeTruthy();
  });
});
