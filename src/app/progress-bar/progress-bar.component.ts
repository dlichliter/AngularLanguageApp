import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [
    './progress-bar.component.css'
  ],
})

export class ProgressBarComponent {
  constructor(public gameService: GameService) {}
}
