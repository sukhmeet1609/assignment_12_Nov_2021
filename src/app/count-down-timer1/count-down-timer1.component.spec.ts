import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimer1Component } from './count-down-timer1.component';

describe('CountDownTimer1Component', () => {
  let component: CountDownTimer1Component;
  let fixture: ComponentFixture<CountDownTimer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
