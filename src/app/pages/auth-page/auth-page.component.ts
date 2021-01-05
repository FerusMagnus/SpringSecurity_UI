import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor( private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  public sendLoginForm(): void {
    this.service.login();

    this.router.navigate(['']).then();
  }

  public sendSignForm(): void {
    this.service.registration();

    this.router.navigate(['']).then();
  }
}
