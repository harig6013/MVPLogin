import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginComponent } from '../login/login.component';
import { AuthService } from './auth.services';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){}
    


  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return this.authService.isLoggedIn();
    }
}
