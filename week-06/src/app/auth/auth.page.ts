import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.login();
  }

  onLogin(){
    this.isLoading = true;
    this.authService.login();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl('/places/tabs/discover');
    }, 1500)
  }
}
