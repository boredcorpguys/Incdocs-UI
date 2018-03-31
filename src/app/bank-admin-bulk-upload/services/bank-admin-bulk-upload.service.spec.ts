import { TestBed, inject } from '@angular/core/testing';

import { BankAdminBulkUploadService } from './bank-admin-bulk-upload.service';

describe('BankAdminBulkUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankAdminBulkUploadService]
    });
  });

  it('should be created', inject([BankAdminBulkUploadService], (service: BankAdminBulkUploadService) => {
    expect(service).toBeTruthy();
  }));
});
