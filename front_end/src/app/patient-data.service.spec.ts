import { TestBed, inject } from '@angular/core/testing';

import { PatientDataService } from './patient-data.service';

describe('PatientDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDataService]
    });
  });

  it('should be created', inject([PatientDataService], (service: PatientDataService) => {
    expect(service).toBeTruthy();
  }));
});
