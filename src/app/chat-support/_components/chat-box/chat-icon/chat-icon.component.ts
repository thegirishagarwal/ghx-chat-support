import { Component, OnInit, Input } from '@angular/core';

declare function require(path: string);

@Component({
  selector: 'chat-icon',
  templateUrl: './chat-icon.component.html',
  styleUrls: ['./chat-icon.component.scss']
})
export class ChatIconComponent implements OnInit {

  @Input() iconName: string = 'comment';
  @Input() iconColor: string = '#1bd741';

  constructor() {}

  ngOnInit() {
  }

}
