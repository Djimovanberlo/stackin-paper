import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardPlayer } from '../card';

@Component({
  selector: 'app-card-player',
  imports: [CardComponent],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss',
})
export class CardPlayerComponent {
  readonly card = input.required<CardPlayer>();
}
