import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-stack',
  imports: [CardComponent],
  templateUrl: './card-stack.component.html',
  styleUrl: './card-stack.component.scss',
})
export class CardStackComponent {}
