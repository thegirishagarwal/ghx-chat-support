import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Chats } from '../../../_common/interfaces';
import { CommonService } from 'src/app/chat-support/_common/services/common.service';
import { ChatBoxListService } from './chat-box-list.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'chat-box-list',
  templateUrl: './chat-box-list.component.html',
  styleUrls: ['./chat-box-list.component.scss'],
})
export class ChatBoxListComponent implements OnInit, AfterViewInit {

  @Input() chatData: Chats;
  @Input() onlineMsg = 'Available Now';
  @Input() offlineMsg = 'I will come back';
  @Input() themeColor: string;

  @Output() callChatSupport = new EventEmitter();
  @ViewChild('chatList', {static: false}) chatList: ElementRef<HTMLElement>;

  isUserAvailable: boolean;
  d = new Date();
  getYear = this.d.getFullYear();
  getMonth = this.d.getMonth();
  getDate = this.d.getDate();
  getDay = this.d.getDay();
  getHours = this.d.getHours();
  getMinutes = this.d.getMinutes();

  todayDay: string | number;
  nextDay: string | number;

  differeceTime: string | number;

  constructor(
    private cs: CommonService,
    private cbls: ChatBoxListService
  ) { }

  ngOnInit() {
    this.isUserAvailable = this.checkUserAvailable(this.chatData.userAvailability);
  }

  ngAfterViewInit() {

    if (this.isUserAvailable !== false) {
      this.chatList.nativeElement.addEventListener('click', function() {
        this.onSupport(this.chatData);
      }.bind(this), false);
    }

  }

  onSupport(chatData) {
    const dataContact = chatData.contactName || '';
    this.callChatSupport.emit(dataContact);
  }

  checkUserAvailable(availability): boolean {

    // If User is not available then its return null value;
    if (availability === undefined || availability === '' || availability === null) {
      return false;
    }

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    this.todayDay = days[this.d.getDay()];

    // If minutes is 1 to 9 then converted to 01 to 09
    if (this.getMinutes < 10) {
      this.getMinutes = 0 + this.getMinutes;
    }

    // Set NowTime
    let nowTime = this.getHours + ':' + this.getMinutes;
    const nowTimeArray = this.cs.generateTimeArray(nowTime, ':');
    if (nowTimeArray[0] < 10) {
      nowTime = '0' + nowTime;
    }

    // Set Next Day
    this.nextDay = this.getDay + 1;
    if (this.nextDay > 6) {
      this.nextDay = 0;
    }
    this.nextDay = days[this.nextDay];

    // Set Today and Next Day Time
    let todayTime = availability[this.todayDay];
    const nextDayTime = availability[this.nextDay];

    if (typeof todayTime !== 'undefined') {
      todayTime = this.cs.generateTimeArray(todayTime, '-');

      // If user is online
      if (todayTime[0] <= nowTime && todayTime[1] >= nowTime) {
        return true;
      }

      // If user give time like this [10:15-09:15] then its return null
      if (todayTime[0] >= todayTime[1]) {
        this.offlineMsg = 'Your given time is not correct';
      }

      // Check Today is online on not
      if (todayTime[0] > nowTime) {
        this.differeceTime = this.cbls.calculateTimeAvailable(todayTime);
        this.offlineMsg += ' after ' + this.differeceTime;
        return false;
      }

      // Check Next Day status
      if (typeof nextDayTime !== 'undefined') {
        this.differeceTime = this.cbls.calculateNextTimeAvailable(nextDayTime);
        this.offlineMsg += ' after ' + this.differeceTime;
        return false;
      }
    }

    // When called then today time was not given and check next day available or not
    if (typeof nextDayTime !== 'undefined') {
      this.differeceTime = this.cbls.calculateNextTimeAvailable(nextDayTime);
      this.offlineMsg += ' after ' + this.differeceTime;
      return false;
    }
  }


}
