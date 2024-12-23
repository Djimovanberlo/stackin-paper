import { Component, computed, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  private gameService = inject(GameService);
  readonly gameScore = computed(() => this.gameService.score);
}
