import { Component, inject } from '@angular/core';
import { PlayerBoardComponent } from '../player-board/player-board.component';
import { TargetBoardComponent } from '../target-board/target-board.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  imports: [PlayerBoardComponent, TargetBoardComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {
  private gameService = inject(GameService);

  ngOnInit() {
    this.gameService.initialiseGame();
  }
}
