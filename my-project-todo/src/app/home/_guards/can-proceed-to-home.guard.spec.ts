import { TestBed } from '@angular/core/testing';

import { CanProceedToHomeGuard } from './can-proceed-to-home.guard';

describe('CanProceedToHomeGuard', () => {
  let guard: CanProceedToHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanProceedToHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
