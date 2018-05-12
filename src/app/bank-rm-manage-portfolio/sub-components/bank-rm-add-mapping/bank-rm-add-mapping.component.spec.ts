import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRmAddMappingComponent } from './bank-rm-add-mapping.component';

describe('BankRmAddMappingComponent', () => {
  let component: BankRmAddMappingComponent;
  let fixture: ComponentFixture<BankRmAddMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRmAddMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRmAddMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
