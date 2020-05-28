import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanProceedToGoalsGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const GOALS_ACTIVATE_QUESTION: string = 'Are you sure? Do you want to change this page to goals?';
    return confirm(GOALS_ACTIVATE_QUESTION);
  }

}
