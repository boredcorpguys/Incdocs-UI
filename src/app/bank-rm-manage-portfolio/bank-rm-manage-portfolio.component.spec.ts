import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRmManagePortfolioComponent } from './bank-rm-manage-portfolio.component';

describe('BankRmManagePortfolioComponent', () => {
  let component: BankRmManagePortfolioComponent;
  let fixture: ComponentFixture<BankRmManagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRmManagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRmManagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
