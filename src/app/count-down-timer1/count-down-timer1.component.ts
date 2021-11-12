import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-count-down-timer1',
  templateUrl: './count-down-timer1.component.html',
  styleUrls: ['./count-down-timer1.component.scss']
})
export class CountDownTimer1Component implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  timerStarted() {
    this.counterService.timerStartCount++;
    const date = new Date();
    const stringDate = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + this.formatAMPM(date);
    this.counterService.timerDateData.push(`Started at ${stringDate}`);
  }

  timerPaused() {
    this.counterService.timerStopCount++;
    const date = new Date();
    const stringDate = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + this.formatAMPM(date);
    this.counterService.timerDateData.push(`Paused at ${stringDate}`);
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

}
