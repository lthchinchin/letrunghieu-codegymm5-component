import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() time = 5;
  interval = null;
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  startCountDown() {
    this.count = this.time
    this.interval = setInterval(() => {
      console.log(this.count);
      this.count = this.count - 1;
      if (this.count == 0) {
        clearInterval(this.interval);
        alert('Complete !')
      }
    }, 1000);
  }
  stopCountDown() {

  }
  resetCountDown() {
    clearInterval(this.interval);

  }

}
