import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-talks",
  //templateUrl: './talks.component.html',
  template: `
    <input type="text" (keyup)="onKeyUp(search.value)" #search />
    <p [ngStyle]="style">{{ title }}</p>
  `,
  styleUrls: ["./talks.component.css"]
})
export class TalksComponent implements OnInit {
  title: string = "Angular Rocks";
  style = {
    "background-color": "lightgray",
    padding: "10px"
  };

  constructor() {}

  ngOnInit() {}

  onKeyUp(value) {
    this.title = "it's clicked";
    console.log("clicked!!" + value);
  }
}
