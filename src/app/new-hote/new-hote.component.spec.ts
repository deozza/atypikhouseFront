import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHoteComponent } from './new-hote.component';

describe('NewHoteComponent', () => {
  let component: NewHoteComponent;
  let fixture: ComponentFixture<NewHoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
