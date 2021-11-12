import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-count-down-timer2',
  templateUrl: './count-down-timer2.component.html',
  styleUrls: ['./count-down-timer2.component.scss']
})
export class CountDownTimer2Component implements OnInit {
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

}
