import { CardPlayer, CardTargetStack } from './card';
import { GameColour } from './game-colour';

export const mockTargetCards: CardTargetStack[] = [
  {
    colour: GameColour.Red,
    cards: [
      {
        colour: GameColour.Red,
        value: 1,
      },
      {
        colour: GameColour.Red,
        value: 1,
      },
    ],
  },
  {
    colour: GameColour.Blue,
    cards: [
      {
        colour: GameColour.Blue,
        value: 1,
      },
      {
        colour: GameColour.Blue,
        value: 1,
      },
    ],
  },
];

export const mockPlayerCards: CardPlayer[] = [];
