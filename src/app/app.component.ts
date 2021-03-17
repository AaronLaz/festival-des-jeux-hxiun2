import { Component, VERSION } from "@angular/core";
import { Festival } from "./models/festival";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "FestivalApp";
  festivals: Festival[];

  constructor() {}

  ngOnInit() {
    this.festivals = [
      new Festival("FJM2019"),
      new Festival("FJM2020"),
      new Festival("FJM2021")
    ];
  }
}
