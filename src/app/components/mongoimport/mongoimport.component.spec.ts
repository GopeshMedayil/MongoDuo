import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoimportComponent } from './mongoimport.component';

describe('MongoimportComponent', () => {
  let component: MongoimportComponent;
  let fixture: ComponentFixture<MongoimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
