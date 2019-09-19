import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsPrivacyComponent } from './conditions-privacy.component';

describe('ConditionsPrivacyComponent', () => {
  let component: ConditionsPrivacyComponent;
  let fixture: ComponentFixture<ConditionsPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
