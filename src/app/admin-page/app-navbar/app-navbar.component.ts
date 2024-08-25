import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AfService } from '../../providers/af.service';
import { User } from '../../providers/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButton,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
})
export class AppNavbarComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  user!: User;

  constructor(public afService: AfService) {}

  ngOnInit() {
    this.afService.user$.subscribe((user: any) => (this.user = user));
  }
}
