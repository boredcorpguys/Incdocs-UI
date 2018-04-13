import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminCreateNewUserPopupComponent } from './bank-admin-create-new-user-popup.component';

describe('BankAdminCreateNewUserPopupComponent', () => {
  let component: BankAdminCreateNewUserPopupComponent;
  let fixture: ComponentFixture<BankAdminCreateNewUserPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminCreateNewUserPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminCreateNewUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
