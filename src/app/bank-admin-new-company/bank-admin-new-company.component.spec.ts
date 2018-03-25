import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminNewCompanyComponent } from './bank-admin-new-company.component';

describe('NewCompanyComponent', () => {
  let component: BankAdminNewCompanyComponent;
  let fixture: ComponentFixture<BankAdminNewCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminNewCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminNewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
