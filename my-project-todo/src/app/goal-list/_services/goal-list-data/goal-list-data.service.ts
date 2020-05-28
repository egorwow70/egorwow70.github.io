import { Injectable } from '@angular/core';
import { Goal } from '../../goal/class/goal';
import { Observable, ReplaySubject, of} from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GoalListSettings } from '../../interface/goal-list-settings';
import { GoalListSnapshot } from '../../class/goal-list-snapshot';

@Injectable()
export class GoalListDataService {

  private static goalListLSKey: string = "-app-goal-list";

  private baseUrl: string = 'assets';

  constructor(
    private httpClient: HttpClient
  ) { }

  public loadGoalList(): Observable<GoalListSnapshot> {
    const LSData: string = localStorage.getItem(GoalListDataService.goalListLSKey);
    if (LSData) {
      return of (
        GoalListSnapshot.fromJSON(JSON.parse(LSData))
      );
    } else {
       return this.httpClient.get<Goal[]>(`${this.baseUrl}/goal-list.json`)
        .pipe(
          map((json: any) => {
            return new GoalListSnapshot(
              '',
              (json || []).filter(Boolean).map(Goal.fromJSON)
            );
          })
        );
    }
  } 

  public loadSettings(): Observable<GoalListSettings> {
    return this.httpClient.get<GoalListSettings>(`${this.baseUrl}/goal-list-settings.json`);
  }

  public saveGoalList(goalListSnapshot: GoalListSnapshot): void {
    localStorage.setItem(
      GoalListDataService.goalListLSKey,
      JSON.stringify(
        GoalListSnapshot.toJSON(goalListSnapshot)
      )
    );
  }
}
