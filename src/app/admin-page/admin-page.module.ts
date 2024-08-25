import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MenusComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
})
export class AdminPageModule { }
