import { Injectable, signal } from '@angular/core';
import { mockPlayerCards, mockTargetCards } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public targetCardsStacks = signal(mockTargetCards);
  public playerCards = signal(mockPlayerCards);
  public score = signal(0);

  static updateCards() {}
}
