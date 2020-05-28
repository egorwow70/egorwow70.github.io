import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Goal } from '../../goal/class/goal';
import { EditingGoalInterface } from '../../goal/interface/EditingGoalInterface';
import { GoalListDataService } from '../goal-list-data/goal-list-data.service';

import { delay, takeUntil, first, map } from 'rxjs/operators';
import { GoalListSettings } from '../../interface/goal-list-settings';
import { Subject, combineLatest, ReplaySubject, Observable } from 'rxjs';
import { GoalListSnapshot } from '../../class/goal-list-snapshot';

@Injectable()
export class GoalListService implements OnDestroy, OnInit {

  public isLoading: boolean = true;

  public settings: GoalListSettings = null;

  public goalCounter: number;
  public goalList: Goal[] = [];
  public filteredGoalList: Goal[] = [];

  public goalSearch: string = '';

  public selectedGoal: Goal = null;

  public goalList$: ReplaySubject<Goal[]> = new ReplaySubject<Goal[]>(1);

  private destroySubject$: Subject<boolean> = new Subject();

  constructor(
    private goalListDataService: GoalListDataService
  ) {
    
  }

  ngOnInit(): void {
    combineLatest([
      this.goalListDataService.loadGoalList()
        .pipe(
          delay(3000),
          first()
        ),
      this.goalListDataService.loadSettings()
        .pipe(
          delay(1000),
          first()
        )
    ]).subscribe(([goalListSnapshot, settings]: [GoalListSnapshot, GoalListSettings]) => {
      debugger
      this.settings = settings;
      this.initGoalList(goalListSnapshot);
    }); 
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }

  public initGoalList(goalListSnapshot: GoalListSnapshot): void {
    this.goalList = goalListSnapshot.goalList;
    this.goalList$.next(this.goalList);
    this.goalCounter = goalListSnapshot.goalList.length;
    if (Boolean(goalListSnapshot.goalSearch)) {
      this.goalSearch = goalListSnapshot.goalSearch;
      this.search();
    }
    this.canSort();
    this.isLoading = false;
    this.settings.isGoalCleaned = this.isClean();
    this.isLimitGoal();
  }

  public save(): void {
    this.goalListDataService.saveGoalList(
      new GoalListSnapshot(
        this.goalSearch,
        this.goalList
      )
    );
  }

  public addGoal(): void {
    this.goalCounter++;
    const newGoal: Goal = new Goal(`${this.goalCounter}`, '');
    this.goalList.push(newGoal);
    this.resetSort();
    this.canSort();
    this.settings.isGoalCleaned = false;
    this.isLimitGoal();
  }

  public sortTop(): void {
    this.settings.isGoalSortedByIncrease = true;
    this.settings.isGoalSortedByDecrease = false;
    this.sort();
  }

  public sortBot(): void {
    this.settings.isGoalSortedByDecrease = true;
    this.settings.isGoalSortedByIncrease = false;
    this.sort();
  }

  public sort(): void {
    this.goalList = this.goalList.sort((goal: Goal, otherGoal: Goal) => {
      const goalName: string = String(goal.Name).toLowerCase();
      const otherGoalName: string = String(otherGoal.Name).toLowerCase();
      const result: boolean = this.settings.isGoalSortedByIncrease
        ? goalName < otherGoalName
        : goalName > otherGoalName;
      return result ? 1 : -1;
    });
  }

  public clean(): void {
    this.goalList = this.goalList.filter((goal: Goal) => {
      if (goal.IsSaved) {
        return goal.IsSaved;
      } else this.goalCounter--;
    });
    this.isLimitGoal();
    this.canSort();
    this.settings.isGoalCleaned = true;
  }

  public isClean(): boolean {
    const isClean: Goal[] = this.goalList.filter((goal: Goal) => {
      return !goal.IsSaved;
    });
    return !Boolean(isClean.length);
  }

  public search(): void {
    if (this.goalSearch) {
      this.settings.goalSortLimiter = true;
      this.settings.goalCleanLimiter = true;
      this.filteredGoalList = this.goalList.filter((goal: Goal) => {
        return String(goal.Name).toLowerCase().includes(
          String(this.goalSearch).toLowerCase()
        );
      });
    } else {
      this.settings.goalCleanLimiter = this.isClean();
      this.settings.goalSortLimiter = false;
    }
  }

  public deleteGoal(goal: Goal): void {
    this.goalList = this.goalList.filter((currentGoal) => {
      if (goal.equals(currentGoal)) {
        this.goalCounter--;
      }
      return !goal.equals(currentGoal);
    });
    this.isLimitGoal();
    this.canSort();
    this.settings.isGoalCleaned = this.isClean();
  }

  public isLimitGoal(): void {
    if (this.goalCounter >= this.settings.goalLimit) {
      this.settings.goalLimiter = true;
      alert('It is too many tasks for you today, handle these for a start, please');
    } else {
      this.settings.goalLimiter = false;
    }
  }

  public doneGoal(goal: Goal): void {
    this.toggleMode(goal);
  }

  public madeUnmarkGoal(goal: Goal): void {
    this.toggleMode(goal);
  }

  public saveGoal(goal: Goal): void {
    goal.IsCanSave = false;
    goal.IsSaved = true;
    goal.IsCanDone = true;
    this.canSort();
    this.settings.isGoalCleaned = this.isClean();
  }

  public editGoal(obj: EditingGoalInterface): void {
    this.resetSort();
    this.settings.isGoalCleaned = false;
    if (this.validGoal(obj.goal)) {
      obj.goal.IsCanSave = true;
      obj.goal.IsCanDone = false;
    }
    obj.goal.IsSaved = false;
    if (obj.input) {
      obj.input.focus();
    }
  }

  public validGoal(goal: Goal): boolean {
    return goal
      && Boolean(goal.Name);
  }

  public toggleMode(goal: Goal): void {
    goal.IsDone = !goal.IsDone;
    goal.IsCanDone = !goal.IsCanDone;
  }

  public canSort(): void {
    const savedGoalList: Goal[] = this.goalList.filter((goal) => { return goal.IsSaved });
    this.settings.goalFilterLimiter = (!this.isClean() || savedGoalList.length > 0) ? true : false;
    this.settings.goalSortLimiter = (this.goalList.length <= 1 || Boolean(this.goalSearch)) ? true : false;
  }

  public resetSort(): void {
    this.settings.isGoalSortedByIncrease = false;
    this.settings.isGoalSortedByDecrease = false;
  }

  public selectGoal(goal: Goal): void {
    if (this.canSelect(goal)) {
      this.selectedGoal = goal;
    }
  }

  public canSelect(goal: Goal): boolean {
    return Boolean(goal)
      && (!this.selectedGoal || this.selectedGoal.Id !== goal.Id);
  }

  public isGoalSelected(goal: Goal): boolean {
    return Boolean(this.selectedGoal)
      && this.selectedGoal.equals(goal);
  }

  public findCurrentGoal(goalId: string): Goal {
    return this.goalList.find((goal: Goal) => goal.Id === goalId);
  }

  public resetSelectedGoal(): void {
    if (this.selectGoal) {
      this.selectedGoal = null;
    }
  }

}
