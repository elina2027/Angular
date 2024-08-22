import { AfService } from '../providers/af.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../providers/user';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent implements OnInit{

  user!: User;
  constructor(public AfService: AfService) {
    this.AfService.user$.subscribe((user) => (this.user = user!));
  }

  ngOnInit() {}


  login() {
    this.AfService.loginWithGoogle();
  }

  logout() {
    this.AfService.logout();
  }
}
