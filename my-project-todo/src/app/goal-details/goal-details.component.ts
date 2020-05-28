import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal-list/goal/class/goal';
import { GoalListService } from '../goal-list/_services/goal-list/goal-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent implements OnInit {

  public get goal(): Goal {
    return this.goalListService.selectedGoal;
  }

  constructor(
    private router: Router,
    private goalListService: GoalListService
  ) { }

  ngOnInit(): void {
  }

  public goToGoalListComponent(): void {
    this.goalListService.resetSelectedGoal();
    this.router.navigate(['/goals']);
  }

}
