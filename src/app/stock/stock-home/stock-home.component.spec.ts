import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHomeComponent } from './stock-home.component';

describe('StockHomeComponent', () => {
  let component: StockHomeComponent;
  let fixture: ComponentFixture<StockHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
