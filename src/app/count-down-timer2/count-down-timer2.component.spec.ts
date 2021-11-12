import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimer2Component } from './count-down-timer2.component';

describe('CountDownTimer2Component', () => {
  let component: CountDownTimer2Component;
  let fixture: ComponentFixture<CountDownTimer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
