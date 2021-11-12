import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-count',
  templateUrl: './counter-count.component.html',
  styleUrls: ['./counter-count.component.scss']
})
export class CounterCountComponent implements OnInit, OnDestroy {

  subscription: SubscriptionLike;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getStartPauseData().subscribe((data) => {
      if (data && data.length) {
        if (data[0] === 'timerStarted') {
          this.counterService.timerStartCount++;
        } else if (data[0] === 'timerPaused') {
          this.counterService.timerStopCount++;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
