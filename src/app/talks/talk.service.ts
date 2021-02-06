import { Injectable } from "@angular/core";

@Injectable()
export class TalkService {
  constructor() {}

  getAllTalks(){
    return [
      {title: "Android Rocks", date: new Date()},
      {title: "Android Mola dos", date: new Date()},
      {title: "Android Mola tres", date: new Date()}
      
    ]
  }
}
