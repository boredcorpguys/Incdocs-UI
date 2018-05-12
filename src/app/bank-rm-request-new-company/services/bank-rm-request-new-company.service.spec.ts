import { TestBed, inject } from '@angular/core/testing';

import { BankRmRequestNewCompanyService } from './bank-rm-request-new-company.service';

describe('BankRmRequestNewCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankRmRequestNewCompanyService]
    });
  });

  it('should be created', inject([BankRmRequestNewCompanyService], (service: BankRmRequestNewCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
