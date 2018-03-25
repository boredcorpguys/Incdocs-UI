import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteMappingConfirmationComponent } from './admin-delete-mapping-confirmation.component';

describe('AdminDeleteMappingConfirmationComponent', () => {
  let component: AdminDeleteMappingConfirmationComponent;
  let fixture: ComponentFixture<AdminDeleteMappingConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteMappingConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteMappingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
