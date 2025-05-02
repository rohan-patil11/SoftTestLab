import { TestBed } from '@angular/core/testing';

import { ApplyPageServiceService } from './apply-page-service.service';

describe('ApplyPageServiceService', () => {
  let service: ApplyPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
