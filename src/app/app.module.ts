import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TalksComponent } from "./talks/talks.component";
import { TalkService } from "./talks/talk.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TalksComponent],
  bootstrap: [AppComponent],
  providers: [TalkService]
})
export class AppModule {}
