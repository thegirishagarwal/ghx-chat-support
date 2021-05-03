import { Component, OnInit } from '@angular/core';
import { GhxChats } from '../chat-support/_common/interfaces';

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
        userImg: '',
        userName: 'John Deo',
        userDesignation: 'Web Developer',
        contactName: 'thegirishagarwal',
        type: 'whatsapp',
        userAvailability: {
          sunday: '09:00-19:00',
          monday: '09:00-19:00',
          tuesday: '09:00-19:00',
          wednesday: '09:00-19:00',
          thursday: '09:00-19:00',
          friday: '09:00-19:00',
          saturday: '09:00-19:00'
        }
      },
      {
        userImg: '',
        userName: 'John Deo Skype',
        userDesignation: 'Web Developer',
        contactName: 'thegirishagarwal',
        type: 'skype',
        userAvailability: {
          sunday: '09:00-19:00',
          monday: '09:00-19:00',
          tuesday: '09:00-19:00',
          wednesday: '09:00-19:00',
          thursday: '09:00-19:00',
          friday: '09:00-19:00',
          saturday: '09:00-19:00'
        }
      }
    ];
  }

}
