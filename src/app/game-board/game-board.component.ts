import { Component } from '@angular/core';
import { PlayerBoardComponent } from '../player-board/player-board.component';
import { TargetBoardComponent } from '../target-board/target-board.component';

@Component({
  selector: 'game-board',
  imports: [PlayerBoardComponent, TargetBoardComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss',
})
export class GameBoardComponent {}
