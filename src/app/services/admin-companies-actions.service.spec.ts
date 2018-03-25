import { TestBed, inject } from '@angular/core/testing';

import { AdminCompaniesActionsService } from './admin-companies-actions.service';

describe('AdminCompaniesActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCompaniesActionsService]
    });
  });

  it('should be created', inject([AdminCompaniesActionsService], (service: AdminCompaniesActionsService) => {
    expect(service).toBeTruthy();
  }));
});
