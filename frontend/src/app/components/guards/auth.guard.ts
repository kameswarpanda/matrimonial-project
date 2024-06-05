import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const isAuthenticated = !!sessionStorage.getItem('loggedInUser');
    if (isAuthenticated) {
      // User is authenticated, allow navigation
      return true;
    } else {
      // User is not authenticated, redirect to login page
      return this.router.createUrlTree(['/']);
    }
  }
}
