import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';

import { ChatBoxType, Chats } from '../../_common/interfaces';
import { Observable, fromEvent } from 'rxjs';
import { ChatBoxService } from './chat-box.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, AfterViewInit {

  @Input() isShowHeader = true;
  @Input() themeColor: string;
  @Input() chatHeading: string;
  @Input() chatTagline: string;
  @Input() chatList: Chats[];
  @Input() chatBoxType: ChatBoxType = 'whatsapp';

  @Output() closeChatBox = new EventEmitter<boolean>();

  @ViewChild('closeChatBox', {static: true}) closeChatBoxElem: ElementRef<HTMLAnchorElement>;
  closeChatBoxElem$: Observable<any>;

  constructor(
    private chatBoxServive: ChatBoxService,
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.closeChatBoxElem$ = fromEvent(this.closeChatBoxElem.nativeElement, 'click');
    this._closeChatBox();
  }


  _closeChatBox() {
    this.closeChatBoxElem$.subscribe(() => {
      this.closeChatBox.emit(true);
    });
  }

  onChatSupport(chatBoxType: string, contactName) {

    switch (chatBoxType) {
      case 'whatsapp':
        this.chatBoxServive.onWhatsapp(contactName);
        break;
      case 'skype':
        this.chatBoxServive.onSkype(contactName);
        break;
      case 'messenger':
        this.chatBoxServive.onmessenger(contactName);
        break;
      case 'telegram':
        this.chatBoxServive.onmessenger(contactName);
        break;
    }

  }

}
