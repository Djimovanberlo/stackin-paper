import { computed, Injectable, signal } from '@angular/core';
import { mockPlayerCards, mockTargetCards } from './mock-data';
import { CardPlayer, CardTarget } from './card';
import { GameColour } from './game-colour';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public score = signal(0);
  public playerCards = signal(mockPlayerCards);
  public targetCardsStacks = signal(mockTargetCards);
  public nextTargetCard = signal(null); // TODO

  public isGameLost = computed(() => {
    return this.targetCardsStacks().some((stack) => stack.cards.length > 3); // TODO
  });

  public updateScore(newScore: number): void {
    this.score.set(newScore);
  }

  public updatePlayerCards(): void {
    const newPlayerCard = this.generateRandomPlayerCard();
    this.playerCards.update((cards) => [...cards, newPlayerCard]);
  }

  public updateTargetCardsStacks(): void {
    const newTargetCard = this.generateRandomTargetCard();

    this.targetCardsStacks.update((stacks) => {
      let matchingStackFound = false;

      const updatedStacks = stacks.map((stack) => {
        if (stack.colour === newTargetCard.colour) {
          matchingStackFound = true;
          return {
            ...stack,
            cards: [...stack.cards, newTargetCard],
          };
        }
        return stack;
      });

      if (!matchingStackFound) {
        updatedStacks.push({
          colour: newTargetCard.colour,
          cards: [newTargetCard],
        });
      }

      return updatedStacks;
    });
  }

  private generateRandomValue(): number {
    return Math.floor(Math.random() * 3) + 1; // 1-3
  }

  private generateRandomColour(): GameColour {
    const colours = Object.values(GameColour);
    return colours[Math.floor(Math.random() * colours.length)];
  }

  private generateRandomPlayerCard(): CardPlayer {
    const valuesAmount = 3;
    const values = new Array(valuesAmount)
      .fill(null)
      .map(this.generateRandomValue);

    return {
      colour: this.generateRandomColour(),
      values,
    };
  }

  private generateRandomTargetCard(): CardTarget {
    return {
      colour: this.generateRandomColour(),
      value: this.generateRandomValue(),
    };
  }
}
