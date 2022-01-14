import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root',
})
export class GameService {
  private score = 0;

  public getScore(): number {
    return this.score;
  }
}
