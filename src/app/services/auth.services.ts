import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable, map, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
  export class AuthService{

constructor(private router: Router){}


userInfo = new BehaviorSubject(null);
jwtHelper = new JwtHelperService();

setToken(login:any):Observable<boolean>{
  const tK = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
   
    localStorage.setItem('token',tK)
    return of(false);
  }

    isLoggedIn() : boolean{
        return localStorage.getItem('token')? true:false;
    }
    
    doLogout() {
        let removeToken = localStorage.removeItem('token');
        if (removeToken == null) {
          this.router.navigate(['login']);
        }
      }

  }
