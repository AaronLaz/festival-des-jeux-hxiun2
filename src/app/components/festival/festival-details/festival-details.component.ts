import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Festival } from "../../../models/festival";

@Component({
  selector: "app-festival-details",
  templateUrl: "festival-details.component.html",
  styleUrls: ["festival-details.component.css"]
})
export class festivalDetailsComponent implements OnInit {
  constructor() {}
  @Input() festival: Festival;
  nameControl: FormControl;

  ngOnInit(): void {
    this.nameControl = new FormControl(this.festival.name);
    this.nameControl.valueChanges.subscribe(name => {
      this.festival.name = name;
    });
  }
  valid(): void {
    this.festival.name = this.nameControl.value;
  }
}
