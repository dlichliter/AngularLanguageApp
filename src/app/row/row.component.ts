import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: [
    './row.component.css'
  ],
})

export class RowComponent {
  constructor(public gameService: GameService) {}
}
