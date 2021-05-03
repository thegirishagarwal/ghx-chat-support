import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GhxChatSupportModule } from './chat-support/chat-support.module';
import { TelegramComponent } from './telegram/telegram.component';
import { MessengerComponent } from './messenger/messenger.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { SkypeComponent } from './skype/skype.component';
import { MultipleComponent } from './multiple/multiple.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    TelegramComponent,
    MessengerComponent,
    WhatsappComponent,
    SkypeComponent,
    MultipleComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GhxChatSupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
