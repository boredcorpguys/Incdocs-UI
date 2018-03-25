import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminNewUserComponent } from './bank-admin-new-rm.component';

describe('NewRmComponent', () => {
  let component: BankAdminNewUserComponent;
  let fixture: ComponentFixture<BankAdminNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
