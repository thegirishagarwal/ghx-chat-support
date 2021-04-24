import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ghx-chat-support';

  chatList = [];

  ngOnInit() {
    this.chatList = [
      {
        userImg: '',
        userName: 'John Deo',
        userDesignation: 'Web Developer',
        contactName: 'thegirishagarwal',
        userAvailability: {
          sunday: '09:00-19:00',
          monday: '09:00-19:00',
          tuesday: '09:00-19:00',
          wednesday: '09:00-19:00',
          thursday: '09:00-19:00',
          friday: '09:00-19:00',
          saturday: '10:30-19:00',
        },
      },
    ]
  }
}
