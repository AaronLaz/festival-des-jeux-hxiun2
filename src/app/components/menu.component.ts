import { Component, Input } from "@angular/core";

@Component({
  selector: "mainmenu",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class MenuComponent {
  @Input() name: string;
}
