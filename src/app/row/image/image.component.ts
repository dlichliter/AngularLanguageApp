import { Component, Input, OnDestroy } from '@angular/core';
import { GameService } from '../../game.service';
import { MessageService } from '../../message.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: [
    './image.component.css'
  ],
})

export class ImageComponent implements OnDestroy {
  constructor(
    private gameService: GameService,
    private messageService: MessageService
  ) {
    this.subscription = this.messageService.getMessage().subscribe((message) => {
      if (message.text === 'CardClicked') {
        if (this.gameService.getCurrentQuestion() !== this.imageName) {
          this.classes = 'fadedCard';
        }
      }
    });
  }
  @Input() imageUrl: string;
  @Input() imageName: string;
  subscription: Subscription;
  classes = '';

  public cardClicked(): void {
    this.gameService.checkAnswer(this.imageName);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
