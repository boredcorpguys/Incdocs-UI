import { TestBed, inject } from '@angular/core/testing';

import { BankRmChangeGhService } from './bank-rm-change-gh.service';

describe('BankRmChangeGhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankRmChangeGhService]
    });
  });

  it('should be created', inject([BankRmChangeGhService], (service: BankRmChangeGhService) => {
    expect(service).toBeTruthy();
  }));
});
