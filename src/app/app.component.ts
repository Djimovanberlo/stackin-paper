import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameLostModalComponent } from './game-lost-modal/game-lost-modal.component';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SideBarComponent,
    GameBoardComponent,
    GameLostModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stackin-paper';
  gameService = inject(GameService);
  readonly isGameLost = computed(() => this.gameService.isGameLost());
}
