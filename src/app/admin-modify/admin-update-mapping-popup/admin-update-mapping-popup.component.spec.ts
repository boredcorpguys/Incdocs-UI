import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateMappingPopupComponent } from './admin-update-mapping-popup.component';

describe('AdminUpdateMappingPopupComponent', () => {
  let component: AdminUpdateMappingPopupComponent;
  let fixture: ComponentFixture<AdminUpdateMappingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateMappingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateMappingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
