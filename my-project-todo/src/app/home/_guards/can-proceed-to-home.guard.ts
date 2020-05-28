import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanProceedToHomeGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const HOME_ACTIVATE_QUESTION: string = 'Hello, it is my new application about current life-goals. Do you want to try it?';
      return confirm(HOME_ACTIVATE_QUESTION);
  }
  
}
