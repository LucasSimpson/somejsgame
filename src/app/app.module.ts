import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {GameComponent} from "./game/game.component";
import {DisplayResourcesComponent} from "./display-resources/display-resources.component";
import {ClockService} from "./core/clock/clock.service";
import {WoodService} from "./core/resources/wood.service";
import {GameService} from "./core/game/game.service";


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DisplayResourcesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClockService,
    WoodService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
