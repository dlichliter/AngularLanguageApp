import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NotificationComponent } from './notification/notification.component';
import { ScoreComponent } from './score/score.component';
import { RowComponent } from './row/row.component';
import { ImageComponent } from './row/image/image.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    NotificationComponent,
    ScoreComponent,
    RowComponent,
    ImageComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrophy);
  }
}
