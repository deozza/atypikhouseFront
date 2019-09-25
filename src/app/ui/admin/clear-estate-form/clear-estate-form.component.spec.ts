import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearEstateFormComponent } from './clear-estate-form.component';

describe('ClearEstateFormComponent', () => {
  let component: ClearEstateFormComponent;
  let fixture: ComponentFixture<ClearEstateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearEstateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearEstateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
