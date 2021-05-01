import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chatBoxDD]'
})
export class ChatBoxDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
