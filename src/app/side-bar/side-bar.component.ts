import { Component, computed, inject } from '@angular/core';
import { GameService } from '../game.service';
import { CardTargetComponent } from '../card-target/card-target.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  imports: [CardTargetComponent],
})
export class SideBarComponent {
  gameService = inject(GameService);
  readonly nextTargetCard = computed(() => this.gameService.nextTargetCard());
  readonly gameScore = computed(() => this.gameService.score());
}
