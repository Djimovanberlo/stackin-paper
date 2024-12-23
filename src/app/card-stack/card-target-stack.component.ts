import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardTarget } from '../card';
import { GameColour } from '../game-colour';

@Component({
  selector: 'card-target-stack',
  imports: [CardComponent],
  templateUrl: './card-target-stack.component.html',
  styleUrl: './card-target-stack.component.scss',
})
export class CardTargetStackComponent {
  @Input({ required: true }) colour: GameColour = GameColour.Red;
  @Input({ required: true }) cards: CardTarget[] = [];
}
