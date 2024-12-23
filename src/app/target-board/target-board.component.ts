import { Component, computed, inject } from '@angular/core';
import { GameService } from '../game.service';
import { CardTargetStackComponent } from '../card-stack/card-target-stack.component';

@Component({
  selector: 'target-board',
  imports: [CardTargetStackComponent],
  templateUrl: './target-board.component.html',
  styleUrl: './target-board.component.scss',
})
export class TargetBoardComponent {
  private gameService = inject(GameService);
  targetCardsStacks = computed(() => this.gameService.targetCardsStacks());
}
