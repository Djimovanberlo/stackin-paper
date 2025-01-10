import { CardTargetStack } from './card';
import { GameColour } from './game-colour';

export const initTargetCards: CardTargetStack[] = [
  {
    colour: GameColour.Red,
    cards: [],
  },
  {
    colour: GameColour.Blue,
    cards: [],
  },
  {
    colour: GameColour.Green,
    cards: [],
  },
];
