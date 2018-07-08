import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleColorComponent } from './circle-color.component';

describe('CircleColorComponent', () => {
  let component: CircleColorComponent;
  let fixture: ComponentFixture<CircleColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
