import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRmRequestNewCompanyComponent } from './bank-rm-request-new-company.component';

describe('BankRmRequestNewCompanyComponent', () => {
  let component: BankRmRequestNewCompanyComponent;
  let fixture: ComponentFixture<BankRmRequestNewCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRmRequestNewCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRmRequestNewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
