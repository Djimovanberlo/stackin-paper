import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card',
  imports: [CardComponent],
  templateUrl: './card-target.component.html',
  styleUrl: './card-target.component.scss',
})
export class CardTargetComponent {}
