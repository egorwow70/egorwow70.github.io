import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoalComponent } from './goal/goal.component';
import { GoalListComponent } from './goal-list.component';
import { GoalListService } from './_services/goal-list/goal-list.service';
import { GoalListDataService } from './_services/goal-list-data/goal-list-data.service';
import { HttpClientModule } from '@angular/common/http';
import { GoalDetailsComponent } from '../goal-details/goal-details.component';
import { CanExitFromGoalsGuard } from './_guards/can-exit-from-goals.guard';
import { CanProceedToGoalsGuard } from './_guards/can-proceed-to-goals.guard';
import { GoalListRoutingModule } from './goal-list-routing.module';

@NgModule({
  declarations: [
    GoalComponent,
    GoalListComponent,
    GoalDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    GoalListRoutingModule
  ],
  providers: [
    GoalListService,
    GoalListDataService,
    CanExitFromGoalsGuard,
    CanProceedToGoalsGuard
  ],
  exports: [
    GoalListComponent
  ]
})
export class GoalListModule { }