import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBarComponent } from './statistics-bar.component';

describe('StatisticsBarComponent', () => {
  let component: StatisticsBarComponent;
  let fixture: ComponentFixture<StatisticsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
