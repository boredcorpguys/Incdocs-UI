import { TestBed, inject } from '@angular/core/testing';

import { AdminFetchCurrentMappingsService } from './admin-fetch-current-mappings.service';

describe('AdminFetchCurrentMappingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFetchCurrentMappingsService]
    });
  });

  it('should be created', inject([AdminFetchCurrentMappingsService], (service: AdminFetchCurrentMappingsService) => {
    expect(service).toBeTruthy();
  }));
});
