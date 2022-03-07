import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infoAccept = '';
  title = 'componentsLab';
  getAcceptInfo(val) {
    console.log('chaaaa', val);
    this.infoAccept = val
  }
}
