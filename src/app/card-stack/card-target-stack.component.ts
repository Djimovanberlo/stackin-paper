import { Component, input } from '@angular/core';
import { CardTargetStack } from '../card';
import { GameColour } from '../game-colour';
import { CardTargetComponent } from '../card-target/card-target.component';

@Component({
  selector: 'app-card-target-stack',
  imports: [CardTargetComponent],
  templateUrl: './card-target-stack.component.html',
  styleUrl: './card-target-stack.component.scss',
})
export class CardTargetStackComponent {
  readonly stack = input.required<CardTargetStack>();
}
