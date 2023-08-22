import { Component } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService){}

  logOut(){
    this.authService.doLogout();
  }
}
