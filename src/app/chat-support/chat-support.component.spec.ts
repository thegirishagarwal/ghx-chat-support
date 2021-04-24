import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhxChatSupportComponent } from './chat-support.component';

describe('GhxChatSupportComponent', () => {
  let component: GhxChatSupportComponent;
  let fixture: ComponentFixture<GhxChatSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhxChatSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhxChatSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
