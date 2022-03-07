import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss']
})
export class RatingBarComponent implements OnInit {
  @Input() max = 10;
  points = [];
  currentPoint = 0
  constructor() { }

  ngOnInit(): void {
    this.createPoints()
  }
  createPoints() {
    for (var i = 1; i <= this.max; i++) {
      this.points.push(i)
    }
  }

  ratePoint(val) {
    this.currentPoint = val
    console.log('point', val);

  }

}
