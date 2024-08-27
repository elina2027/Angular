import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontPageComponent } from './front-page.component';


@NgModule({
  imports:
  [CommonModule,
  ],
  declarations: [PagesListComponent, HomePageComponent],
})

export class FrontPageModule { }
