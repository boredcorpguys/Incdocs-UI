import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserModifyPopupComponent } from './admin-user-modify-popup.component';

describe('AdminUserModifyPopupComponent', () => {
  let component: AdminUserModifyPopupComponent;
  let fixture: ComponentFixture<AdminUserModifyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserModifyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserModifyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
