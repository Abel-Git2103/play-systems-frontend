import { TestBed } from '@angular/core/testing';

import { SeuneService } from './seune.service';

describe('SeuneService', () => {
  let service: SeuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
