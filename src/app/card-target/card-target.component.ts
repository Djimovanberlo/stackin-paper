import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardTarget } from '../card';

@Component({
  selector: 'card-target',
  imports: [CardComponent],
  templateUrl: './card-target.component.html',
  styleUrl: './card-target.component.scss',
})
export class CardTargetComponent {
  @Input({ required: true }) card?: CardTarget;
}
