import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdminBulkUploadComponent } from './bank-admin-bulk-upload.component';

describe('AdminBulkUploadComponent', () => {
  let component: BankAdminBulkUploadComponent;
  let fixture: ComponentFixture<BankAdminBulkUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAdminBulkUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAdminBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
