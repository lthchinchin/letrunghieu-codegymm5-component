import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  @Output() acceptEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  acceptNameCard(para) {
    console.log('da click', para);
    this.acceptEvent.emit(para);

  }

}
