import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDataComponent implements OnInit {

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(index) {
    if (index >= 0) {
      alert(index);
    }
  }

}
