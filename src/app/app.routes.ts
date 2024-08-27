import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { adminGuard } from './guards/admin.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-page/admin-routing.module').then((mod) => mod.AdminRoutingModule),
    canActivate: [adminGuard],
  },

  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-page/admin-routing.module').then((mod) => mod.AdminRoutingModule),
    canActivate: [adminGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
