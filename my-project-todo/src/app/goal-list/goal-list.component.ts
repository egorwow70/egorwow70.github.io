import { Component, OnInit} from '@angular/core';
import { Goal } from '../goal/class/goal';
import { editingGoalInterface } from '../goal/interface/editingGoalInterface';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {

  public goalCounter: number = 1;
  public goalLimit: number = 5;
  public goalFilterLimit: number = 2;

  public goalLimiter: boolean = false;
  public goalFilterLimiter: boolean = false;

  public isGoalSortedByIncrease: boolean = false;
  public isGoalSortedByDecrease: boolean = false;
  public isGoalCleaned: boolean = false;

  public goalList: Goal[] = [
    new Goal(`${this.goalCounter}`, '')
  ];

  public filteredGoalList: Goal[] = [];

  public goalSearch: string = '';

  constructor() { }

  ngOnInit(): void {
    this.search();
  }

  public addGoal(): void {
    this.goalCounter++;
    this.isLimitGoal();
    const newGoal: Goal = new Goal(`${this.goalCounter}`, '');
    this.goalList.push(newGoal);
    this.isGoalCleaned = false;
  }

  public sortTop(): void {
    this.isGoalSortedByIncrease = true;
    this.isGoalSortedByDecrease = false;
    this.sort();
  }

  public sortBot(): void {
    this.isGoalSortedByDecrease = true;
    this.isGoalSortedByIncrease = false;
    this.sort();
  }

  public sort(): void {
    this.goalList = this.goalList.sort((goal: Goal, otherGoal: Goal) => {
      const goalName: string = String(goal.Name).toLowerCase();
      const otherGoalName: string = String(otherGoal.Name).toLowerCase();
      const result: boolean = this.isGoalSortedByIncrease
        ? goalName < otherGoalName
        : goalName > otherGoalName;
      return result ? 1 : -1;
    });
  }

  public clean(): void {
    this.goalList = this.goalList.filter((goal: Goal)=>{
      if (goal.IsSaved) {
        return goal.IsSaved;
      } else this.goalCounter--;
    });
    this.isLimitGoal();
    this.isGoalCleaned = true;
  }

  public isClean(): boolean {
    let isClean: Goal[] = this.goalList.filter((goal: Goal)=>{
        return !goal.IsSaved;
    });
    return !Boolean(isClean.length);
  }

  public search(): void {
    if (this.goalSearch) {
      this.filteredGoalList = this.goalList.filter((goal: Goal) => {
        return String(goal.Name).toLowerCase().includes(
          String(this.goalSearch).toLowerCase()
        );
      });
    }
  }

  public deleteGoal(goal: Goal): void {
    this.goalList = this.goalList.filter((currentGoal) => {
      if (goal.eguals(currentGoal)) {
        this.goalCounter--;
      }
      return !goal.eguals(currentGoal);
    });
    this.isLimitGoal();
    this.canSort();
    this.isGoalCleaned = this.isClean();
  }

  public isLimitGoal(): void {
    if (this.goalCounter >= this.goalLimit) {
      this.goalLimiter = true;
      setTimeout(() => {
        alert('It is too many tasks for you today, handle these for a start, please');
      }, 500)
    } else {
      this.goalLimiter = false;
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
    this.isGoalCleaned = this.isClean();
  }

  public editGoal(obj: editingGoalInterface): void {
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
    goal.IsDone = (goal.IsDone === true) ? false : true;
    goal.IsCanDone = (goal.IsCanDone === true) ? false : true;
  }

  public canSort(): void {
    let savedGoalList: Goal[] = this.goalList.filter((goal)=>{ return goal.IsSaved });
    console.log(savedGoalList);
    this.goalFilterLimiter = (!this.isClean() || savedGoalList.length > 0)? true: false;
    console.log(this.goalFilterLimiter);
  }
}
