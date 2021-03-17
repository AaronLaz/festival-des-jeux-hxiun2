import { Festival } from "../../../models/festival";
import { Input, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-festivals-list",
  templateUrl: "./festivals-list.component.html",
  styleUrls: ["./festivals-list.component.css"]
})
export class FestivalsListComponent implements OnInit {
  @Input() festivals: Festival[];
  constructor() {}

  ngOnInit(): void {}
}
