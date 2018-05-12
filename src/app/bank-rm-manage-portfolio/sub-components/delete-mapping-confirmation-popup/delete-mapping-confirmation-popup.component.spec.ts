import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMappingConfirmationPopupComponent } from './delete-mapping-confirmation-popup.component';

describe('DeleteMappingConfirmationPopupComponent', () => {
  let component: DeleteMappingConfirmationPopupComponent;
  let fixture: ComponentFixture<DeleteMappingConfirmationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMappingConfirmationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMappingConfirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
