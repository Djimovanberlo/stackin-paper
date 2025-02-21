import { computed, Injectable, signal } from '@angular/core';
import { CardPlayer, CardTarget } from './card';
import { GameColour } from './game-colour';
import { initTargetCards } from './init-data';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public score = signal(0);
  public playerCards = signal<CardPlayer[]>([]);
  public targetCardsStacks = signal(initTargetCards);
  public nextTargetCard = signal(this.generateRandomTargetCard());

  public isGameLost = computed(() => {
    return this.targetCardsStacks().some((stack) => stack.cards.length > 3);
  });

  ngOnInit() {
    console.log('TEST SERVICE');
  }

  public playCard(playedCard: CardPlayer): void {
    this.targetCardsStacks.update((stacks) => {
      return stacks.map((s) => {
        if (s.colour !== playedCard.colour) {
          return s;
        }

        const filteredCards = s.cards.filter(
          (c) => !playedCard.values.some((v) => v === c.value)
        );

        this.score.update(
          (score) => score + (s.cards.length - filteredCards.length)
        );

        return {
          ...s,
          cards: filteredCards,
        };
      });
    });

    // initialise player cards for new round ↓
    this.playerCards.update((cards) => {
      const newPlayerCard = this.generateRandomPlayerCard();
      return [...cards.filter((c) => c !== playedCard), newPlayerCard];
    });

    // initialise target cards for new round ↓
    const newTargetCard = this.nextTargetCard();
    this.updateTargetCardsStacks(newTargetCard);

    const nextTargetCard = this.generateRandomTargetCard();
    this.nextTargetCard.set(nextTargetCard);
  }

  public updatePlayerCards(): void {
    const newPlayerCard = this.generateRandomPlayerCard();
    this.playerCards.update((cards) => [...cards, newPlayerCard]);
  }

  public initialiseGame(): void {
    // target cards
    const initTargetCard = this.generateRandomTargetCard();
    this.updateTargetCardsStacks(initTargetCard);

    // playercards
    const playerCardsAmount = 2;
    const playerCards = new Array(playerCardsAmount)
      .fill(null)
      .map(() => this.generateRandomPlayerCard());
    this.playerCards.set(playerCards);
  }

  private updateTargetCardsStacks(newTargetCard: CardTarget): void {
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
    const valuesAmount = 2;
    const uniqueValues = new Set<number>();

    while (uniqueValues.size < valuesAmount) {
      uniqueValues.add(this.generateRandomValue());
    }

    return {
      colour: this.generateRandomColour(),
      values: Array.from(uniqueValues),
    };
  }

  private generateRandomTargetCard(): CardTarget {
    return {
      colour: this.generateRandomColour(),
      value: this.generateRandomValue(),
    };
  }
}
