import { Component, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-timestamp',
  templateUrl: './counter-timestamp.component.html',
  styleUrls: ['./counter-timestamp.component.scss']
})
export class CounterTimestampComponent implements OnInit {

  timeList: string[] = [];

  subscription: SubscriptionLike;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.subscription = this.counterService.getStartPauseData().subscribe((data) => {
      if (data && data.length) {
        if (data[0] === 'timerStarted') {
          const date = new Date();
          const stringDate = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + this.formatAMPM(date);
          this.counterService.timerDateData.push(`Started at ${stringDate}`);
        } else if (data[0] === 'timerPaused') {
          const date = new Date();
          const stringDate = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + this.formatAMPM(date);
          this.counterService.timerDateData.push(`Paused at ${stringDate}`);
        }
      }
    });
  }

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
