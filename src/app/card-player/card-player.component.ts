import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-player',
  imports: [CardComponent],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss',
})
export class CardPlayerComponent {}
