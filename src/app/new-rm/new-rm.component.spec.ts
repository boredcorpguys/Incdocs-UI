import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRmComponent } from './new-rm.component';

describe('NewRmComponent', () => {
  let component: NewRmComponent;
  let fixture: ComponentFixture<NewRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
