import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardPlayer } from '../card';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-player',
  imports: [CardComponent, NgStyle],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss',
})
export class CardPlayerComponent {
  readonly card = input.required<CardPlayer>();
}
