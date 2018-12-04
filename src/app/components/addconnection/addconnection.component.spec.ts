import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconnectionComponent } from './addconnection.component';

describe('AddconnectionComponent', () => {
  let component: AddconnectionComponent;
  let fixture: ComponentFixture<AddconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
