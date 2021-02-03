import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-talks",
  //templateUrl: './talks.component.html',
  template: `
    <input type="text" (keyup)="onKeyUp(search.value)" #search />
    <p [ngStyle]="style" *ngFor="let talk of talks">{{ talk.title }}</p>
  `,
  styleUrls: ["./talks.component.css"]
})
export class TalksComponent implements OnInit {
  talks: Array<any> = [
    {title:"Angular rocks"},
    {title: "Android 101"}
    ]

  style = {
    "background-color": "lightgray",
    padding: "10px"
  };

  constructor() {}

  ngOnInit() {}

  onKeyUp(value) {
    console.log("clicked!!" + value);
  }
}
