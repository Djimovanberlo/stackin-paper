import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-target',
  imports: [CardComponent],
  templateUrl: './card-target-preview.component.html',
  styleUrl: './card-target-preview.component.scss',
})
export class CardTargetPreviewComponent {}
