import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardTarget } from '../card';

@Component({
  selector: 'app-card-target',
  imports: [CardComponent],
  templateUrl: './card-target.component.html',
  styleUrl: './card-target.component.scss',
})
export class CardTargetComponent {
  readonly card = input.required<CardTarget>();
}
