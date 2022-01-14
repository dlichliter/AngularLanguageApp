import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NotificationComponent } from './notification/notification.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    NotificationComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class AppModule {

}
