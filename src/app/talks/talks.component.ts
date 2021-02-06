import { Component, OnInit } from "@angular/core";
import { TalkService } from "./talk.service";

@Component({
  selector: "app-talks",
  //templateUrl: './talks.component.html',
  template: `
    <input type="text" (keyup)="onKeyUp(search.value)" #search />
    <p [ngStyle]="style" *ngFor="let talk of talks; let i = index">
      <span *ngIf="display(i)">{{ i }}</span> {{ talk.title }} -- {{talk.date | date}}
    </p>
  `,
  styleUrls: ["./talks.component.css"]
})
export class TalksComponent implements OnInit {
  talks: Array<any> = [];

  style = {
    "background-color": "lightgray",
    padding: "10px"
  };

  constructor(private talkService: TalkService) {
    this.talks = this.talkService.getAllTalks();
  }

  ngOnInit() {}
  display(i) {
    return i > 0;
  }
  onKeyUp(value) {
    console.log("clicked!!" + value);
  }
}
