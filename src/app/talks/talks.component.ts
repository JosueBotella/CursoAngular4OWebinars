import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-talks",
  //templateUrl: './talks.component.html',
  template: `
    <input type="text" (keyup)="showTalk($event.target.value)"/>
    <p [ngStyle]="getColor()" (click)="onClick($event)">{{ title }}</p>
  `,
  styleUrls: ["./talks.component.css"]
})
export class TalksComponent implements OnInit {
  title: string = "Angular Rocks";
  constructor() {}

  ngOnInit() {
    this.title = "Angular Rocks Changing";
    setInterval(() => this.title, 3000);
  }

  onClick($event) {
    this.title = "it's clicked";
    console.log($event);
  }

  getColor() {
    return {
      "background-color": "lightgray",
      padding: "19px"
    };
  }

  showTalk(value){
    console.log(value);
  }
}
