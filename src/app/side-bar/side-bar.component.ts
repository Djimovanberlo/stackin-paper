import { Component, computed } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  constructor(private gameService: GameService) {}

  readonly gameScore = computed(() => this.gameService.score);
}
