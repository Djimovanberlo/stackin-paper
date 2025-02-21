import { CardPlayer, CardTargetStack } from './card';
import { GameColour } from './game-colour';

export const initTargetCards: CardTargetStack[] = [
  {
    colour: GameColour.Orange,
    cards: [],
  },
  {
    colour: GameColour.Purple,
    cards: [],
  },
  {
    colour: GameColour.Green,
    cards: [],
  },
];
