import { Injectable } from '@angular/core';
import { CommonService } from '../../_common/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {

  constructor(
    private cs: CommonService
  ) { }


  onWhatsapp(contactName) {
    let chatUrl = 'https://web.whatsapp.com/send';
    let openUrl = '';

    if (this.cs.isMobileDevie()) {
      chatUrl = 'https://api.whatsapp.com/send';
    }

    if (!contactName) {
      return;
    }
    contactName = contactName.toString().replace('+', '');
    openUrl = chatUrl + '?phone=' + contactName;

    window.open(openUrl, '_blank');
  }

  onSkype(contactName) {
    const chatUrl = 'skype:';
    let openUrl = '';
    if (!contactName) {
      return;
    }
    contactName = contactName.toString().replace('+', '');
    openUrl = chatUrl + contactName + '?chat';

    window.open(openUrl, '_self');

  }

  onmessenger(contactName) {
    const chatUrl = 'https://m.me/';
    let openUrl = '';

    if (!contactName) {
      return;
    }
    contactName = contactName.toString().replace('+', '');
    openUrl = chatUrl + contactName;

    window.open(openUrl, '_blank');
  }

  onTelegram(contactName) {
    const chatUrl = 'https://t.me/';
    let openUrl = '';

    if (!contactName) {
      return;
    }
    contactName = contactName.toString().replace('+', '');
    openUrl = chatUrl + contactName;

    window.open(openUrl, '_blank');
  }
}
