import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {

  chatList = [];

  constructor() { }

  ngOnInit() {
    this.chatList = [
      {
        userImg: '',
        userName: 'John Deo WP',
        userDesignation: 'Web Developer',
        contactName: 'thegirishagarwal',
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
        userName: 'John Deo TG',
        userDesignation: 'Web Developer',
        contactName: 'thegirishagarwal',
        type: 'telegram',
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
        userName: 'John Deo M',
        userDesignation: 'Web Developer',
        contactName: 'thegirishagarwal',
        type: 'messenger',
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
