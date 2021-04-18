import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/chat-support/_common/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxListService {

  d = new Date();
  getYear = this.d.getFullYear();
  getMonth = this.d.getMonth();
  getDate = this.d.getDate();
  getDay = this.d.getDay();
  getHours = this.d.getHours();
  getMinutes = this.d.getMinutes();

  constructor(
    private cs: CommonService
  ) { }


  calculateTimeAvailable(todayTime): string | number {
    console.error(todayTime);
    const todayAvailableTime = this.cs.generateTimeArray(todayTime[0], ':');
    const todayDateTime = new Date(this.getYear, this.getMonth, this.getDate, this.getHours, this.getMinutes);
    const availDateTime = new Date(this.getYear, this.getMonth, this.getDate, todayAvailableTime[0], todayAvailableTime[1]);

    const differeceTime = this.setDiffernceTime(todayDateTime, availDateTime);
    return differeceTime;
  }

  calculateNextTimeAvailable(nextDayTime) {
    const nextAvailable = nextDayTime.split('-');
    const nextAvailableStartTime = this.cs.generateTimeArray(nextAvailable[0], ':');

    const todayTime = new Date(this.d.getFullYear(), this.d.getMonth(), this.d.getDate(), this.d.getHours(), this.d.getMinutes());
    const availDateTime = new Date(
      this.d.getFullYear(),
      this.d.getMonth(),
      (this.d.getDate() + 1),
      nextAvailableStartTime[0],
      nextAvailableStartTime[1]
      );
    const differeceTime = this.setDiffernceTime(todayTime, availDateTime);
    return differeceTime;
  }


  setDiffernceTime(todayTime, availDateTime) {
    const diffMinutes = this.cs.difference_minutes(todayTime, availDateTime);
    let diff: string | number = '0';

    if (diffMinutes > 59) {
      if ( (diffMinutes / 60) === 0 ) {
        diff = '1 Hrs.';
      } else {
        diff = diffMinutes % 60;
        if (Math.floor(diffMinutes / 60) > 0) {
          diff = Math.floor(diffMinutes / 60) + ' Hrs. ' + diff + ' Min. ';
        }
      }
    } else {
      diff = diffMinutes + ' Min.';
    }
    return diff;
  }
}
