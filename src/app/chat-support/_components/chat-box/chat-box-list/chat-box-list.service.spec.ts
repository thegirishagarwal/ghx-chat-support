import { TestBed } from '@angular/core/testing';

import { ChatBoxListService } from './chat-box-list.service';

describe('ChatBoxListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatBoxListService = TestBed.get(ChatBoxListService);
    expect(service).toBeTruthy();
  });
});
