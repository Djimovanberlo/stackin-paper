import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public targetCards = signal([]);
  public playerCards = signal([]);
  public score = signal(0);

  static updateCards() {}
}
