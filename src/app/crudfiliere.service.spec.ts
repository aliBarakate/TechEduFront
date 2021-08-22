import { TestBed } from '@angular/core/testing';

import { CrudfiliereService } from './crud.service';

describe('CrudfiliereService', () => {
  let service: CrudfiliereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudfiliereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
