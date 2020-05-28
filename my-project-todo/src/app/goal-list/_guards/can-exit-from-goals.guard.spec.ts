import { TestBed } from '@angular/core/testing';

import { CanExitFromGoalsGuard } from './can-exit-from-goals.guard';

describe('CanExitFromGoalsGuard', () => {
  let guard: CanExitFromGoalsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanExitFromGoalsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
