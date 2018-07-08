import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsListBarComponent } from './statistics-list-bar.component';

describe('StatisticsListBarComponent', () => {
  let component: StatisticsListBarComponent;
  let fixture: ComponentFixture<StatisticsListBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsListBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
