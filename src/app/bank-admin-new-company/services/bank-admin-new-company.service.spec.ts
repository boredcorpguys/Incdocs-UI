import { TestBed, inject } from '@angular/core/testing';

import { BankAdminNewCompanyService } from './bank-admin-new-company.service';

describe('BankAdminNewCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankAdminNewCompanyService]
    });
  });

  it('should be created', inject([BankAdminNewCompanyService], (service: BankAdminNewCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
