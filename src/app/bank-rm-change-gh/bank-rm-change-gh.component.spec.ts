import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRmChangeGhComponent } from './bank-rm-change-gh.component';

describe('BankRmChangeGhComponent', () => {
  let component: BankRmChangeGhComponent;
  let fixture: ComponentFixture<BankRmChangeGhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRmChangeGhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRmChangeGhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
