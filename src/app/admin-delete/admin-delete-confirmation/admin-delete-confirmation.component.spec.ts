import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteConfirmationComponent } from './admin-delete-confirmation.component';

describe('AdminDeleteConfirmationComponent', () => {
  let component: AdminDeleteConfirmationComponent;
  let fixture: ComponentFixture<AdminDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
