import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-ratingbar',
  templateUrl: './ratingbar.component.html',
  styleUrls: ['./ratingbar.component.css']
})
export class RatingbarComponent implements OnInit {
  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;
  ratingUnits: IRatingUnit[] = [];

  constructor() {
  }

  ngOnInit() {
    this.ratingUnits = Array.from({length: this.max},
      (_, index) => ({
        value: index + 1,
        active: index < this.ratingValue
      }));
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

}
