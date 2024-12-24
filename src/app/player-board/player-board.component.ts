import { Component, computed, inject } from '@angular/core';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-board',
  imports: [CardPlayerComponent],
  templateUrl: './player-board.component.html',
  styleUrl: './player-board.component.scss',
})
export class PlayerBoardComponent {
  private gameService = inject(GameService);
  updatePlayerCards = () => this.gameService.updatePlayerCards();

  readonly playerCards = computed(() => this.gameService.playerCards());
}
