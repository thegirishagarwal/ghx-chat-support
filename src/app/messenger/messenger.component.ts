import { Component, OnInit } from '@angular/core';
import { GhxChats } from 'ghx-chat-support';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  chatList: GhxChats[] = [];

  constructor() { }

  ngOnInit() {
    this.chatList = [
      {
        userImg: "",
        userName: "John Deo",
        userDesignation: "Web Developer",
        contactName: "thegirishagarwal",
        userAvailability: {
          sunday: "09:00-19:00",
          monday: "09:00-19:00",
          tuesday: "09:00-19:00",
          wednesday: "09:00-19:00",
          thursday: "09:00-19:00",
          friday: "09:00-19:00",
          saturday: "10:30-19:00"
        }
      }
    ];
  }

}
