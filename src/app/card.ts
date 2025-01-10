import { GameColour } from './game-colour';

export interface CardTarget {
  colour: GameColour;
  value: number;
}

export interface CardTargetStack {
  colour: GameColour;
  cards: CardTarget[];
}

export interface CardPlayer {
  colour: GameColour;
  values: number[];
}
