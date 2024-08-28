import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { adminGuard } from './guards/admin.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./front-page/front-page.module').then((m) => m.FrontPageModule),
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-page/admin-page.module').then((m) => m.AdminPageModule),
    canActivate: [adminGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
