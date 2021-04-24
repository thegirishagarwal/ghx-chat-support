import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerComponent } from './messenger/messenger.component';
import { SkypeComponent } from './skype/skype.component';
import { TelegramComponent } from './telegram/telegram.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'skype',
    pathMatch: 'full'
  },
  {
    path: 'skype',
    component: SkypeComponent
  },
  {
    path: 'whatsapp',
    component: WhatsappComponent
  },
  {
    path: 'telegram',
    component: TelegramComponent
  },
  {
    path: 'messenger',
    component: MessengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
