import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class AppModule {

}
