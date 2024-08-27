import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagesListComponent } from './front-page/pages-list/pages-list.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { subscriberGuard } from './guards/subscriber.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'article', component: PagesListComponent, canActivate: [subscriberGuard] },
  {
    path: 'admin',
    loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule),
    canActivate: [adminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
