import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GameBoardComponent } from './game-board/game-board.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, GameBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stackin-paper';
}
