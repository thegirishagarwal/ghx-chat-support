import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhxChatSupportModule } from './chat-support/chat-support.module';

@NgModule({
  declarations: [
    AppComponent
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
