import { Component, computed, inject } from '@angular/core';
import { CardTargetStackComponent } from '../card-stack/card-target-stack.component';
import { GameService } from '../game.service';

@Component({
  selector: 'game-board',
  imports: [CardTargetStackComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  private gameService = inject(GameService);
  targetCardsStacks = computed(() => this.gameService.targetCardsStacks());

  ngOnInit() {
    console.log('TEST', this.targetCardsStacks());
  }
}
