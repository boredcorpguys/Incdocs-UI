import { TestBed, inject } from '@angular/core/testing';

import { BankAdminNewUserService } from './bank-admin-new-user.service';

describe('BankAdminNewUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankAdminNewUserService]
    });
  });

  it('should be created', inject([BankAdminNewUserService], (service: BankAdminNewUserService) => {
    expect(service).toBeTruthy();
  }));
});
