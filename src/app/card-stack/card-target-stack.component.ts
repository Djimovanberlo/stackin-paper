import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-stack',
  imports: [CardComponent],
  templateUrl: './card-target-stack.component.html',
  styleUrl: './card-target-stack.component.scss',
})
export class CardStackComponent {}
