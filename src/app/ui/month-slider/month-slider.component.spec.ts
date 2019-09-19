import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSliderComponent } from './month-slider.component';

describe('MonthSliderComponent', () => {
  let component: MonthSliderComponent;
  let fixture: ComponentFixture<MonthSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
