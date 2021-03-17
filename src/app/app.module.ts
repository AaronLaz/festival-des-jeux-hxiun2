import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FestivalsListComponent } from "./components/festival/festivals-list/festivals-list.component";
import { festivalDetailsComponent } from "./components/festival/festival-details/festival-details.component";
import { MessageComponent } from "./components/shared/message/message.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FestivalsListComponent,
    festivalDetailsComponent,
    MessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
