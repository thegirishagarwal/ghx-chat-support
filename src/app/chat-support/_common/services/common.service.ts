import { Injectable } from '@angular/core';
import { ChatBoxType } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  setIconName(type: ChatBoxType | Array<any>): string {
    let iconName: string = null;
    switch(type) {
      case 'whatsapp':
        iconName = 'whatsapp';
        break;
      case 'skype':
        iconName = 'skype';
        break;
      case 'telegram':
        iconName = 'telegram';
        break;
      case 'messenger':
        iconName = 'messenger';
        break;
    }
    return iconName;
  }

  setThemeColor(type: ChatBoxType | Array<any>): string {
    let themColor: string = null;
    switch(type) {
      case 'whatsapp':
        themColor = '#26c281';
        break;
      case 'skype':
        themColor = '#00aff0';
        break;
      case 'telegram':
        themColor = '#28a6e5';
        break;
      case 'messenger':
        themColor = '#00a1ff';
        break;
    }
    return themColor;
  }

  isMobileDevie() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return (isMobile) ? true : false;
  }


  generateTimeArray(time: string, type: string): Array<number> {
    let timeArray = [];

    if (!time) {
      return;
    }

    timeArray = time.split(type);
    return timeArray;
  }


  difference_minutes(dt2, dt1) {

    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

}
