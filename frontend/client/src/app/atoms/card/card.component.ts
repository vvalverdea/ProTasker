import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() gradient = 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)';
}
