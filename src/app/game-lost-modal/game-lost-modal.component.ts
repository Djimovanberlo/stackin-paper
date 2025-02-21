import { Component } from '@angular/core';

@Component({
  selector: 'app-game-lost-modal',
  imports: [],
  templateUrl: './game-lost-modal.component.html',
  styleUrl: './game-lost-modal.component.scss',
})
export class GameLostModalComponent {
  public reloadPage(): void {
    window.location.reload();
  }
}
