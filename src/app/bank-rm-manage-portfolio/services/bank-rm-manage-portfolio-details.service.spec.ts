import { TestBed, inject } from '@angular/core/testing';

import { BankRmManagePortfolioDetailsService } from './bank-rm-manage-portfolio-details.service';

describe('BankRmManagePortfolioDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankRmManagePortfolioDetailsService]
    });
  });

  it('should be created', inject([BankRmManagePortfolioDetailsService], (service: BankRmManagePortfolioDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
