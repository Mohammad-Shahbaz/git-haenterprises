import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstdetailsComponent } from './constdetails.component';

describe('ConstdetailsComponent', () => {
  let component: ConstdetailsComponent;
  let fixture: ComponentFixture<ConstdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
