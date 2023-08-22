import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginUserService : LoginuserService, private router: Router, private authService: AuthService) { }
  user:User = new User();
  loginForm!: FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  });
}
onSubmit(){this.loginUserService.loginUser(this.user).subscribe(data => {
  
  this.authService.setToken(this.user);
  this.router.navigateByUrl('/home');
  console.log(this.user)
  
},(error)=> alert('You Entered Wrong Details!!'));
   
}

isUserValid : boolean=false;
 

}