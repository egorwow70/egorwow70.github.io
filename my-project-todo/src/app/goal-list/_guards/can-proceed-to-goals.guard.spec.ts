import { TestBed } from '@angular/core/testing';

import { CanProceedToGoalsGuard } from './can-proceed-to-goals.guard';

describe('CanProceedToGoalsGuard', () => {
  let guard: CanProceedToGoalsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanProceedToGoalsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
