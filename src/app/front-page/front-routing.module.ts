import { Routes, RouterModule } from '@angular/router';
//import { PagesComponent } from './pages/pages.component';
import { FrontPageComponent } from './front-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';

export const FRONT_ROUTES: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'article',
        component: PagesListComponent,
      },
      // {
      //   path: 'pages/:url',
      //   component: PagesComponent,
      // },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

export const FrontRoutingModule = RouterModule.forChild(FRONT_ROUTES);
