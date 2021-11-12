import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimestampComponent } from './counter-timestamp.component';

describe('CounterTimestampComponent', () => {
  let component: CounterTimestampComponent;
  let fixture: ComponentFixture<CounterTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTimestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
