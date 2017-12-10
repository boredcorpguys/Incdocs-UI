import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRouteToMappingsConfirmationComponent } from './admin-route-to-mappings-confirmation.component';

describe('AdminRouteToMappingsConfirmationComponent', () => {
  let component: AdminRouteToMappingsConfirmationComponent;
  let fixture: ComponentFixture<AdminRouteToMappingsConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRouteToMappingsConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRouteToMappingsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
