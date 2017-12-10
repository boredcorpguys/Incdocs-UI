import { TestBed, inject } from '@angular/core/testing';

import { AdminFetchCurrentRmsService } from './admin-fetch-current-rms.service';

describe('AdminFetchCurrentRmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFetchCurrentRmsService]
    });
  });

  it('should be created', inject([AdminFetchCurrentRmsService], (service: AdminFetchCurrentRmsService) => {
    expect(service).toBeTruthy();
  }));
});
