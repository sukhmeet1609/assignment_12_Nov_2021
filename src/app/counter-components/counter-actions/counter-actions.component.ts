import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { interval, Subject, PartialObserver, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  isRunning = true;
  isComplete = false;
  start: number = 0;
  inputTime: number;
  pauseData: string[] = [];
  @Output() timerStarted = new EventEmitter();
  @Output() timerPaused = new EventEmitter();
  @Input() timerType: string;

  timer$: Observable<number>;
  timerObserver: PartialObserver<number>;

  stopClick$ = new Subject();
  pauseClick$ = new Subject();

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    if (!this.inputTime) {
      this.counterService.displayCount = 1000;
    }

    this.timer$ = interval(1000)
      .pipe(
        takeUntil(this.pauseClick$),
        takeUntil(this.stopClick$)
      );
    this.pauseClick();

    this.timerObserver = {
      next: (_: number) => {
        if (this.counterService.displayCount > 0) {
          this.counterService.displayCount -= 1;
        } else {
          this.stopClick$.next();
          this.isRunning = false;
          this.isComplete = true;
        }
      }
    };
  }

  pauseClick() {
    this.pauseClick$.next();
    this.isRunning = false;
    if (!this.start) {
      this.timer$.subscribe(this.timerObserver);
      this.start++;
    } else {
      const data = 'paused on ' + this.counterService.displayCount;
      this.pauseData.push(data);
      if (this.timerType === 'timer1') {
        this.timerPaused.emit();
      } else {
        this.counterService.sendStartPauseData('timerPaused');
      }
    }
  }

  restartClick() {
    if (this.timerType === 'timer1') {
      this.timerStarted.emit();
    } else {
      this.counterService.sendStartPauseData('timerStarted');
    }
    this.isRunning = true;
    if (this.isComplete) {
      this.isComplete = false;
      this.counterService.displayCount = this.inputTime;
    }

    this.timer$.subscribe(this.timerObserver);
  }

  resetClick() {
    this.pauseClick$.next();
    this.isRunning = true;
    this.isComplete = false;
    this.start = 0;
    this.resetData();
  }

  inputBlur(event) {
    if (this.inputTime) {
      this.resetData();
    }
  }

  resetData() {
    this.pauseData = [];
    this.counterService.timerDateData = [];
    this.counterService.timerStartCount = 0;
    this.counterService.timerStopCount = 0;
    this.counterService.displayCount = this.inputTime ? this.inputTime : 1000;
  }

}
