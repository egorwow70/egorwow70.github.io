
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalListComponent } from './goal-list.component';
import { CanExitFromGoalsGuard } from './_guards/can-exit-from-goals.guard';
import { CanProceedToGoalsGuard } from './_guards/can-proceed-to-goals.guard';
import { GoalDetailsComponent } from '../goal-details/goal-details.component';

const routes: Routes = [
    {
        path: 'goals',
        component: GoalListComponent,
        canActivate: [CanProceedToGoalsGuard],
        canDeactivate: [CanExitFromGoalsGuard]
    },
    {
        path: 'goals/:id',
        component: GoalListComponent,
        children: [
            {
                path: 'details',
                component: GoalDetailsComponent
            }
        ]
    },
    {
        path: 'goal-list',
        redirectTo: '/goals',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoalListRoutingModule {

}