import { Component, input } from '@angular/core';
import { CardTargetStack } from '../card';
import { CardTargetComponent } from '../card-target/card-target.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-target-stack',
  imports: [CardTargetComponent, NgStyle],
  templateUrl: './card-target-stack.component.html',
  styleUrl: './card-target-stack.component.scss',
})
export class CardTargetStackComponent {
  readonly stack = input.required<CardTargetStack>();
}
