import { TestBed, inject } from '@angular/core/testing';

import { AdminFetchCurrentCompaniesService } from './admin-fetch-current-companies.service';

describe('AdminFetchCurrentCompaniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFetchCurrentCompaniesService]
    });
  });

  it('should be created', inject([AdminFetchCurrentCompaniesService], (service: AdminFetchCurrentCompaniesService) => {
    expect(service).toBeTruthy();
  }));
});
