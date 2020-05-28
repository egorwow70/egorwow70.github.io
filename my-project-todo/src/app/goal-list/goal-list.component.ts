import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoalListService } from './_services/goal-list/goal-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Goal } from './goal/class/goal';
import { combineLatest, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CanComponentDeactivate } from './_guards/can-exit-from-goals.guard';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  private destroySubject$: Subject<boolean> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public goalListService: GoalListService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.params
        .pipe(
          takeUntil(this.destroySubject$)
        ),
      this.goalListService.goalList$
        .pipe(
          takeUntil(this.destroySubject$)
        )
    ]).subscribe(([params, goalList]: [Params, Goal[]]) => {
      const currentGoalId = (params) ? params.id : null;
      if (goalList && goalList.length > 0) {
        const currentGoal: Goal = this.goalListService.findCurrentGoal(currentGoalId);
        if (currentGoal) {
          this.goalListService.selectGoal(currentGoal)
        } else this.router.navigate(['/goals']);
      }
    });
  }

  public selectGoal(goalId: string): void {
    this.router.navigate(['/goals', goalId, 'details']);
  }

  public canDeactivate(): boolean | Observable<boolean> {
    const deactivateQuestion: string = 'You haven’t saved some goals. Are you sure that you want to go to another page?';
    return (!this.goalListService.isClean()) 
      ? confirm(deactivateQuestion) 
      : true;
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

}
