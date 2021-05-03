import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  ViewEncapsulation
} from '@angular/core';
import { fromEvent } from 'rxjs';

import { ChatBoxType, GhxChats } from './_common/interfaces';
import { ChatBoxDirective } from './_common/directives/chat-box.directive';
import { ChatBoxComponent } from './_components/chat-box/chat-box.component';
import { CommonService } from './_common/services/common.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ghx-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GhxChatSupportComponent implements OnInit, AfterViewInit {

  public showChatBox = false;
  public showChatIcons = false;
  @Input() isShowChatBox = false;
  @Input() isShowChatIcons = false;
  @Input() chatHeading = 'Need Help? Chat with us';
  @Input() chatTagline = 'Click one of our representatives below';
  @Input() chatBoxType: Array<any> | ChatBoxType;
  @Input() iconName: string;
  @Input() chatList: GhxChats[];
  @Input() chatQuantity: 'single' | 'multiple' = 'single';

  themeColor: string;
  chatIcons: Array<any> = [];

  @ViewChild('chatIcon', {static: false}) chatIcon: ElementRef<HTMLDivElement>;
  @ViewChild('chatBox', {static: false}) chatBox: ElementRef<HTMLDivElement>;
  public chatIcon$: any;

  private previousType: string = null;

  @ViewChild(ChatBoxDirective, {static: false}) chatBoxD: ChatBoxDirective;
  componentRef: ComponentRef<any>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.setProperty();
    this._setIconName();
    this._setThemeName();
    if (typeof this.chatBoxType !== 'string') {
      this.chatBoxType.forEach(type => {
        this.chatIcons.push(
          {
            icon: type,
            theme: this.commonService.setThemeColor(type)
          }
        );
      });
    }
  }

  ngAfterViewInit() {
    this.chatIcon$ = fromEvent(this.chatIcon.nativeElement, 'click');
    this.openChatBoxWithTypes();
  }

  openChatBoxWithTypes(): void {
    this.setChatBox();
  }

  setProperty() {}

  _setIconName() {
    this.iconName = this.commonService.setIconName(this.chatBoxType);
  }

  _setThemeName() {
    this.themeColor = this.commonService.setThemeColor(this.chatBoxType);
  }

  private setChatBox() {
    if (this.chatQuantity === 'single') {
      this.onSingleChatBox();
    }
    if (this.chatQuantity === 'multiple') {
      this.onMultipleChatBox();
    }
  }

  private onSingleChatBox() {
    if (this.isShowChatBox) {
      this._openChatBox();
      return;
    }
    this.chatIcon$.subscribe(() => {
      this._openChatBox();
    });
  }

  private onMultipleChatBox() {
    this.isShowChatBox = false;
    this.chatIcon$.subscribe(() => {
      this._openChatIcon();
    });
  }

  private _openChatIcon() {
    this.showChatIcons = !this.showChatIcons;
    if (!this.showChatIcons) {
      this.previousType = null;
      this.componentRef.destroy();
    }
  }

  _openChatBox() {
    this.showChatBox = !this.showChatBox;
    if ( this.showChatBox ) {
      this.openChatBox(this.chatBoxType, this.chatList);
    } else {
      this.closeChatBox();
    }
  }

  openChatBoxIcon(type: ChatBoxType) {
    if (this.previousType === type) {
      this.componentRef.instance.closeChatBox.emit(true);
      this.previousType = null;
    } else {
      this.previousType = type;
      const chatList = this.chatList.filter(chats => {
        if (chats.type !== undefined && chats.type !== null) {
          return chats.type === type;
        }
      });
      this.openChatBox(type, chatList);
    }
  }

  openChatBox(boxType?: ChatBoxType | Array<any>, chatList?: GhxChats[]) {
    const componentFactory = this.cfr.resolveComponentFactory(ChatBoxComponent);

    const viewContainerRef = this.chatBoxD.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.themeColor = this.commonService.setThemeColor(boxType);
    this.componentRef.instance.chatHeading = this.chatHeading;
    this.componentRef.instance.chatTagline = this.chatTagline;
    this.componentRef.instance.chatList = chatList;
    this.componentRef.instance.chatBoxType = boxType;


    this.chatBox.nativeElement.classList.add('showChatBox');
    this.closeChatBox();
  }

  closeChatBox() {
    this.componentRef.instance.closeChatBox.subscribe((isClose) => {
      if (isClose) {
        this.showChatBox = false;
        this.chatBox.nativeElement.classList.remove('showChatBox');
        setTimeout(() => this.componentRef.destroy(), 500);
      }
    });
  }

}
