import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxListComponent } from './chat-box-list.component';

describe('ChatBoxListComponent', () => {
  let component: ChatBoxListComponent;
  let fixture: ComponentFixture<ChatBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
