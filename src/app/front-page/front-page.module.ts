import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';
import { MaterialModule } from '../admin-page/material.module';
import { FrontRoutingModule } from './front-routing.module';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FrontRoutingModule,
    MatIconModule
  ],
  declarations: [
    PagesListComponent,
    HomePageComponent,
    FrontPageComponent,
    AppNavbarComponent,
    PagesComponent
  ]
})
export class FrontPageModule { }
