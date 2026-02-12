import { Routes } from '@angular/router';
import { EmptyPage } from './empty/empty.page';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
    {
    path: '',
    redirectTo: 'empty',
    pathMatch: 'full'
  },
  {
    path: 'empty',
    component: EmptyPage
  },
  {
    path: 'empty',
    loadComponent: () => import('./empty/empty.page').then( m => m.EmptyPage)
  }
];
