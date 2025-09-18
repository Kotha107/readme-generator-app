import { TestBed } from '@angular/core/testing';

import { ReadmedataService } from './readmedata.service';

describe('ReadmedataService', () => {
  let service: ReadmedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadmedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
