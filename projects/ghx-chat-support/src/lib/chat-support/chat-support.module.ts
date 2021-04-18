import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhxChatSupportComponent } from './chat-support.component';
import { ChatBoxComponent } from './_components/chat-box/chat-box.component';
import { ChatBoxListComponent } from './_components/chat-box/chat-box-list/chat-box-list.component';

import { ChatIconComponent } from './_components/chat-box/chat-icon/chat-icon.component';
import { ChatBoxDirective } from './_common/directives/chat-box.directive';

@NgModule({
  declarations: [GhxChatSupportComponent, ChatBoxComponent, ChatBoxListComponent, ChatIconComponent, ChatBoxDirective],
  imports: [
    CommonModule,
  ],
  exports: [GhxChatSupportComponent],
  entryComponents: [ChatBoxComponent]
})
export class GhxChatSupportModule { }
