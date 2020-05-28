import { TestBed } from '@angular/core/testing';

import { GoalListDataService } from './goal-list-data.service';

describe('GoalListDataService', () => {
  let service: GoalListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
