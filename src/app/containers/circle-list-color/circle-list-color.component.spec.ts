import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleListColorComponent } from './circle-list-color.component';

describe('CircleListColorComponent', () => {
  let component: CircleListColorComponent;
  let fixture: ComponentFixture<CircleListColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleListColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleListColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
